import { Container , Row,Col,Image} from "react-bootstrap";

const ListItem = (props)=>{
  console.log(props.myItem.snippet.thumbnails.high.url);
  return (
    <div>
      <Container>
        <Row className="mb-3">
          <Col sm={8}>
            <Image src={props.myItem.snippet.thumbnails.high.url}
            rounded
            style={{width:'100%',height:'100%'}}
            />
          </Col>

          <Col sm={4}>
            <h5>{props.myItem.snippet.channelTitle}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ListItem;