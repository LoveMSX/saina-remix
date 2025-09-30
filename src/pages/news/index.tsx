import { Card, CardBody } from "../../components/card"
import Column from "../../components/column"
import Row from "../../components/row"

const NewsPage = ()=> {

  return (
    <Column style={{flex:1,padding:10}}>
        <Row style={{justifyContent : "center"}}>
          <Card style={{width : "600px"}}>
            <CardBody>
              <p>Test</p>
            </CardBody>
          </Card>
        </Row>
        {
          [...Array(200)].map((_, index) => (
            <Row key={index}>
              <h1>Test {index+1}</h1>
            </Row>
          ))
        }
    </Column>
  )
}

export default NewsPage