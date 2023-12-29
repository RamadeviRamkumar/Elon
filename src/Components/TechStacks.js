import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container,Col,Row } from 'react-bootstrap'
const TechStacks = () =>{
    return(
        <div>
         <Container fluid>
        <Row className='justify-content-center align-items-center'>
            <Col lg={5}>
            <Carousel>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100"src={require('../Assets/java.jpg')} alt="First slide" />
        <Carousel.Caption>
          <h3>Java</h3>
          <p className='d-none d-sm-block'>Java</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className="d-block w-100"src={require('../Assets/JavaScript.png')} alt="Second slide" />
        <Carousel.Caption>
          <h3>JavaScript</h3>
          <p className='d-none d-sm-block'>JavaScript</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className="d-block w-100"src={require('../Assets/dotnet.jpg')} alt="Third slide" />
        <Carousel.Caption>
          <h3>.Net</h3>
          <p className='d-none d-sm-block'>
            .Net
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
        <div className="text-center">
        <h2 className="display-5 mt-3">Pizzas for Every Occasion!</h2>
        <p className='lead text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        </Container>
        </div>
    )
}

export default TechStacks