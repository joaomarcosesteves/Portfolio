import React from 'react'
import styled from 'styled-components'

import SocialLinks from '../components/socialLinks'
import Chevron from '../components/Chevron';
import TopStacks from '../components/TopStacks';
import devimg from '../../src/assets/img.webp' 

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
                        Developing, debugging, learning, helping people realize their ideas. <br/> 
                        This is my goal, my vocation and who I am. <br/>
                        I am always trying to be something more.    
                    </Paragraph>
                    <SocialLinks size={'2x'}/>
                </DivColumCenter>
                <Img src={devimg} alt='img'/>
                <Chevron/>
            </Section>
            <TopStacks/>
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

const Show = styled.p` 
    font-family: monospace;
    font-weight: 500;
    display: flex;
    flex-wrap: wrap;
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
    text-align: left;
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

const Img = styled.img`    
    height: 40%;

    @media (max-width: 1024px){
        display: none;
  }

    @media (min-width: 1024px) and (max-width: 1290px){
        height: 30%;
  }
    
`

const DivColumCenter = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export default Home