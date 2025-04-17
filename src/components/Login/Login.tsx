import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
    <Nav>

      <a href=''>
        <img src="/login-logo.svg" alt="" />
      </a>
      <div>
          <JoinNow>
          Join Now
          </JoinNow>
      <SignIn>Sign in</SignIn>
      </div>
    </Nav>
    <Section>
      <Hero>
        <h1>Welcome to your professional community</h1>
        <img src="/login-hero.svg" alt="" />
      </Hero>
   
        <Google>
          <img src="/google.svg" alt="" />
          Sign in with Google
        </Google>
    
     
    </Section>
  
    
    </Container>
  )
}


const Container=styled.div`

  padding:0;
`;
const Nav=styled.nav`
max-width:1128px;
margin:12px 0 16px;
padding: 0;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:nowrap;


& > a{
  width:128px;
  height:34px;
  @media (max-width:786px){
      padding:0 5px;
  }
}
`;



const JoinNow=styled.a`
 text-decoration:none;
  padding:10px 12px;
  margin-right:12px;
  color:rgba(0,0,0,0.6);
  font-size:16px;
  border-radius:4px;
 &:hover{
  background-color:rgba(0,0,0,0.08);
  color:rgba(0,0,0,0.8);
 }
`;

const SignIn=styled.a`
padding:14px 16px;
box-shadow:inset 0 0 0 1px #0a66c2;
color:#0a66c2;
text-decoration:none;
border-radius:24px;
font-size:16px;
font-weight:600;
text-align:center;
transition:200ms;


 &:hover{
  background-color:#e7f3ff;
  

  text-decoration:none;
 }

`
;

const Section=styled.section`

min-height:700px;
padding: 40px 24px 138px 24px;
position:relative;

`;

const Hero=styled.div`
width:100%;




h1{
  padding-bottom:0;
  width:65%;
  font-size:56px;
  color: #2977c9;
  font-weight:200;
  line-height:70px;
  

 @media (max-width:768px){

  text-align:center;
  width:100%;
  font-size:24px;
  line-height:2;
  
  

 }
}


img{
  
  width:700px;
  height:670px;
  position:absolute;
  right:-80px;
  top:0;
  z-index:-1;

  @media (max-width:768px){
    top:230px;
    width:initial;
    position:initial;
    height:initial;
    padding:0 12px;
      
  }
}

`;



const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 40%;
  border-radius: 24px;
  background-color: #fff;
  color: #2977c9;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #d3d3d3;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-top:50px;

  &:hover {
    background-color: #f5f8fa;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

 

  img {
    margin-right: 12px;
    width: 20px;
    height: 20px;
    
  }


  @media (max-width:768px){
    width:100%;
    margin-top:24px;

  }
`;



export default Login