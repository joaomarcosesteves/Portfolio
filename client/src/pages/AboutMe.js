import React from 'react'
import ProjectsGit from '../components/ProjectsGit/ProjectsGit'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import devimg from '../../src/assets/eu3.png'
import  {faArrowRight, faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
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
                        Born and residing in <a href='https://www.google.com/maps/place/S%C3%A3o+Jos%C3%A9+dos+Campos,+SP/@-23.1894847,-45.9455849,12z/data=!3m1!4b1!4m6!3m5!1s0x94cc4bb3858cc2e7:0xba25a33168f8c1!8m2!3d-23.2198396!4d-45.8915658!16zL20vMDNiY3F6?entry=ttu' target='_blank' rel="noreferrer">São José dos Campos-SP/Brazil</a>, since I was little I was in the middle of technology, my father had a computer store and I spent a good part of my youth working there. <span>Graduated in Computer Technician (2019)</span>, studying Computer Science.
                        Passionate about technology, development and cars. Focused, ambitious and responsible.
                        My dream is to become an international developer, contribute and know the world, leave a legacy, become a reference, be something more.
                    </Content>
                    <Title>
                        Professional Experience
                    </Title>
                    <Content>
                        
                        Since I was 15 years old working with computing, at first with maintenance, when I attended the technician I started studying development (2018) and my first experience  was in 2019 (Embraer), as an intern. At first it was very challenging and exciting, I went deeper into <span>Javascript</span>, because with the same language I could develop fullstack applications with <span>Node.js</span> on the server side (Back-End) and <span>React.js</span> on the Client side (Front-End).
                        After my second internship (Tenaris), I went deeper into Front-End, and had several experiences and challenges, where I learned a lot and became my main Stack with React.js.
                        Today, with <span>+3 years of experience with development</span>, I am moved to great challenges and projects, consolidating my knowledge and learning more and more. 
                        Below I have my resume (CV) with more information about my experience and my certifications:
                    
                    </Content>
                    <Links>
                        <Link to="https://drive.google.com/drive/folders/1MxpopCeZYYDr_2DTrUAyQgTC5MtH0Vid?usp=sharing" target="_blank">Resume/CV <FontAwesomeIcon icon={faUpRightFromSquare} size='1x' /></Link>
                        <Link to="https://drive.google.com/drive/folders/1l9TWSCOBaH_J35GfRuJEKLUi1s14Y3sm?usp=sharing" target="_blank">Certificates <FontAwesomeIcon icon={faUpRightFromSquare} size='1x' /></Link>
                    </Links>
                    <Content>
                        Currently I have been developing projects in <span>React.js</span> + <span>Next.js</span> for web and <span>React Native</span> for Mobile Apps, with Typescript. On the Back-end using <span>Node.js</span>. I have also been interested in <span>unit testing with Jest</span>.
                        Here are some projects on GitHub:
                    </Content>
                </Article>
                <ProjectsGit />
            </SectionContent>
            <BtnLink to='/contact'>
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

const Links = styled.div`    
    display: flex;
    flex-direction: row;
    place-content: center;
    align-self: center;
    align-items: center;
    margin-bottom: 3rem;
    width: 100%;
    justify-content: space-evenly;

    @media (max-width: 767px){
        font-size: 14px;
    }

    span, a {
        padding: 10px 20px;
        color: ${props => props.theme.fontColor};
        border-radius: 10px;
        cursor: pointer;
        text-decoration: underline;

        :hover{
            color: ${props => props.theme.secondary};
        }

        svg{
            margin-left: 5px;
        }
    }
`

const SectionContent = styled.div`    
    display: flex;
    flex-direction: column;
    place-content: center;
    align-self: center;
    align-items: center;
    width: 100%;
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
    margin-top: 4rem;
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
    align-content: center;
    justify-content: justify;
    text-align: justify;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 3rem;

    a{
        color: ${props => props.theme.fontColor};
    }

    span {
        font-weight: 600;
    }

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
const BtnLink = styled(Link)` 
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