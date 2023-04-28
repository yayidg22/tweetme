import styled from '@emotion/styled'
import Image from 'next/image';

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
})

export const Logo = styled(Image)({
    marginTop: '25px',
    marginBottom: '20px',
    filter: 'invert(1)',
})
