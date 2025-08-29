import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

const ivalue = {
    email: '',
    name: '',
    password: ''
};

function UpdateAdmin() {
    let { id } = useParams(); 
    let [admin, setAdmin] = useState(ivalue); 
    let { email, name, password } = admin; 

    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/admins/adminbyid/${id}`)
            .then(response => {
                setAdmin(response.data); 
            })
            .catch(error => {
                console.error('Error fetching admin data:', error);
            });
    }, [id]);

    function onchangeHandler(event) {
        setAdmin({ ...admin, [event.target.name]: event.target.value });
    }

    let updateProfile = () => {
        axios.put(`http://localhost:8080/admins/updateadmin/${id}`, admin)
            .then(() => {
                alert('Profile updated successfully!');
                navigate(`/admin/profile/${id}`); 
            })
            .catch((error) => {
                console.error('Error updating admin profile:', error);
                alert('Error updating profile.');
            });
    };

    return (
        <div>
            <AdminNavBar />
            <div className="form-div-admin-register" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f4f4f9',
                fontFamily: 'Arial, sans-serif',
                padding: '20px'
            }}>
                <div style={{
                    backgroundColor: '#fff',
                    padding: '40px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    maxWidth: '400px',
                    textAlign: 'center',
                }}>
                    <p style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '30px',
                    }}>Update Profile</p>

                    <form className="form-admin-register" style={{ display: 'flex', flexDirection: 'column' }}>

                        <label style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#555',
                            textAlign: 'left',
                            marginBottom: '8px',
                        }}>Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            style={{
                                height: '40px',
                                padding: '0 12px',
                                marginBottom: '16px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                color: '#333'
                            }}
                            onChange={onchangeHandler}
                            value={name}
                            name="name"
                        />
                        <label style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#555',
                            textAlign: 'left',
                            marginBottom: '8px',
                        }}>Email:</label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            style={{
                                height: '40px',
                                padding: '0 12px',
                                marginBottom: '16px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                color: '#333'
                            }}
                            onChange={onchangeHandler}
                            value={email}
                            name="email"
                        />

                        <label style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#555',
                            textAlign: 'left',
                            marginBottom: '8px',
                        }}>Password:</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            style={{
                                height: '40px',
                                padding: '0 12px',
                                marginBottom: '24px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                color: '#333'
                            }}
                            onChange={onchangeHandler}
                            value={password}
                            name="password"
                        />

                        <button
                            type="button"
                            onClick={updateProfile}
                            style={{
                                backgroundColor: '#2565AE',
                                color: '#fff',
                                border: 'none',
                                height: '40px',
                                borderRadius: '4px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                marginBottom: '12px',
                            }}
                        >
                            Update Profile
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateAdmin;
