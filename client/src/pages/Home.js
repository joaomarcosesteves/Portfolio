import React from 'react'

import InfiniteScroll from '../components/infiniteScroll'
import styled from 'styled-components'
import  {faGithub, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons'
import  {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import devimg from '../../src/assets/img.webp' 
import javascript from '../../src/assets/javascript.png'
import typescript from '../../src/assets/Typescript.png'
import react from '../../src/assets/React-icon.png'
import node from '../../src/assets/nodejs.png'
import css from '../../src/assets/css.png'


const Home = () => {
    return(
        <>
        <Section>
            <DivColumCenter>
                <Show>
                   <span> Hello, World!  </span>
                    My name is João..  
                </Show>
                <ShowHighlight>
                    I'm a <TextAnimation/> Developer <br/>
                </ShowHighlight>
                <Paragraph>
                    Always trying to learn, so I can develop solutions with my stacks to help as many people as possible, 
                    this is my vocation. <br/> Passionate about what we can do, there are no limits, only knowledge, daring, and creativity.
                </Paragraph>
                <LinksUrl>
                    <a href='https://www.linkedin.com/in/joao-marcos-esteves-pereira-a5b2b317a/'> 
                        <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
                    </a>
                    <a href='https://github.com/joaomarcosesteves'> 
                        <FontAwesomeIcon icon={faGithub} size='2x' />
                    </a>
                </LinksUrl>
            </DivColumCenter>
            <Img src={devimg} alt='img'/>
            <Scrolldown class="scrolldown">
                <Chevrons class="chevrons">
                    <Chevrondown class="chevrondown"></Chevrondown>
                    <Chevrondown class="chevrondown"></Chevrondown>
                </Chevrons>
            </Scrolldown>
        </Section>

        <StackSection>
            <DivColumCenter>
                <TitleStacks> Top Stacks </TitleStacks>   
                <StacksContainer>
                    <EachStack  href='https://react.dev/'>
                        <Stacks src={react} alt='React.js'/>
                    </EachStack>
                    <EachStack  href='https://nodejs.org/en'>
                        <Stacks src={node} alt='Node.js'/>
                    </EachStack>
                    <EachStack  href='https://www.javascript.com/'>
                        <Stacks src={javascript} alt='Javascript'/>
                    </EachStack>
                    <EachStack  href='https://www.typescriptlang.org/'>
                        <Stacks src={typescript} alt='Typescript'/>
                    </EachStack>
                    <EachStack  href='https://www.w3.org/Style/CSS/Overview.en.html'>
                        <Stacks src={css} alt='CSS'/>
                    </EachStack>
                </StacksContainer>

                <SubtitleStacks>Others already used</SubtitleStacks>

                <div>
                        <InfiniteScroll/>
                </div>

                <BtnLink href='/aboutme'>
                    <p>Learn more about me </p>
                    <FontAwesomeIcon icon={faArrowRight} size='1x' />
                </BtnLink>

            </DivColumCenter>

        </StackSection>
        </>
    )
}


const Section = styled.div` 
    display: flex;
    place-content: center;
    height: 100vh;
    align-self: center;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    

    @media (max-width: 767px){
        flex-direction: column;
        justify-content: center;
  }


`

const Scrolldown = styled.div` 
    --color: skyblue;
    --sizeX: 20px;
    --sizeY: 30px;
    position: absolute;
    width: var(--sizeX);
    height: var(--sizeY);
    border: calc(var(--sizeX) / 10) solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 16px;
    cursor: pointer;
    bottom: 15px;

    ::before {
        content: "";
        position: absolute;
        bottom: 20px;
        left: 50%;
        width: 6px;
        height: 6px;
        margin-left: -3px;
        background-color: var(--color);
        border-radius: 100%;
        animation: 2s ease 0s infinite normal none running scrolldown-anim;
        box-sizing: border-box;
        box-shadow: rgba(42, 84, 112, 0.4) 0px -5px 3px 1px;
    }

        @keyframes scrolldown-anim {
            0% {
                opacity: 0;
                height: 6px;
            }

            40% {
                opacity: 1;
                height: 10px;
            }

            80% {
                transform: translate(0, 20px);
                height: 10px;
                opacity: 0;
            }

            100% {
                height: 3px;
                opacity: 0;
            }
        }

        @media (min-width: 767px){
            display: none
        }

`

const Chevrons = styled.div` 
    padding: 6px 0px 0px;
    margin-left: -3px;
    margin-top: 30px;
    width: 21px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
`

const Chevrondown = styled.div` 
    margin-top: -6px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);

  :nth-child(odd) {
        animation: pulse54012 500ms ease infinite alternate;
    }

    :nth-child(even) {
        animation: pulse54012 500ms ease infinite alternate 250ms;
    }

    @keyframes pulse54012 {
        from {
            opacity: 0;
        }

        to {
            opacity: 0.5;
        }
    }
`


const Show = styled.p` 
    font-family: monospace;
    font-weight: 500;
    display: flex;
    align-content: center;
    justify-content: justify;
    text-align: justify;
    font-size: 17px;
    width: 100%;
    span{
        color: ${props => props.theme.secondary};
        margin-right: 10px;
    }

    @media (max-width: 767px){
        
    }

`

const Paragraph = styled(Show)`
    max-width: 740px;
    align-self: flex-start;
`

const TitleStacks = styled.span` 
    font-size: 25pt;
    font-family: monospace;
`

const SubtitleStacks = styled.span` 
    margin-bottom: 1rem;
    font-size: 15pt;
`

const LinkSpan = styled.span` 
    margin: 5rem 0px 2rem 0px;
    font-size: 12pt;
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
const ShowHighlight = styled.p` 
    font-size: 30px;
    font-family: monospace;
    font-weight: 500;
    display: flex;
    align-content: center;
    justify-content: justify;
    text-align: justify;
    width: 100%;
    margin: 1rem 0;

    @media (max-width: 767px){
        flex-direction: column;

        span{
            height: auto;
            margin: 0;
        }
    }
`
const TextAnimation = styled.span`
    font-size: 30px;
    overflow: hidden;
    position: relative;
    color: ${props => props.theme.secondary};
    margin: 0 1rem;
    height: 100%;
    align-self: flex-start;
    
    ::after{
        content: "Web";
        display: inline-block;
        animation: animation 8s steps(12) infinite;
        width: 0ch;
        color: ${props => props.theme.secondary};
    }

    ::before{
        display: inline-block;
        content: "";
        width: 2px;
        height: 100%;
        background-color: ${props => props.theme.fontColor};
        position: absolute;
        right: 0;
        animation: blinking .4s linear alternate infinite; 
        color: ${props => props.theme.fontColor};
    }

    @keyframes animation {
        10%{
            content: "Web";
            width: 4.5ch;
        }
        25%{
            width: 0ch;
        }
        45%{
            content: "Frontend";
            width: 9.5ch;
        }
        65%{
            width: 0ch;
        }
        85%{
            content: "Fullstack";
            width: 11.5ch;
        }
        90%{
            width: 0ch;
        }
    }

    @keyframes blinking {
        100%{
            opacity: 0;
        }
    }
`

const StackSection = styled(Section)`
    flex-direction: column;
    justify-content: space-evenly;
    font-family: monospace;
    height: auto;
    h1{
        font-family: monospace;
    }

    @media (max-width: 767px){
        height: 100vh;
    }
`

const StacksContainer = styled.div`    
    display: flex;
    flex-flow: row wrap;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 1rem;
    margin: 3rem 0px 5rem 0px;
    font-family: monospace;
`

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

const Img = styled.img`    
    height: 40%;

    @media (max-width: 1024px){
        display: none;
  }

    @media (min-width: 1024px) and (max-width: 1290px){
        height: 30%;
  }
    
`

const Stacks = styled.img`    
    height: 100px;
    font-family: monospace;
    filter: saturate(0);

    :hover{
        filter: drop-shadow(2px 4px 6px black);
        cursor: pointer;
    }

    @media (max-width: 767px){
        height: 60px;
        font-family: monospace;
        filter: drop-shadow(black 0px 0px 0px);
    }
    
`

const DivColumCenter = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const EachStack = styled.a`    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    margin: 1rem 3rem;
    font-family: monospace;
    span{
        display: none;
    }

    @media (max-width: 767px){
        margin: 1rem;
        font-family: monospace;
        filter: drop-shadow(1px 1px 1px black);
    }
`



export default Home