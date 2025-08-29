import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomerHome from './CustomerHome';

const Orders = () => {
  let [orders, setOrders] = useState([]);

  let cid = sessionStorage.getItem('cid');
  
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    
    if (cid) {
      try {
        let response = await axios.get(`http://localhost:8080/order/findbycustomer/${cid}`);
        console.log(response.data);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders', error);
      }
    } else {
      alert('Customer ID is missing!');
    }
  };

  return (
    <>
      <CustomerHome />
      <div style={styles.container}>
        <h1 style={styles.header}>Your Orders</h1>
        <div style={styles.ordersList}>
          {orders.length === 0 ? (
            <div style={styles.noOrders}>No orders found</div>
          ) : (
            orders.map(order => (
              <div key={order.orderid} style={styles.orderItem}>
                <div style={styles.orderInfo}>
                  <h3 style={styles.orderId}>Order ID: {order.orderid}</h3>
                  <p style={styles.orderDate}>Date: {new Date(order.orderdate).toLocaleDateString()}</p>
                  <p style={styles.orderValue}>Total: ${order.ordervalue.toFixed(2)}</p>
                  <p style={styles.customerId}>Customer ID: {order.customer.id}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    margin: '0 auto',
        padding: '20px',
        color: '#fff',
        backgroundColor: '#2a2a2a',
      
        minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '32px',
    marginBottom: '20px',
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
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  orderInfo: {
    marginBottom: '15px',
  },
  orderId: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
  },
  orderDate: {
    fontSize: '14px',
    color: '#ccc',
    margin: '8px 0',
  },
  orderValue: {
    fontSize: '18px',
    color: '#f7b731',
    fontWeight: 'bold',
  },
  customerId: {
    fontSize: '14px',
    color: '#ccc',
  },
  noOrders: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default Orders;
