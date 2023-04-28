import { IPost, getAllPostsByUserService, useMyPosts } from '@/api/post';
import TweetItem from '@/components/TweetItem/tweetitem';
import { Characters } from '@/constants/charactersImages';
import { useAuth } from '@/contexts/auth';
import { Banner, Container, TweetHeader, TweetsContainer, UserImage } from '@/styles/user.module';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';


const User = () => {
    const { user } = useAuth();
    const router = useRouter();
    const { data, error, isLoading, mutate } = useMyPosts(user?.alternalName as string);

    const TweetList = useMemo(() => {
        const postsData: IPost[] = data?.data?.posts as IPost[]
        if (!postsData) {
            return
        }
        return [...postsData].reverse().map(item => <TweetItem key={item.id} description={item.description} alternalName={item?.user?.alternalName as string} createdDate={item.created_date} id={item.id} selectedCharacter={item.user?.selectedCharacter as number} />)
    }, [data])

    return (
        <Container>
            <Head>
                <title>TweetMe - {user?.alternalName}</title>
            </Head>
            <Banner>
                <UserImage
                    onClick={() => router.push('/user/me')}
                    src={Characters.find(item => item.id === user?.selectedCharacter)?.image as string}
                    alt="Logo"
                    width={200}
                    height={200}
                    priority />
            </Banner>
            <TweetHeader>
                <span>
                    {user?.alternalName}
                </span>
            </TweetHeader>
            <TweetsContainer>
                {TweetList}
            </TweetsContainer>
        </Container>
    )
}


export default User