import React from 'react'
import styled from 'styled-components'

import  {faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialLinks = ({size}) => {
    return(
        <>
            <LinksUrl>
                <a href='https://www.linkedin.com/in/joao-marcos-esteves-pereira-a5b2b317a/' target='_blank' rel="noreferrer"> 
                    <FontAwesomeIcon icon={faLinkedinIn} size={size} />
                </a>
                <a href='https://github.com/joaomarcosesteves' target='_blank' rel="noreferrer"> 
                    <FontAwesomeIcon icon={faGithub} size={size} />
                </a>
            </LinksUrl>
        </>
    )
}

const LinksUrl = styled.div`    
    display: flex;
    justify-content: justify;
    align-items: center;
    gap: 1rem; 
    margin-top: 1.5rem;
    align-self: self-start;  

    a{
        color: ${props => props.theme.fontColor}
    }

    a:hover{
        filter: drop-shadow(0px 1px 1px black);
    }
`



export default SocialLinks