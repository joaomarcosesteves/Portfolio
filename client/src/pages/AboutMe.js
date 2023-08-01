import React from 'react'
import ProjectsGit from '../components/ProjectsGit'
import styled from 'styled-components'
import devimg from '../../src/assets/eu.jpg'
import  {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutMe = () => {
    return(
        <>
        <Section>
            <SectionContent>
                <Profile>
                    <Img src={devimg} alt='img'/> 
                    <Name>
                        João Esteves, 22
                    </Name>
                </Profile>
                <Article>
                    <Title>
                        About Me
                    </Title>
                    <Content>
                        Nunc vel enim quis tellus elementum aliquam id ac lacus. Vivamus consequat lorem sit amet pellentesque bibendum. Morbi bibendum tempor dolor, at mollis sapien blandit ac. Nam faucibus arcu id mi pellentesque ultrices. Nunc laoreet dapibus mauris et fermentum. Cras luctus eget massa at placerat. Ut efficitur mauris accumsan, luctus ante nec, eleifend nulla. Sed vitae nibh in ligula eleifend luctus. Etiam quis tortor ornare, suscipit quam ac, tempus eros.
                    </Content>
                    <Title>
                        Professional Experience
                    </Title>
                    <Content>
                        Nunc vel enim quis tellus elementum aliquam id ac lacus. Vivamus consequat lorem sit amet pellentesque bibendum. Morbi bibendum tempor dolor, at mollis sapien blandit ac. Nam faucibus arcu id mi pellentesque ultrices. Nunc laoreet dapibus mauris et fermentum. Cras luctus eget massa at placerat. Ut efficitur mauris accumsan, luctus ante nec, eleifend nulla. Sed vitae nibh in ligula eleifend luctus. Etiam quis tortor ornare, suscipit quam ac, tempus eros.
                        Nunc vel enim quis tellus elementum aliquam id ac lacus. Vivamus consequat lorem sit amet pellentesque bibendum. Morbi bibendum tempor dolor, at mollis sapien blandit ac. Nam faucibus arcu id mi pellentesque ultrices. Nunc laoreet dapibus mauris et fermentum. Cras luctus eget massa at placerat. Ut efficitur mauris accumsan, luctus ante nec, eleifend nulla. Sed vitae nibh in ligula eleifend luctus. Etiam quis tortor ornare, suscipit quam ac, tempus eros.
                    </Content>
                </Article>
            </SectionContent>
            <ProjectsGit />
            <BtnLink href='/contact'>
                    <p>Get in touch </p>
                    <FontAwesomeIcon icon={faArrowRight} size='1x' />
                </BtnLink>
        </Section>
        </>
    )
}

const Section = styled.div`    
    display: flex;
    flex-direction: column;
    place-content: center;
    align-self: center;
    align-items: center;
    margin-top: 7rem;
`

const SectionContent = styled.div`    
    display: flex;
    flex-direction: column;
    place-content: center;
    align-self: center;
    align-items: center;
`

const Profile = styled.div`    
    display: flex;
    flex-direction: column;
    place-content: center;
    align-self: center;
    align-items: center;
    gap: 2rem;

`
const Article = styled.article`    
    display: flex;
    flex-direction: column;
    place-content: center;
    align-self: center;
    align-items: center;
    margin: 4rem 0;
    max-width: 900px;
`
const Name = styled.h1`    
    display: flex;
    align-content: center;
    justify-content: justify;
    text-align: justify;
    font-weight: bold;
    align-items: center;
    font-family: monospace;
    font-size: 30px;

    @media (max-width: 767px){
        font-size: 25px;
    }
    
`

const Title = styled.h4`    
    display: flex;
    align-content: center;
    justify-content: justify;
    text-align: justify;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 7px;
    align-self: flex-start;

    @media (max-width: 767px){
        font-size: 16px
    }

`

const Content = styled.p`    
    display: flex;
    align-content: center;
    justify-content: justify;
    text-align: justify;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 3rem;

    @media (max-width: 767px){
        font-size: 14px
    }

`

const Img = styled.img`    
    height: 250px;
    width: 250px;
    object-fit: cover;
    border-radius: 100%;
    filter: drop-shadow(2px 4px 6px black);

    @media (max-width: 767px){
        height: 205px;
        width: 205px;
    }
`
const BtnLink = styled.a` 
    margin: 5rem 0px 2rem 0px;
    font-size: 12pt;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    text-decoration: none;

    --primary-color: ${props => props.theme.fontColor};
    --hovered-color: ${props => props.theme.secondary};
    position: relative;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    p {
        margin: 0;
        position: relative;
        font-size: 12pt;
        font-family: monospace;
        color: var(--primary-color)
    }

    ::after {
        position: absolute;
        content: "";
        width: 0;
        left: 0;
        bottom: -7px;
        background: var(--hovered-color);
        height: 2px;
        transition: 0.3s ease-out;
    }

    p::before {
        position: absolute;
        /*   box-sizing: border-box; */
        content: "";
        width: 0%;
        inset: 0;
        color: var(--hovered-color);
        overflow: hidden;
        transition: 0.3s ease-out;
    }

    :hover::after {
        width: 100%;
    }

    :hover p::before {
        width: 100%;
    }

    :hover svg {
        transform: translateX(4px);
        color: var(--hovered-color);
        fill: var(--hovered-color);
    }

    svg {
        color: var(--primary-color);
        transition: 0.2s;
        position: relative;
        width: 15px;
        transition-delay: 0.2s;
    }
`


export default AboutMe