import styled from '@emotion/styled'
import Image from 'next/image';

export const Button = styled('button')({
    color: 'hotpink'
})

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '800px',
    height: '100vh',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Logo = styled(Image)({
    filter: 'invert(1)',
    margin: 10,
})

export const FormContainer = styled('div')({
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '500px',
    minWidth:'340px'
})

export const Row = styled('div')({
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
})

export const Line = styled('div')({
    width:'100%',
    height:'0.5px',
    backgroundColor:'gray',
})
