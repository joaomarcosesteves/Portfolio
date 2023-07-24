import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import  {faCode, faBars, faUser, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectsGit = () => {
    const [projects, setProjects] = useState([])

    const fetchUserData = () => {
        fetch("https://api.github.com/users/joaomarcosesteves/repos")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setProjects(data)
           //console.log(data)
          })
      }
    
      useEffect(() => {
        fetchUserData()
      }, [])

    return(
        <>
        <div>
            <h1> Projects GitHub: </h1>
                <>
                <ContainerCards>
                {projects.map(item => (
                    <>
                    <Card class="card">
                        <Tools class="tools">
                            <Circle class="circle">
                                <Red class="red box"></Red>
                            </Circle>
                            <Circle class="circle">
                                <Yellow class="yellow box"></Yellow>
                            </Circle>
                            <Circle class="circle">
                                <Green class="green box"></Green>
                            </Circle>
                        </Tools>
                        <CardContent>
                            <Name> {item.name}</Name>
                            <Description> 
                                <FontAwesomeIcon icon={faBars} style={{color: "#ffffff"}} size='1x' />
                                {item.description}
                            </Description>
                            {/* <p> 
                                <FontAwesomeIcon icon={faCode} style={{color: "#ffffff"}} size='1x' />
                                {item.language} 
                            </p>  */}
                            <div>
                                <FontAwesomeIcon icon={faUser} style={{color: "#ffffff"}} size='1x' />
                                <a href={item.owner.html_url}>
                                    <span> {item.owner.login} </span>
                                </a>
                                <Line>
                                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff"}} size='2x' />
                                </Line>
                            </div>

                            <Tecs>
                                {item.topics.map(tec => (
                                    <span>#{tec}</span>
                                ))}
                            </Tecs>
                        </CardContent>
                    </Card>
                    </>
                    ))}
                </ContainerCards>
                </>
        </div>
        </>
    )
}

const ContainerCards = styled.div`    
    display: -webkit-box;
    overflow-x: scroll;
    padding: 1rem;
    width: 900px;
    scroll-snap-type: x mandatory;
    scroll-padding-top: 24px;
    border-radius: 8px;
    gap: 2rem;

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background: #888;
    }
`

const Card = styled.div`
    width: 300px;
    height: auto;
    margin: 0px auto;
    background-color: rgb(1, 21, 34);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
`
const Tools = styled.div`
    display: flex;
    align-items: center;
    padding: 9px;
`

const Circle = styled.span`
    padding: 0 4px;
`
const Box = styled.div`
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
`

const Red = styled(Box)`
    background-color: #ff605c;
`
const Yellow = styled(Box)`
   background-color: #ffbd44;
`
const Green = styled(Box)`
   background-color: #00ca4e;
`

const Line = styled.div`
    position: absolute;
    right: 5px;
    bottom: 10px;
    opacity: 0;
    transform: translateX(-20%);
    width: 2em;
    height: 2em;
    transition: all 0.3s ease-in-out 0s;

     svg {
        --size: 20px;
        width: var(--size);
        height: var(--size);
     }

`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-box-pack: justify;
    scroll-snap-align: start;
    padding: 0 15px 15px;
    height: 100%;
    font-size: 14px;
    gap: 10px;

    h2{
        border-bottom: 1px solid white;
        text-align: center;
        padding: 5px 0;
    }

    p{
        margin: 1rem 0;
     }

     a {
        text-decoration: none;
        color: #fff;
     }

     svg {
        margin-right: 0.5rem;
     }

     :hover ${Line} {
        opacity: 1;
        transform: translateX(20%);
    }
`

const Name = styled.h2`
    color: #fff;
    cursor: pointer;

    :hover ${Line} {
        opacity: 1;
        transform: translateX(20%);
    }
`

const Description = styled.span`
    color: #fff;
    padding: 5px;
`

const Tecs = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
    justify-content: center;
    font-size: 12px;
    
    span {
        padding: 5px 10px;
        background: #334155;
        border-radius: 10px;
        color: #dddddd;
    }
`

/* const Cards = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    scroll-snap-align: start;
    padding: 1.3rem;
    width: 300px;
    border-radius: 10px;
    box-shadow: drop-shadow(2px 4px 6px black);
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
     background: linear-gradient(135deg, rgb(224 202 202) 0%, rgb(123 129 178) 100%);


` */

export default ProjectsGit