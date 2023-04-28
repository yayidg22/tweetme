import { Characters } from "@/constants/charactersImages";
import { useAuth } from "@/contexts/auth";
import { TextContainer, TweetImage, TweetItemContainer } from "@/styles/tweetitem.module";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import Link from "next/link";

interface ITweetItemProps {
    description: string;
    alternalName: string;
    selectedCharacter: number;
    id: number;
    createdDate: string;
}

const TweetItem = (props: ITweetItemProps) => {
    const { user } = useAuth();
    return (
        <TweetItemContainer key={props.id}>
            <TweetImage
                src={Characters.find(item => item.id === props.selectedCharacter)?.image as string}
                width={200}
                height={200}
                alt="user"
            />
            <TextContainer>
                <Link href={user?.alternalName === props.alternalName ? '/user/me' : `/user/${props.alternalName}`}>
                    <p>{props.alternalName} · {formatDistanceToNow(new Date(props.createdDate), { addSuffix: true, locale: enUS })}</p>
                </Link>
                <span>
                    {props.description}
                </span>
            </TextContainer>
        </TweetItemContainer>
    )
}

export default TweetItem