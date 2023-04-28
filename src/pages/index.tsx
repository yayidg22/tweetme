import { IPost, addNewPostService, usePosts } from '@/api/post';
import TweetItem from '@/components/TweetItem/tweetitem';
import { Characters } from '@/constants/charactersImages';
import { useAuth } from '@/contexts/auth';
import { Container, FormContainer, TweetHeader, TweetInput, TweetsContainer, UserImage } from '@/styles/home.module';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

const Home = () => {
  const { user } = useAuth();
  const router = useRouter();

  const { data: PostsList, error: PostsError, isLoading: PostsIsLoading, mutate: PostsMutate } = usePosts();
  const [inputValue, setInputValue] = useState('');

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue.length === 0) {
      return;
    }
    try {
      const response = await addNewPostService({
        description: inputValue
      });
      if (response.ok) {
        setInputValue('');
        PostsMutate();
      }
    } catch (error) {
      alert('error')
    }
  }

  const TweetList = useMemo(() => {
    const postsData: IPost[] = PostsList?.data?.posts as IPost[]
    if (!postsData) {
      return
    }
    return [...postsData].reverse().map(item => <TweetItem key={item.id} description={item.description} alternalName={item?.user?.alternalName as string} createdDate={item.created_date} id={item.id} selectedCharacter={item.user?.selectedCharacter as number} />)
  }, [PostsList])

  return (
    <Container>
      <Head>
        <title>TweetMe</title>
      </Head>
      <TweetHeader>
        <UserImage
          onClick={() => router.push('/user/me')}
          src={Characters.find(item => item.id === user?.selectedCharacter)?.image as string}
          alt="Logo"
          width={200}
          height={200}
          priority />
        <FormContainer onSubmit={handlePost}>
          <TweetInput onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='Type some emojis!' />
        </FormContainer>
      </TweetHeader>
      <TweetsContainer>
        {TweetList}
      </TweetsContainer>
    </Container>
  )
}

Home.requiresAuth = true;

export default Home