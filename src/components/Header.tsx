import styled from "styled-components"

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/Home">
            <img src="/home-logo.svg" alt="" />
          </a>
        </Logo>
      </Content>
    </Container>
  )
}



const Container=styled.div`
background-color: white;
color:rgb(0,0,0,0.8);
border-bottom:1px solid rgba(0,0,0,0.15);
padding:0px 24px;
left:0;
right:0;
position:fixed;
z-index:100;
width:100vw;
`
;

const Content=styled.div``

const Logo=styled.div``

export default Header