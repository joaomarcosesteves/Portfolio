import React from 'react'
import styled from 'styled-components'

import { Link } from "react-router-dom";

import InfiniteScroll from '../infiniteScroll'

import  {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import javascript from '../../assets/javascript.png'
import typescript from '../../assets/Typescript.png'
import react from '../../assets/React-icon.png'
import node from '../../assets/nodejs.png'
import css from '../../assets/css.png'

const TopStacks = () => {
    return(
        <>
        <StackSection>
            <DivColumCenter>
                <TitleStacks> Top Stacks </TitleStacks>   
                <StacksContainer>
                    <EachStack  href='https://react.dev/' target='_blank' rel="noreferrer">
                        <Stacks src={react} alt='React.js'/>
                    </EachStack>
                    <EachStack  href='https://nodejs.org/en' target='_blank' rel="noreferrer">
                        <Stacks src={node} alt='Node.js'/>
                    </EachStack>
                    <EachStack  href='https://www.javascript.com/' target='_blank' rel="noreferrer">
                        <Stacks src={javascript} alt='Javascript'/>
                    </EachStack>
                    <EachStack  href='https://www.typescriptlang.org/' target='_blank' rel="noreferrer">
                        <Stacks src={typescript} alt='Typescript'/>
                    </EachStack>
                    <EachStack  href='https://www.w3.org/Style/CSS/Overview.en.html' target='_blank' rel="noreferrer">
                        <Stacks src={css} alt='CSS'/>
                    </EachStack>
                </StacksContainer>

                <SubtitleStacks>Others already used</SubtitleStacks>

                <div>
                        <InfiniteScroll/>
                </div>
                
                <BtnLink to='/aboutme'>
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

const StackSection = styled(Section)`
    flex-direction: column;
    justify-content: space-evenly;
    font-family: monospace;
    height: auto;
    h1{
        font-family: monospace;
    }

    @media (max-width: 767px){
        
    }
`

const DivColumCenter = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const TitleStacks = styled.span` 
    font-size: 25pt;
    font-family: monospace;
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


const SubtitleStacks = styled.span` 
    margin-bottom: 1rem;
    font-size: 15pt;
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

export default TopStacks