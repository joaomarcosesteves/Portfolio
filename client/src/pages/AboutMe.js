import React from 'react'

import styled from 'styled-components'

const AboutMe = () => {
    return(
        <BackHome>
            <h1>aboutme component</h1>
        </BackHome>
    )
}

const BackHome = styled.div`
    background: #2596be;
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
`

export default AboutMe