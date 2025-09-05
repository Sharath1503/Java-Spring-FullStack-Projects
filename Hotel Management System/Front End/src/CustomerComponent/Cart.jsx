import axios from "axios";
import { useEffect, useState } from "react";
import CustomerHome from "./CustomerHome";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DisplayCart();
  }, []);

  const DisplayCart = async () => {
    const cid = sessionStorage.getItem("cid");
    try {
      const response = await axios.get(`http://localhost:8080/cart/getbycid/${cid}`);
      console.log(response.data);
      setItems(response.data.items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
    setLoading(false);
  };

  const PlaceOrder = async () => {
    const cid = sessionStorage.getItem("cid");
    try {
      await axios.post(`http://localhost:8080/order/add/${cid}`);
      alert("Order placed successfully");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const deleteItem = async (id) => {
    const cid = sessionStorage.getItem("cid");
    try {
      await axios.delete(`http://localhost:8080/cart/delete/${cid}/${id}`);
      alert("Item deleted from cart successfully");
      DisplayCart(); 
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  return (
    <>
      <CustomerHome />
      <div style={styles.container}>
        <h1 style={styles.header}>Your Cart</h1>
        {loading ? (
          <div style={styles.loading}>Loading cart...</div>
        ) : (
          <div style={styles.cartList}>
            {items.length === 0 ? (
              <div style={styles.noItems}>No items in your cart</div>
            ) : (
              items.map((item) => (
                <div key={item.id} style={styles.cartItem}>
                  <div style={styles.itemInfo}>
                    <h3 style={styles.itemName}>{item.name}</h3>
                    <p style={styles.itemCategory}>{item.category}</p>
                    <span style={styles.itemPrice}>${item.price.toFixed(2)}</span>
                  </div>
                  <button
                    style={styles.deleteButton}
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        <button
          style={styles.placeOrderButton}
          onClick={PlaceOrder}
          disabled={items.length === 0}
        >
          Place Order
        </button>
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
  cartList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  cartItem: {
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
  itemCategory: {
    fontSize: '14px',
    color: '#ccc',
    margin: '8px 0',
  },
  itemPrice: {
    fontSize: '18px',
    color: '#f7b731',
    fontWeight: 'bold',
  },
  deleteButton: {
    padding: '8px 16px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  placeOrderButton: {
    padding: '12px 24px',
    backgroundColor: '#f7b731',
    color: '#2a2a2a',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'block',
    margin: '20px auto',
    transition: 'background-color 0.3s ease',
  },
  loading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '18px',
  },
  noItems: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default Cart;
