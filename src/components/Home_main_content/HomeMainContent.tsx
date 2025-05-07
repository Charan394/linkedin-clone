import React from 'react'
import styled from 'styled-components'
import Leftside from './Leftside'
import Main from './Main'
import Rightside from './Rightside'
import HeaderSub from '../HeaderSub'

const HomeMainContent = () => {
  return (
    <>
     <HeaderSub/>
    <Container>
      <Leftside/>
      <Main/>
      <Rightside/>
      
    </Container>
    </>
  )
}


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; 
    width:100%;
  gap: 20px;
  padding: 20px;
  max-width: 1128px;
  margin: 0 auto;
  margin-top: 20px;

  @media (max-width: 768px) {
    display:flex;
    flex-direction:column;
  }
`;
export default HomeMainContent