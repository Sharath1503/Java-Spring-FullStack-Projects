import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import axios from 'axios';

const Admins = () => {
    const [admins, setAdmins] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        DisplayAdmins();
    }, []);

    const DisplayAdmins = async () => {
        try {
            const response = await axios.get("http://localhost:8080/admins/all");
            setAdmins(response.data);
        } catch (error) {
            console.error('Error fetching admins:', error);
        }
    };

    const deleteAdmin = async (id) => {
      
        try {
            await axios.delete(`http://localhost:8080/admins/delete/${id}`);
            navigate(`/admin`);
        } catch (error) {
            console.error('Error deleting admin:', error);
        }
    };

    return (
        <>
            <AdminNavBar />
            <div style={styles.container}>
                <div style={styles.headerContainer}>
                    <h1 style={styles.header}>Admins</h1>
                    
                </div>
                <div style={styles.menuList}>
                    {
                        admins.map(admin => (
                            <div >
                                <div style={styles.adminInfo}>
                                    <h3 style={styles.adminName}>{admin.name}</h3>
                                    <p style={styles.adminEmail}>{admin.email}</p>
                                    <span style={styles.adminPassword}>••••••••</span>
                                </div>
                                <div style={styles.buttonsContainer}>
                                    <button
                                        style={styles.addToCartButton}
                                        onClick={() => deleteAdmin(admin.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        style={styles.addToCartButton}
                                    >
                                        <Link to={`/update/admin/${admin.id}`} style={styles.link}>
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
    adminInfo: {
        marginBottom: '15px',
    },
    adminName: {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '0',
    },
    adminEmail: {
        fontSize: '16px',
        color: '#ccc',
        margin: '8px 0',
    },
    adminPassword: {
        fontSize: '14px',
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

export default Admins;
