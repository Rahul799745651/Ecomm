# E-commerce Microservices Platform

A comprehensive learning project demonstrating Spring Boot microservices architecture with modern technologies.

## 🏗️ Architecture

This project consists of the following microservices:

- **Eureka Server** (Port 8761) - Service discovery and registration
- **API Gateway** (Port 8080) - Central entry point with load balancing
- **User Service** (Port 8081) - User management and authentication
- **Product Service** (Port 8082) - Product catalog and inventory
- **Order Service** (Port 8083) - Order processing and management
- **Frontend** (Port 3000) - React.js web interface

## 🚀 Technologies Used

### Backend
- **Spring Boot 3.x** - Main framework
- **Spring Cloud Gateway** - API Gateway
- **Spring Cloud Netflix Eureka** - Service discovery
- **Spring Data JPA** - Data persistence
- **Spring Security** - Authentication and authorization
- **H2 Database** - In-memory database for development
- **Maven** - Build tool

### Frontend
- **React.js 18** - Frontend framework
- **Bootstrap 5** - UI styling
- **Axios** - HTTP client
- **React Router** - Client-side routing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📋 Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- Node.js 18 or higher
- Docker and Docker Compose (optional)

## 🛠️ Getting Started

### Option 1: Run with Maven (Recommended for Development)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-microservices
   ```

2. **Build all services**
   ```bash
   mvn clean install
   ```

3. **Start services in order** (use separate terminal windows):

   **Start Eureka Server:**
   ```bash
   cd eureka-server
   mvn spring-boot:run
   ```

   **Start User Service:**
   ```bash
   cd user-service
   mvn spring-boot:run
   ```

   **Start Product Service:**
   ```bash
   cd product-service
   mvn spring-boot:run
   ```

   **Start Order Service:**
   ```bash
   cd order-service
   mvn spring-boot:run
   ```

   **Start API Gateway:**
   ```bash
   cd api-gateway
   mvn spring-boot:run
   ```

   **Start Frontend:**
   ```bash
   cd frontend
   npm install
   npm start
   ```

### Option 2: Run with Docker Compose

1. **Build and start all services:**
   ```bash
   docker-compose up --build
   ```

2. **Stop all services:**
   ```bash
   docker-compose down
   ```

## 🌐 Access Points

- **Frontend Application:** http://localhost:3000
- **API Gateway:** http://localhost:8080
- **Eureka Dashboard:** http://localhost:8761
- **User Service:** http://localhost:8081
- **Product Service:** http://localhost:8082
- **Order Service:** http://localhost:8083

## 📊 API Endpoints

### User Service
- `GET /api/users` - Get all users
- `POST /api/users` - Create user
- `GET /api/users/{id}` - Get user by ID
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

### Product Service
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/search?keyword={keyword}` - Search products
- `GET /api/products/category/{category}` - Get products by category

### Order Service
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create order
- `GET /api/orders/{id}` - Get order by ID
- `GET /api/orders/user/{userId}` - Get orders by user
- `PUT /api/orders/{id}/status` - Update order status

## 🗄️ Database

Each service uses an in-memory H2 database for development. You can access the H2 console at:
- User Service: http://localhost:8081/h2-console
- Product Service: http://localhost:8082/h2-console
- Order Service: http://localhost:8083/h2-console

**JDBC URL:** `jdbc:h2:mem:testdb`
**Username:** `sa`
**Password:** `password`

## 🔧 Configuration

### Service Discovery
All services register with Eureka Server for service discovery. The API Gateway uses service names to route requests.

### API Gateway Routes
- `/api/users/**` → User Service
- `/api/products/**` → Product Service
- `/api/orders/**` → Order Service

### CORS Configuration
All services are configured to allow cross-origin requests for development.

## 📝 Sample Data

The application starts with sample data. You can add more data through the API endpoints or the frontend interface.

## 🧪 Testing

### Manual Testing
1. Access the frontend at http://localhost:3000
2. Navigate through different sections (Users, Products, Orders)
3. Test CRUD operations through the UI

### API Testing
Use tools like Postman or curl to test the API endpoints directly:

```bash
# Create a user
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"username":"john_doe","email":"john@example.com","password":"password123","firstName":"John","lastName":"Doe"}'

# Get all products
curl http://localhost:8080/api/products
```

## 🐳 Docker Commands

```bash
# Build all images
docker-compose build

# Start all services
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Remove all containers and volumes
docker-compose down -v
```

## 🔍 Monitoring

- **Eureka Dashboard:** http://localhost:8761 - View registered services
- **Actuator Endpoints:** Each service exposes health and metrics endpoints
  - Health: `http://localhost:PORT/actuator/health`
  - Metrics: `http://localhost:PORT/actuator/metrics`

## 🚧 Future Enhancements

- [ ] Add Circuit Breaker with Resilience4j
- [ ] Implement JWT authentication
- [ ] Add Redis for caching
- [ ] Implement distributed tracing with Zipkin
- [ ] Add message queues with RabbitMQ
- [ ] Implement event sourcing
- [ ] Add comprehensive logging
- [ ] Implement API versioning
- [ ] Add comprehensive test coverage

## 📚 Learning Objectives

This project demonstrates:

1. **Microservices Architecture** - Breaking down a monolithic application
2. **Service Discovery** - How services find and communicate with each other
3. **API Gateway** - Centralized entry point and routing
4. **Inter-service Communication** - Using Feign clients
5. **Data Management** - Each service manages its own data
6. **Containerization** - Docker and Docker Compose
7. **Frontend Integration** - React.js consuming microservices APIs

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment with different features and technologies!

## 📄 License

This project is for educational purposes only.
