import styled from '@emotion/styled'
import Image from 'next/image';

export const Button = styled('button')({
    color: 'hotpink'
})

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position:'relative',
    width: '100%',
    height:'100vh',
    backgroundColor:'black',
})

export const TweetHeader = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '700px',
    width: '100%',
    borderWidth: "1px",
    borderColor: 'gray',
    borderStyle: 'solid',
})

export const TweetInput = styled('input')({
    fontFamily: 'var(--font-primary)',
    alignItems: 'center',
    justifyContent: 'center',
    outlineStyle: 'none',
    appearance: 'none',
    padding: '20px',
    fontSize: '1rem',
    minHeight: '100%',
    width: '100%',
    color: 'white',
    borderWidth: 0,
    background: 'none',
})

export const FormContainer = styled('form')({
    width: '100%',
})

export const TweetsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    width: '100%',
    height:'100%',
    maxWidth:"700px",
    alignSelf:'center'
})

export const TweetImage = styled(Image)({
    margin: '15px',
    width: '60px',
    height: '60px',
    borderRadius: "100%",
    objectFit: 'cover',
    aspectRatio: '3/2'
})

export const Row = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
})

export const Line = styled('div')({
    width: '100%',
    height: '0.5px',
    backgroundColor: 'gray',
})

export const TweetItemContainer = styled('div')({
    borderWidth: "1px",
    borderColor: 'gray',
    borderStyle: 'solid',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
})

export const UserImage = styled(Image)({
    cursor: 'pointer',
    margin: '15px',
    width: '60px',
    height: '60px',
    borderRadius: "100%",
    objectFit: 'cover',
    aspectRatio: '3/2'
})

export const TextContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
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

export const Footer = styled('div')({
    display: 'flex',
    width: '100%',
    maxWidth:'700px',
    height: '80px',
    alignSelf:'center',
    justifyContent:'space-between',
    alignItems:'center',
    '#signout':{
        width:'250px',
        margin:'10px'
    }
})

export const GithubLogo = styled(Image)({
    cursor:'pointer',
    width: '150px',
    height:'80px',
    objectFit: 'contain',
    aspectRatio: '3/2',
    filter:'invert(1)'
})
