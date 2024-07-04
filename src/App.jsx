import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import { Container, Row ,Col} from 'react-bootstrap';
import SearchInput from './components/SearchInput';
import List from './components/List';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import youtube from "api/youtube";
import youtube from './api/youtube';
const App = ()=>{

  const [videos,setVideos] = useState([]);

  const [mainVideo,setMainVideo] = useState(null);

  async function getData(){
    const response = await youtube.get("search",
     {
      params: {
        part:"snippet",
        maxResults : 5,
        key : "AIzaSyAE6_tTkI8dddNfJ-8J2qhIVZUupZ-mXBk",
        q: "srk",
      },
     });
     console.log("===>",response.data);
     setVideos(response.data.items);
     setMainVideo(response.data.items[0]);
  }

  useEffect(()=>{
  },[])

  return (
    <Container>
      {/* component */}
      <SearchInput/> 
      <Row>
        <Col sm={8}>
          <Main video={mainVideo}/>
        </Col>
        <Col sm={4}>
          <List list={videos}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
