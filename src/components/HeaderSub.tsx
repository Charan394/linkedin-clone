import styled from "styled-components"

const HeaderSub = () => {
  return (
    <Container>
        <Section>
            <h5>
                <a>
            Hiring in a hurry?-
                </a>
            </h5>
            <p>
    find talented pros in record time with upwork and keep business moving
            </p>
        </Section>
    </Container>
  )
}
    const Container=styled.div`
    padding-top:45px;
    width:100%;
    
    `
        
    const Section=styled.div`
    display:flex;
    align-items:center;
    box-sizing:content-box;
  padding :0px 20px;
    justify-content:center;
    text-align:center;
    min-height:50px;
      text-decoration:underline;



      h5{
        color:#0a66c2;
        font-size:14px;
        line-height:1.75;

      }
      a{
        font-weight:700;
      }
      p{
        font-size:14px;
        color:#434649;
        font-weight:600;
      }

      @media (max-width:768px){
        flex-direction :column;
        pading:0px 5px;
      }
    

    `
    




export default HeaderSub