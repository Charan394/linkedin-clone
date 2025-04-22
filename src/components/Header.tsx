// Suggested code may be subject to a license. Learn more: ~LicenseLog:2970492271.
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
        <Search>

          <div>
          <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/search-icon.svg" alt="" />
          </SearchIcon>
         
        </Search>
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

const Content=styled.div`
display:flex;
align-items:center;
max-width:1128px;
margin:0 auto;


`
const Logo=styled.div``


const Search=styled.div`
  opacity:1;
 flex-grow:1;
 margin-left:12px;
 position:relative;

 & >div{
  max-width:280px;
  input{
  border:none;
    box-shadow:none;
    background-color:#eef3f8;
    border-radius:4px;
    color:rgb(0,0,0,0.9);
    width:218px;
    padding:0px 8px 0px 48px;
    line-height:1.75;
    font-weight:400;
    font-size:14px;
    height:34px;
    border-color: #dce6f1;
    vertical-align:text-top;
  }
 }


`

const SearchIcon=styled.div`
width:40px;
z-index:1;
position:absolute;
  top:11px;
  left:2px;
  border-radius:0 2px 2px 0px;
  width:40px;
  pointer-events:none;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0;
`



export default Header