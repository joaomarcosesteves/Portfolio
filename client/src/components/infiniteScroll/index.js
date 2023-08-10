import React from 'react';
import styled from 'styled-components'

const TAGS = ['HTML', 'SCSS', 'JavaScript', 'Typescript', 'React.js', 'Next.js', 'Styled Components', 'Tailwind', 'VTEX.IO', 'GraphQL', 'Redux', 'ContextAPI', 'React-Native', 'MongoDB' ];
const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 10;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <Inner className='inner'>
        {children}
        {children}
      </Inner>
    </div>
  );
};

const Tag = ({ text }) => (
  <Tags className='tag'><span>#</span> {text}</Tags>
);

const InfiniteScroll = () => (
  <App className='app'>
    <Taglist className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <Fade className='fade'/>
    </Taglist>
  </App>
);

const Inner = styled.div`    
      display: flex;
      width: fit-content;
      animation-name: loop;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: var(--direction);
      animation-duration: var(--duration);

      @keyframes loop {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`

const App = styled.div`    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Taglist = styled.div`    
    width: 50rem;
    max-width: 90vw;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    gap: 1rem 0;
    position: relative;
    padding: 1.5rem 0;
    overflow: hidden;
`
const Tags = styled.div`    
    display: flex;
    width: max-content;
    align-items: center;
    gap: 0 0.2rem;
    color: #e2e8f0;
    font-size: 0.9rem;
    background-color: #334155;
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
    margin-right: 1rem; // Must used margin-right instead of gap for the loop to be smooth
    box-shadow: 
      0 0.1rem 0.2rem rgb(0 0 0 / 20%),
      0 0.1rem 0.5rem rgb(0 0 0 / 30%),
      0 0.2rem 1.5rem rgb(0 0 0 / 40%);
    
    span {
      font-size: 1.2rem;
      color: #64748b;
    }
`

const Fade = styled.div`    
    --background: ${props => props.theme.backgroundColor};
    pointer-events: none;
    background: linear-gradient(90deg, var(--background), transparent 30%, transparent 70%, var(--background));
    position: absolute;
    inset: 0;

`



export default InfiniteScroll
