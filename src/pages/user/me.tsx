import { updateSelectedCharacterService } from '@/api/auth';
import { IPost, useMyPosts } from '@/api/post';
import CheckRender from '@/components/CheckRender';
import TweetItem from '@/components/TweetItem/tweetitem';
import { Characters } from '@/constants/charactersImages';
import { useAuth } from '@/contexts/auth';
import { StyledButton } from '@/styles/Global';
import { Banner, Container, TweetHeader, TweetsContainer, UserImage } from '@/styles/user.module';
import Head from 'next/head';
import { useMemo, useState } from 'react';

const User = () => {
    const { user,updateUserData } = useAuth();
    const { data, error, isLoading, mutate } = useMyPosts(user?.alternalName as string);
    const [localSelectedCharacter, setLocalSelectedCharacter] = useState(user?.selectedCharacter || 1);
    const selectedCharacterImage = Characters.find(item => item.id === localSelectedCharacter)?.image as string

    const handleChangeLocalSelectedCharacter = () => {
        if (localSelectedCharacter === 5) {
            setLocalSelectedCharacter(1)
        } else {
            setLocalSelectedCharacter(prev => prev + 1);
        }
    }

    const handleSaveProfileChanges = async () => {
        try {
            const response = await updateSelectedCharacterService(localSelectedCharacter);
            if (response.ok) {
                mutate();
                updateUserData({
                    alternalName: user?.alternalName as string,
                    email: user?.email as string,
                    name: user?.name as string,
                    selectedCharacter: localSelectedCharacter
                })
            }
        } catch (error) {
            alert('error')
        }
    }

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
                    onClick={handleChangeLocalSelectedCharacter}
                    src={selectedCharacterImage}
                    alt="Logo"
                    title="Click for change character"
                    width={200}
                    height={200}
                    priority />
            </Banner>
            <TweetHeader>
                <span>
                    {user?.alternalName}
                </span>
                <CheckRender allowed={user?.selectedCharacter !== localSelectedCharacter}>
                    <div id="actionContainer">
                        <StyledButton onClick={handleSaveProfileChanges}>Save changes</StyledButton>
                    </div>
                </CheckRender>
            </TweetHeader>
            <TweetsContainer>
                {TweetList}
            </TweetsContainer>
        </Container>
    )
}

export default User