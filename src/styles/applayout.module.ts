import styled from '@emotion/styled'

export const Container = styled('div')({
    display: 'flex',
    flexDirection:'column',
    width: '100%',
    height: '100vh',
    minHeight:'400px',
    backgroundColor: 'black',
    position:'relative',
})

export const BodyContainer = styled('div')({
    display: 'flex',
    flexDirection:'column',
    width: '100%',
    maxWidth:'700px',
    alignSelf:'center',
    overflow:'hidden'
})

export const Footer = styled('div')({
    display: 'flex',
    width: '100%',
    maxWidth:'700px',
    height: '200px',
    alignSelf:'center',
    justifyContent:'space-between',
    alignItems:'center',
    '#signout':{
        width:'250px',
        margin:'20px'
    }
})
