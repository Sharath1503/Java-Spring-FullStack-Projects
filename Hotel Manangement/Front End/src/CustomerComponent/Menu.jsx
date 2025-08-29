import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomerHome from './CustomerHome';


const Menu = () => {
  let [items, setItems] = useState([])
  useEffect(() => {
    DisplayItems()
  }, [])

  const DisplayItems = async () => {

    let response = await axios.get("http://localhost:8080/items/all")
    console.log(response.data)
    setItems(response.data)

  };
  let addToCart = async (id) => {
    let cid = sessionStorage.getItem("cid")
    await axios.post("http://localhost:8080/cart/add/" + cid + "/" + id)
    alert("Item added to Cart Successfully")
  }

  return (
    <>
      <CustomerHome />
      <div style={styles.container}>

        <h1 style={styles.header}>Menu</h1>
        <div style={styles.menuList}>
          {items.map(item => (
            <div key={item.id} style={styles.menuItem}>
              <div style={styles.itemInfo}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.itemDescription}>{item.category}</p>
                <span style={styles.itemPrice}>${item.price.toFixed(2)}</span>
              </div>
              <button
                style={styles.addToCartButton}
                onClick={() => addToCart(item.id)}

              >
                Add to Cart
              </button>
            </div>
          ))}
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
    backgroundColor: '#2c2c2c',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '32px',
    marginBottom: '20px',
  },
  menuList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  menuItem: {
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  itemInfo: {
    marginBottom: '15px',
  },
  itemName: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
  },
  itemDescription: {
    fontSize: '14px',
    color: '#ccc',
    margin: '8px 0',
  },
  itemPrice: {
    fontSize: '18px',
    color: '#f7b731',
    fontWeight: 'bold',
  },
  addToCartButton: {
    padding: '10px 20px',
    backgroundColor: '#f7b731',
    color: '#2a2a2a',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};

export default Menu;
