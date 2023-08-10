import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const Header = ({themeToggler}) => {
    const [extendNavbar, setExtendNavbar] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [checked, setChecked] = useState(() => {
        const storageValue = localStorage.getItem("theme");

        if (JSON.parse(storageValue) === 'dark') {
            return false
        } else {
            return true
        }
    })

    const handleChange = () => {
        handleCheck();
        themeToggler();
      };

    const handleCheck = () => {
        setChecked(!checked);
      };

    const handleCheckMenu = () => {
        setExtendNavbar(!extendNavbar);
      };

    useEffect(() => {
      if (typeof window === 'undefined') return
  
      window.addEventListener('scroll', () => {
        setIsScrolled(window.scrollY > 10)
      })
    }, [])


    const routes = [
        {
            Name: '<Home />',
            Route: '/'
        },
        {
            Name: '<About Me/>',
            Route: '/aboutme'
        },
        {
            Name: '<Contact/>',
            Route: '/contact'
        },
]
    return(
        <>
        <Navbar scroll={isScrolled} extendNavbar={extendNavbar}>
            <Section>
                <Logo> jmep<span>.dev</span></Logo>
                <LinksUrl>
                    {routes.map(item => (
                        <NavLink
                            key={`${item.Name}`}
                            to={`${item.Route}`} 
                            style={({ isActive, isPending }) => {
                                return {
                                    color: isActive && "#507DB9",
                                };
                            }}                            
                        >{item.Name}</NavLink>
                    ))}
                    <Label className="switch">
                        <input type="checkbox" checked={checked} onChange={() => handleChange()}/>
                        <Slider/>
                    </Label>
                </LinksUrl>
                <MenuIcon className="burger" >
                    <input type="checkbox" id="burger" onChange={() => handleCheckMenu()}/>
                    <span></span>
                    <span></span>
                    <span></span>
                </MenuIcon>
            </Section>
            {extendNavbar && (
                <LinksUrlMobile>
                    {/* {routes.map(item => (
                        <NavLink
                            to={`${item.Route}`} 
                            style={({ isActive, isPending }) => {
                                return {
                                    color: isActive && "#507DB9",
                                };
                            }}                            
                        >{item.Name}</NavLink>
                    ))} */}
                    <a href='/'> {routes[0].Name} </a>
                    <a href='/aboutme'> {routes[1].Name} </a>
                    <a href='/contact'> {routes[2].Name} </a> 
                    <Label className="switch">
                        <input type="checkbox" checked={checked} onChange={() => handleChange()}/>
                        <Slider/>
                    </Label>
                </LinksUrlMobile>
            )}
        </Navbar>
        </>
    )
}

const Navbar = styled.header`    
    --back: ${props => props.theme.backgroundColor};
    height: ${(props) => (props.extendNavbar ? '100vh' : '5rem ')};
    background: ${(props) => (props.extendNavbar ? 'var(--back)' : '')};
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    padding: 0 10%;
    z-index: 9999;

    @media (min-width: 767px){
    height: 5rem;
  }

    ${({ scroll }) => scroll && `
    backdrop-filter: blur(15px);
  `}
`

const Section = styled.div`    
    @import url('https://fonts.googleapis.com/css2?family=Rancho&display=swap');
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LinksUrl = styled.ul`    
    font-family: monospace;
    font-size: 12pt;
    display: flex;
    justify-content: justify;
    align-items: center;
    margin-left: auto;
    list-style: none;
    gap: 5rem;

    @media (max-width: 767px){
    display: none;
  }

    a{
        color: ${props => props.theme.fontColor};
        text-decoration: none;
        :hover{
            //color: #06ACD1;
            color: ${props => props.theme.secondary};
        }
    }
`

const LinksUrlMobile = styled.ul`    
    font-family: monospace;
    font-size: 12pt;
    display: flex;
    flex-direction: column;
    justify-content: justify;
    align-items: center;
    margin-left: auto;
    list-style: none;
    gap: 5rem;
    margin-top: 3rem;

    @media (min-width: 767px){
    display: none;
  }

    a{
        color: ${props => props.theme.fontColor};
        text-decoration: none;
        :hover{
            //color: #06ACD1;
            color: ${props => props.theme.secondary};
        }
    }
`

const Logo = styled.span`
    font-size: 22pt;
    font-family: 'Quicksand', sans-serif;

    span {
        color: #507DB9;
    }
`

/* const Img = styled.img`    
    width: 150px;
    align-items: center;
    align-self: center;
` */

const Label = styled.label`
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;

    input{
        visibility: hidden;
    }

    input:checked + span {
        background-color: rgb(143 174 225);
    }

    input:checked + span:before {
        transform: translateX(100%);
        box-shadow: inset 15px -4px 0px 15px #fff000;
    }
`


const Slider = styled.span`
    --background: #614e89;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    transition: .5s;
    border-radius: 30px;

    :before {
        position: absolute;
        content: "";
        height: 1.4em;
        width: 1.4em;
        border-radius: 50%;
        left: 10%;
        bottom: 15%;
        box-shadow: inset 8px -4px 0px 0px #fff000;
        background: var(--background);
        transition: .5s;
    }   
`
const MenuIcon = styled.label`
  position: relative;
  width: 34px;
  height: 24px;
  background: transparent;
  cursor: pointer;
  display: block;

  @media (min-width: 767px){
    display: none;
  }

  input {
    display: none
  }

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: ${props => props.theme.fontColor};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    }

    span:nth-of-type(1) {
        top: 0px;
        transform-origin: left center;
    }

    span:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);
        transform-origin: left center;
    }

    span:nth-of-type(3) {
        top: 100%;
        transform-origin: left center;
        transform: translateY(-100%);
    }

    input:checked ~ span:nth-of-type(1) {
        transform: rotate(45deg);
        top: 0px;
        left: 5px;
    }
    
    input:checked ~ span:nth-of-type(2) {
        width: 0%;
        opacity: 0;
    }
    
    input:checked ~ span:nth-of-type(3) {
        transform: rotate(-45deg);
        top: 24.4px;
        left: 5px;
    }
`



export default Header
