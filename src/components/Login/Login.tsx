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

export default Login