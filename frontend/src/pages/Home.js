import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-4">Welcome to E-commerce Microservices Platform</h1>
          <p className="lead">
            This is a learning project demonstrating Spring Boot microservices architecture.
          </p>
        </Col>
      </Row>
      
      <Row className="mt-5">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>User Service</Card.Title>
              <Card.Text>
                Manage user accounts, authentication, and user profiles.
                <br />
                <strong>Port:</strong> 8081
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Product Service</Card.Title>
              <Card.Text>
                Handle product catalog, inventory management, and product search.
                <br />
                <strong>Port:</strong> 8082
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Order Service</Card.Title>
              <Card.Text>
                Process orders, manage order status, and handle order lifecycle.
                <br />
                <strong>Port:</strong> 8083
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>API Gateway</Card.Title>
              <Card.Text>
                Central entry point for all microservices with load balancing and routing.
                <br />
                <strong>Port:</strong> 8080
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Eureka Server</Card.Title>
              <Card.Text>
                Service discovery and registration for all microservices.
                <br />
                <strong>Port:</strong> 8761
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Technologies Used</Card.Title>
              <Card.Text>
                <ul>
                  <li>Spring Boot 3.x</li>
                  <li>Spring Cloud Gateway</li>
                  <li>Spring Cloud Netflix Eureka</li>
                  <li>Spring Data JPA</li>
                  <li>H2 Database</li>
                  <li>React.js</li>
                  <li>Bootstrap</li>
                  <li>Docker</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
