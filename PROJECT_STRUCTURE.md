# Project Structure

```
ecommerce-microservices/
├── pom.xml                          # Parent POM for all microservices
├── docker-compose.yml               # Docker Compose configuration
├── README.md                        # Project documentation
├── PROJECT_STRUCTURE.md             # This file
├── start-services.bat               # Windows startup script
├── stop-services.bat                # Windows shutdown script
├── start-services.sh                # Linux/Mac startup script
├── stop-services.sh                 # Linux/Mac shutdown script
│
├── eureka-server/                   # Service Discovery Server
│   ├── pom.xml
│   ├── Dockerfile
│   └── src/main/
│       ├── java/com/example/eurekaserver/
│       │   └── EurekaServerApplication.java
│       └── resources/
│           └── application.yml
│
├── api-gateway/                     # API Gateway
│   ├── pom.xml
│   ├── Dockerfile
│   └── src/main/
│       ├── java/com/example/apigateway/
│       │   └── ApiGatewayApplication.java
│       └── resources/
│           └── application.yml
│
├── user-service/                    # User Management Service
│   ├── pom.xml
│   ├── Dockerfile
│   └── src/main/
│       ├── java/com/example/userservice/
│       │   ├── UserServiceApplication.java
│       │   ├── config/
│       │   │   ├── SecurityConfig.java
│       │   │   └── DataInitializer.java
│       │   ├── controller/
│       │   │   └── UserController.java
│       │   ├── dto/
│       │   │   └── UserDTO.java
│       │   ├── model/
│       │   │   ├── User.java
│       │   │   └── UserRole.java
│       │   ├── repository/
│       │   │   └── UserRepository.java
│       │   └── service/
│       │       └── UserService.java
│       └── resources/
│           └── application.yml
│
├── product-service/                 # Product Catalog Service
│   ├── pom.xml
│   ├── Dockerfile
│   └── src/main/
│       ├── java/com/example/productservice/
│       │   ├── ProductServiceApplication.java
│       │   ├── config/
│       │   │   └── DataInitializer.java
│       │   ├── controller/
│       │   │   └── ProductController.java
│       │   ├── dto/
│       │   │   └── ProductDTO.java
│       │   ├── model/
│       │   │   └── Product.java
│       │   ├── repository/
│       │   │   └── ProductRepository.java
│       │   └── service/
│       │       └── ProductService.java
│       └── resources/
│           └── application.yml
│
├── order-service/                   # Order Management Service
│   ├── pom.xml
│   ├── Dockerfile
│   └── src/main/
│       ├── java/com/example/orderservice/
│       │   ├── OrderServiceApplication.java
│       │   ├── controller/
│       │   │   └── OrderController.java
│       │   ├── dto/
│       │   │   ├── OrderDTO.java
│       │   │   └── OrderItemDTO.java
│       │   ├── feign/
│       │   │   └── ProductServiceClient.java
│       │   ├── model/
│       │   │   ├── Order.java
│       │   │   ├── OrderItem.java
│       │   │   └── OrderStatus.java
│       │   ├── repository/
│       │   │   └── OrderRepository.java
│       │   └── service/
│       │       └── OrderService.java
│       └── resources/
│           └── application.yml
│
└── frontend/                        # React.js Frontend
    ├── package.json
    ├── Dockerfile
    └── src/
        ├── index.js
        ├── index.css
        ├── App.js
        ├── components/
        │   └── Navbar.js
        └── pages/
            ├── Home.js
            ├── Products.js
            ├── Orders.js
            └── Users.js
```

## Service Ports

| Service | Port | Description |
|---------|------|-------------|
| Eureka Server | 8761 | Service discovery and registration |
| API Gateway | 8080 | Central entry point for all APIs |
| User Service | 8081 | User management and authentication |
| Product Service | 8082 | Product catalog and inventory |
| Order Service | 8083 | Order processing and management |
| Frontend | 3000 | React.js web interface |

## Key Features

### Microservices Architecture
- **Service Discovery**: Eureka Server for automatic service registration
- **API Gateway**: Centralized routing and load balancing
- **Inter-service Communication**: Feign clients for service-to-service calls
- **Data Isolation**: Each service manages its own database

### Technology Stack
- **Backend**: Spring Boot 3.x, Spring Cloud, Spring Data JPA, Spring Security
- **Database**: H2 (in-memory) for development
- **Frontend**: React.js 18, Bootstrap 5, Axios
- **Containerization**: Docker, Docker Compose
- **Build Tool**: Maven

### Development Features
- **Hot Reload**: Frontend supports hot reloading
- **Database Console**: H2 console accessible for each service
- **Health Checks**: Actuator endpoints for monitoring
- **CORS Support**: Configured for cross-origin requests
- **Sample Data**: Automatic data initialization on startup

## Getting Started

1. **Prerequisites**: Java 17+, Maven 3.6+, Node.js 18+
2. **Build**: `mvn clean install`
3. **Start**: Run `start-services.bat` (Windows) or `start-services.sh` (Linux/Mac)
4. **Access**: Open http://localhost:3000 in your browser

## API Endpoints

All APIs are accessible through the API Gateway at `http://localhost:8080`:

- **Users**: `/api/users/**`
- **Products**: `/api/products/**`
- **Orders**: `/api/orders/**`

## Monitoring

- **Eureka Dashboard**: http://localhost:8761
- **Health Checks**: `http://localhost:PORT/actuator/health`
- **Metrics**: `http://localhost:PORT/actuator/metrics`
