import React from 'react'
import styled from 'styled-components'

import  {faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Footer = () => {
    return(
        <>
        <Navbar>
            <Section>
                <Logo> jmep<span>.dev</span></Logo>
                <LinksUrl>
                    <a href='www.linkedin.com.br'> 
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                    </a>
                    <a href='github.com'> 
                        <FontAwesomeIcon icon={faGithub} size='2x' />
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                        <path fill="#0288d1" d="M8.421 14h.052 0C11.263 14 13 12 13 9.5 12.948 6.945 11.263 5 8.526 5 5.789 5 4 6.945 4 9.5 4 12 5.736 14 8.421 14zM4 17H13V43H4zM44 26.5c0-5.247-4.253-9.5-9.5-9.5-3.053 0-5.762 1.446-7.5 3.684V17h-9v26h9V28h0c0-2.209 1.791-4 4-4s4 1.791 4 4v15h9C44 43 44 27.955 44 26.5z"></path>
                    </svg>
                </LinksUrl>

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
const LinksUrl = styled.div`    
    display: flex;
    justify-content: justify;
    align-items: center;
    gap: 1rem;   
    svg {
        color: ${props => props.theme.fontColor};
        fill: ${props => props.theme.fontColor};
    }
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