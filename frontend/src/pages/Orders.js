import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Badge, Alert } from 'react-bootstrap';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/orders');
      setOrders(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch orders');
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      PENDING: 'warning',
      CONFIRMED: 'info',
      SHIPPED: 'primary',
      DELIVERED: 'success',
      CANCELLED: 'danger'
    };
    return statusColors[status] || 'secondary';
  };

  if (loading) {
    return (
      <Container>
        <div className="loading">
          <h3>Loading orders...</h3>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>Orders</h1>
        </Col>
      </Row>

      {error && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>User ID</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Items</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.userId}</td>
                      <td>${order.totalAmount}</td>
                      <td>
                        <Badge bg={getStatusBadge(order.status)}>
                          {order.status}
                        </Badge>
                      </td>
                      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td>
                        {order.orderItems && order.orderItems.length > 0 ? (
                          <div>
                            {order.orderItems.map((item, index) => (
                              <div key={index} className="order-item">
                                <small>
                                  {item.productName} x{item.quantity} - ${item.price}
                                </small>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-muted">No items</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {orders.length === 0 && !loading && (
        <Row>
          <Col>
            <Alert variant="info">
              No orders found.
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Orders;
