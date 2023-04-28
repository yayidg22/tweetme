import styled from '@emotion/styled'
import Image from 'next/image';

export const TweetImage = styled(Image)({
    margin: '15px',
    width: '60px',
    height: '60px',
    borderRadius: "100%",
    objectFit: 'cover',
    aspectRatio: '3/2'
})


export const TweetItemContainer = styled('div')({
    borderWidth: "1px",
    borderColor: 'gray',
    alignItems:'center',
    borderStyle: 'solid',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
})

export const TextContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    fontWeight: '400',
    color: 'GrayText',
    'p': {
        color: 'GrayText',
        fontSize: '1rem',
    },
    'span': {
        color: 'GrayText',
        fontSize: '1.5rem',
    }
})