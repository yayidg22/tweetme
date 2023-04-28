import styled from '@emotion/styled'
import Image from 'next/image';

export const Button = styled('button')({
    color: 'hotpink'
})

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    backgroundColor: 'black',
    alignItems: 'center',
    overflow: 'hidden'
})

export const Banner = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '700px',
    height:'180px',
    width: '100%',
    backgroundColor:'rgb(71 85 105)',
})

export const TweetHeader = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'end',
    height:'150px',
    maxWidth: '700px',
    width: '100%',
    backgroundColor:'black',
    borderWidth: "1px",
    borderColor: 'gray',
    borderStyle: 'solid',
    'span':{
        margin:'15px',
        fontSize: '1.5rem',
        fontWeight:'500'
    }
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
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '100%',
    maxWidth: '700px',
    height: '100vh',
    backgroundColor: 'black',
    alignItems: 'center',
    borderWidth: "1px",
    borderColor: 'gray',
    borderStyle: 'solid',
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
    alignItems:'center',
    borderStyle: 'solid',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
})

export const UserImage = styled(Image)({
    cursor:'pointer',
    position:'absolute',
    borderWidth: "3px",
    borderColor: 'black',
    borderStyle: 'solid',
    margin: '15px',
    marginTop:'60px',
    width: '130px',
    height: '130px',
    borderRadius: "100%",
    objectFit: 'cover',
    aspectRatio: '3/2'
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