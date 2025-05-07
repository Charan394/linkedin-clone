
import styled from 'styled-components'


const Leftside = () => {
  return (
    <Content>

   < Container>

    <UserInfo>
    <BgImage></BgImage>
    <a>
      <Photo/>
      <Link>Welcome,there!</Link>
    </a>
    <a>
      <AddPhotoText>Add a photo</AddPhotoText>
    </a>
    </UserInfo>

    <ConnectionInfo>
    <div>
      <span>
        Connections
      </span>
      <span>
        Grow your network
      </span>
    </div>
      <a> 
        <img src="public/widget-icon.svg"/>
      </a>

    </ConnectionInfo>

      <SavedItems>  

      <img src="public/item-icon.svg" alt="" />
      <span>
        My Items
      </span>
        

      </SavedItems>

   </Container>
     <AdditionalFunc>

      <Activities>
        <span>Groups</span>
      <div>
       < span>Events</span>
       <img src="public/plus-icon.svg" alt="" />
      </div>
      <span>Follow Hastags</span>
      </Activities>

        <span className='discover-more'>
          Discover More
        </span>

     </AdditionalFunc>

   </Content>
  )
}


const Content=styled.div`
`

const Container=styled.div`
background:#fff;
box-shadow:-5px 2px 10px 2px rgba(0,0,0,0.16);
text-align:center;
border:1px solid rgba(0,0,0,0.2);
border-radius:5px;

`

const  UserInfo=styled.div`
padding:12px 12px 16px;
border-radius:5px;
  
`

const BgImage=styled.div`
background-image:url('public/card-bg.svg');
height:64px;
background-position:center;
background-size:cover;
background-repeat:no-repeat;
margin:-12px -12px 0px;
border-radius:5px 5px 0 0;

`
const Photo=styled.div`
  background-image:url('public/photo.svg');
  height:72px;
  width:72px;
  background-position:center;
  background-size:60%;
  background-repeat:no-repeat;
  border:2px solid rgba(0,0,0.6,0.2);
  margin:-38px auto 12px;
  border-radius:50%;
  background-color:white;
`
const Link = styled.div`
  margin-top:12px;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const ConnectionInfo=styled.div`
border-top:1px solid rgba(0,0,0,0.15);
border-bottom:1px solid rgba(0,0,0,0.15);

padding:12px 16px 12px;
  display:flex;
  justify-content:space-between;
  align-items:end;

  
  div {
    display:flex;
    flex-direction:column;
    text-align:left;

    span{
      font-size:14px;
      line-height:1.33;
      &:first-child{
        color:rgba(0,0,0,0.4);
      }
      &:nth-child(2){
        color:rgba(0,0,0,0.7);
      }
    }
    
  }

`

const SavedItems=styled.div`

  padding:16px 16px 16px;
  display:flex;
  justify-content:start;
  align-items:center;
  border-bottom:1px solid rgba(0,0,0,0.15);
  font-size:14px;
  font-weight:600;
`

const AdditionalFunc=styled(Container)`

  margin-top:20px;

  .discover-more{
    display:flex;

    padding:12px 12px 12px;
    text-align:start;
    color:rgba(0,0,0,0.6);
    font-size:12px;
    font-weight:600;
  }
  


`

const Activities=styled.div`
  padding:8px 12px 8px;
  border-bottom:1px solid rgba(0,0,0,0.15);
  display:flex;
  flex-direction:column;
  align-items:start;
  font-size:14px;
  font-weight:700;
  line-height:1.5;
  gap:5px;
  
  div{
    width:100%;
    display:flex;
    justify-content:space-between;

  }




`

export default Leftside