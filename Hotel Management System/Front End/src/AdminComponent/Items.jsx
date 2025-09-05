import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import axios from 'axios';

const Items = () => {
    let [items, setItems] = useState([]);
    useEffect(() => {
        DisplayItems();
    }, []);

    const DisplayItems = async () => {
        let response = await axios.get("http://localhost:8080/items/all");
        console.log(response.data);
        setItems(response.data);
    };

    let deleteItem = async (id) => {
        await axios.delete("http://localhost:8080/items/delete/" + id);
        DisplayItems();
    };

    return (
        <>
            <AdminNavBar />

            <div style={styles.container}>
                <div style={styles.headerContainer}>
                    <h1 style={styles.header}>Menu</h1>
                    <button style={styles.addProduct}>
                        <Link to='/admin/additem' style={styles.link}>Add Items</Link>
                    </button>
                </div>
                <div style={styles.menuList}>
                    {
                        items.map(item => (
                            <div style={styles.menuItem} key={item.id}>
                                <div style={styles.itemInfo}>
                                    <h3 style={styles.itemName}>{item.name}</h3>
                                    <p style={styles.itemDescription}>{item.category}</p>
                                    <span style={styles.itemPrice}>${item.price.toFixed(2)}</span>
                                </div>
                                <div style={styles.buttonsContainer}>
                                    <button
                                        style={styles.addToCartButton}
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        style={styles.addToCartButton}
                                    >
                                        <Link to={`/update/item/${item.id}`} style={styles.link}>
                                            Update
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
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
    headerContainer: {
        position: 'relative', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: '20px',
    },
    header: {
        fontSize: '32px',
        margin: '0',
        textAlign: 'center',
    },
    addProduct: {
        padding: '10px 20px',
        backgroundColor: '#f7b731',
        color: '#2a2a2a',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
        position: 'absolute', 
        right: '20px', 
        top: '50%', 
        transform: 'translateY(-50%)',
    },
    link: {
        textDecoration: 'none', 
        color: '#2a2a2a', 
        display: 'block', 
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
        margin: '10px 15px',
        backgroundColor: '#f7b731',
        color: '#2a2a2a',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between', 
    }
};

export default Items;
