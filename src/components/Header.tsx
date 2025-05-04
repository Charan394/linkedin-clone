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
        <Nav>
          <NavWrapper>
              <NavItem className="active">
                <a href="/Home">
                  <img src="/nav-home.svg" alt="" />
                  <span>Home</span>
                </a>
              </NavItem>
             
              
              <NavItem>
                <a href="/Home">
                  <img src="/nav-network.svg" alt="" />
                  <span>My Network</span>
                </a>
              </NavItem>

              <NavItem>
                <a href="/Home">
                  <img src="/nav-jobs.svg" alt="" />
                  <span>Jobs</span>
                </a>
              </NavItem>

              <NavItem>
                <a href="/Home">
                  <img src="/nav-messaging.svg" alt="" />
                  <span>Messaging</span>
                </a>
              </NavItem>

              <NavItem>
                <a href="/Home">
                  <img src="/nav-notifications.svg" alt="" />
                  <span>Notifications</span>
                </a>
              </NavItem>
              <User>
                <a href="/Home">
                  <img src="/user.svg" alt="" />
                  <span>Me
                  <img  src="/down-icon.svg" alt="" />
                  </span>
                  
                </a>
                <SignOut>
                  <a href="/">
                    Sign Out
                  </a>
                </SignOut>
              </User> 

               <Work>
                <a href="/Home">
                  <img src="/nav-work.svg" alt="" />
                  <span>Work
                  <img src="/down-icon.svg" alt="" />
                  </span>
                  
                </a>
              </Work> 
              
          

          </NavWrapper>



        </Nav>



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
  const Nav=styled.div`
  margin-left:auto;
  display:block;
  @media(max-width:768px){
    position:fixed;
    left:0;
    bottom:0;
    background:white;
    width:100%;
  }
    
  `
const NavWrapper=styled.ul`
    display:flex;
    flex-wrap:nowrap;
    list-style-type:none;
    justify-content:space-around;

    .active a{
      
        &::after{
          content:"";
          /* transform:scaleX(); */
          border-bottom:2px solid black;
          bottom:0;
          left:0;
          position:absolute;
          width:100%;
          
      }
  }
            
`
const NavItem=styled.li`
display:flex;
align-items:center;




a{

  align-items:center;
  background:transparent;
  display:flex;
  flex-direction:column;
  font-size:12px;
  font-weight:400;
  justify-content:center;
  line-height:1.5;
  min-height:42px;
  min-width:80px;
  position:relative;
  text-decoration:none;
  span{
    color:rgb(0,0,0,0.6);
    display:flex;

    align-items:center;
  }
  @media(max-width:768px){
    min-width:70px;
  }
}

  &:hover,&:active{
    a{
      span{
        color:rgb(0,0,0,0.9);
      }
    
  }
}
`
const SignOut=styled.div`
position:absolute;
top:42px;
background:white;
border-radius:0 0 5px 5px;
width:100px;
height:40px;
font-size:16px;
transition-duration:167ms;
text-align:center;
display:none;
`



const User=styled(NavItem)`
  a{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

  }

a > img{
  width:24px;
  border-radius:50%;
}
span{
  display:flex;
  align-items:center;


  img{
    width:16px;
    margin-right:5px;
  
  }
}

 &:hover{ ${SignOut}{
    display:flex;
    align-items:start;
    justify-content:center;
    border-radius:0 0 5px 5px;
  

  }
 }


`
const Work=styled(User)`
border-left: 1px solid rgba(0,0,0,0.8);
`



export default Header