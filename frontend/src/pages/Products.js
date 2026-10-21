import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/products');
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchProducts();
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(`/api/products/search?keyword=${encodeURIComponent(searchTerm)}`);
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to search products');
      console.error('Error searching products:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container>
        <div className="loading">
          <h3>Loading products...</h3>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>Products</h1>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </Col>
        <Col md={4}>
          <Button onClick={handleSearch} variant="primary">
            Search
          </Button>
          <Button onClick={fetchProducts} variant="outline-secondary" className="ms-2">
            Clear
          </Button>
        </Col>
      </Row>

      {error && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}

      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="product-card h-100">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ${product.price}<br />
                  <strong>Category:</strong> {product.category}<br />
                  <strong>Stock:</strong> {product.stockQuantity}<br />
                  {product.brand && <><strong>Brand:</strong> {product.brand}<br /></>}
                  {product.description && (
                    <><strong>Description:</strong> {product.description}</>
                  )}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className={`badge ${product.isActive ? 'bg-success' : 'bg-secondary'}`}>
                    {product.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <Button variant="primary" size="sm">
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {products.length === 0 && !loading && (
        <Row>
          <Col>
            <Alert variant="info">
              No products found.
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Products;
