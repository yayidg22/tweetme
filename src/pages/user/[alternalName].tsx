import { IPost, getAllPostsByUserService } from '@/api/post';
import TweetItem from '@/components/TweetItem/tweetitem';
import { Characters } from '@/constants/charactersImages';
import { Banner, Container, TweetHeader, TweetsContainer, UserImage } from '@/styles/user.module';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

type Data = {
    posts: IPost[];
}
export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
    const response = await getAllPostsByUserService(context?.params?.alternalName as string);
    return {
        props: {
            data: {
                posts: response.data.posts
            },
        }
    };
}

const User = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const postsData: IPost[] = data.posts;
    const TweetList = [...postsData].reverse().map(item => <TweetItem description={item.description} alternalName={item?.user?.alternalName as string} createdDate={item.created_date} id={item.id} selectedCharacter={item.user?.selectedCharacter as number} />)

    return (
        <Container>
            <Head>
                <title>TweetMe - {postsData[0]?.user?.alternalName}</title>
            </Head>
            <Banner>
                <UserImage
                    src={Characters.find(item => item.id === postsData[0]?.user?.selectedCharacter)?.image as string}
                    alt="Logo"
                    width={200}
                    height={200}
                    priority />
            </Banner>
            <TweetHeader>
                <span>
                    {postsData[0]?.user?.alternalName}
                </span>
            </TweetHeader>
            <TweetsContainer>
                {TweetList}
            </TweetsContainer>
        </Container>
    )
}


export default User