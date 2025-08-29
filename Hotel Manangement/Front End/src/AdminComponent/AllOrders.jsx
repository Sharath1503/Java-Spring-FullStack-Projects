import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/order/all');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
    setLoading(false);
  };

  return (
    <>
      <AdminNavBar />
      <div style={styles.container}>
        <h1 style={styles.header}>All Orders</h1>
        {loading ? (
          <div style={styles.loading}>Loading orders...</div>
        ) : (
          <div style={styles.ordersList}>
            {orders.length === 0 ? (
              <div style={styles.noOrders}>No orders found</div>
            ) : (
              orders.map((order) => (
                <div key={order.orderid} style={styles.orderItem}>
                  <div style={styles.orderInfo}>
                    <h3 style={styles.orderId}>Order ID: {order.orderid}</h3>
                    <p style={styles.orderDate}>Date: {new Date(order.orderdate).toLocaleString()}</p>
                    <p style={styles.orderValue}>Value: ${order.ordervalue.toFixed(2)}</p>
                    <p style={styles.customerId}>Customer ID: {order.customerid}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#2c2c2c',
    minHeight: '100vh',
  },
  header: {
    color: '#fff',
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  loading: {
    color: '#fff',
    fontSize: '20px',
    textAlign: 'center',
  },
  noOrders: {
    color: '#fff',
    fontSize: '18px',
    textAlign: 'center',
  },
  ordersList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  orderItem: {
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  orderInfo: {
    marginBottom: '15px',
  },
  orderId: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
  },
  orderDate: {
    fontSize: '16px',
    color: '#ccc',
  },
  orderValue: {
    fontSize: '18px',
    color: '#f7b731',
    fontWeight: 'bold',
  },
  customerId: {
    fontSize: '16px',
    color: '#ccc',
  },
};

export default AllOrders;
