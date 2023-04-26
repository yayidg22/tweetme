import styled from '@emotion/styled'
import Image from 'next/image';
import Link from 'next/link';

export const StyledButton = styled('button')({
    fontFamily: 'var(--font-primary)',
    fontWeight:700,
    fontSize: '0.9rem',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    minHeight: '55px',
    cursor: 'pointer',
    width: '100%',
    color: 'black',
    borderWidth: 0,
    backgroundColor: 'white',
    borderRadius: '100px',
    transition: '0.2s',
    '&:hover,&:focus,&:active': {
        backgroundColor: 'whitesmoke',
    },
});

export const StyledButtonSecondary = styled('button')({
    fontFamily: 'var(--font-primary)',
    fontWeight:700,
    transition: '0.2s',
    padding: 10,
    minHeight: '55px',
    cursor: 'pointer',
    width: '100%',
    color: 'white',
    borderWidth: '1px',
    borderColor: 'white',
    backgroundColor: 'black',
    borderRadius: '100px',
    fontSize: '0.9rem',
    '&:hover,&:focus,&:active': {
        backgroundColor: '#404040',
    },
});

export const ButtonIcon = styled(Image)({
    display: 'flex',
    marginRight: '10px',
})

export const StyledInput = styled('input')({
    fontFamily: 'var(--font-primary)',
    alignItems: 'center',
    justifyContent: 'center',
    outlineStyle: 'none',
    appearance: 'none',
    transition: '0.2s',
    padding: '20px',
    minHeight: '40px',
    width: '100%',
    color: 'white',
    borderWidth: '1px',
    borderColor: 'white',
    background: 'none',
    borderRadius: '8px',
    '&:hover,&:focus,&:active,&:selected': {
        borderWidth: '1px',
        borderColor: 'black !important',
    },
})

export const StyledLink = styled(Link)({
    color: '#3366CC'
})

export const FieldError = styled('p')({
    color:'white',
    fontFamily: 'var(--font-primary)',
    fontWeight:'400',
    fontSize: '0.8rem',
    marginLeft:'5px',
    marginTop:'7px',
})