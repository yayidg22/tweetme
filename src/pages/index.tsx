import { IPost, addNewPostService, usePosts } from '@/api/post';
import TweetItem from '@/components/TweetItem/tweetitem';
import { Characters } from '@/constants/charactersImages';
import { useAuth } from '@/contexts/auth';
import { Container, Footer, FormContainer, GithubLogo, TweetHeader, TweetInput, TweetsContainer, UserImage } from '@/styles/home.module';
import { isEmoji } from '@/utilities/StringUtil';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { CustomPage } from './_app';
import AppLayout from '@/layouts/applayout';
import { StyledButton } from '@/styles/Global';

const Home: CustomPage = () => {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const { data: PostsList, error: PostsError, isLoading: PostsIsLoading, mutate: PostsMutate } = usePosts();

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isEmoji(inputValue)) {
      toast.error('Contains non-emoji characters')
      return
    }
    try {
      const response = await addNewPostService({
        description: inputValue
      });
      if (response.ok) {
        PostsMutate();
        setInputValue('')
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
          <TweetInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} id="inputValue" placeholder='Type some emojis!' />
        </FormContainer>
      </TweetHeader>
      <TweetsContainer>
        {TweetList}
      </TweetsContainer>

      <Footer>
        <GithubLogo
          onClick={() => window.open('https://github.com/yayidg22','_blank')}
          src={'/images/githubFullLogo.png'}
          alt="Logo"
          width={200}
          height={200}
          priority
        />
        <StyledButton id="signout" onClick={() => signOut()}>Sign out</StyledButton>

      </Footer>
    </Container>
  )
}
/* 
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      {page}
    </AppLayout>
  )
}
 */
Home.requiresAuth = true;

export default Home