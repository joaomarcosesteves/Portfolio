import React from 'react'
import styled from 'styled-components'

import SocialLinks from '../components/socialLinks'

const Footer = () => {
    return(
        <>
        <Navbar>
            <Section>
                <Logo> jmep<span>.dev</span></Logo>
                <SocialLinks size={'2x'}/>
            </Section>
        </Navbar>
        </>
    )
}

const Navbar = styled.footer` 
    background: ${props => props.theme.backgroundColor};
    height: 80px;
    align-items: center;
    width: 100%;
    bottom: 0;
`

const Section = styled.div`    
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Logo = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
    font-size: 22pt;
    font-family: 'Righteous', cursive;

    span {
        color: ${props => props.theme.secondary};
    }
`



export default Footer