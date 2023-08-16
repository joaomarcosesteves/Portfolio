import React, {useEffect, useState} from 'react'
import styled from 'styled-components'


const Chevron = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return
    
        window.addEventListener('scroll', () => {
          setIsScrolled(window.scrollY > 20)
        })
      }, [])


    return(
        <>
        <Scrolldown className="scrolldown" scroll={isScrolled}>
            <Chevrons className="chevrons">
                <Chevrondown className="chevrondown"></Chevrondown>
                <Chevrondown className="chevrondown"></Chevrondown>
            </Chevrons>
        </Scrolldown>
        </>
    )
}

const Scrolldown = styled.div` 
    ${({ scroll }) => scroll && `
    display: none;
    transition: opacity 1s ease-out;
    opacity: 0;
  `}

    display: block;
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


export default Chevron