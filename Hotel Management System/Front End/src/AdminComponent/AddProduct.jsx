import axios from "axios"
import { useState } from "react"
import HomeNavbar from "../HomeComponent/HomeNavbar"
import { Link, useNavigate } from "react-router-dom"
import AdminNavBar from "./AdminNavBar"

const ivalue = {
    name: '',
    category: '',
    price: ''

}

function AddItem() {

    let [item, setItem] = useState(ivalue)
    let { name, category, price } = item
    let navigate=useNavigate()
    function onchangeHandler(event) {
        setItem({ ...item, [event.target.name]: event.target.value })
    }
    let AddingItem = async () => {

        await axios.post("http://localhost:8080/items/additem",item)
        alert("Item Added Successfully")
        navigate("/admin/items")


    }
    return (
    <div>
      
        <AdminNavBar/>
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
                }}>AddItem</p>

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
                        placeholder="Enter item name"
                        style={{
                            height: '40px',
                            padding: '0 12px',
                            marginBottom: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '14px',
                            color: '#333'
                        }}
                        onChange={(e) => onchangeHandler(e)}
                        value={name}
                        name="name"
                    />

                    <label style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#555',
                        textAlign: 'left',
                        marginBottom: '8px',
                    }}>Category:</label>
                    <input
                        type="text"
                        placeholder="Enter items category"
                        style={{
                            height: '40px',
                            padding: '0 12px',
                            marginBottom: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '14px',
                            color: '#333'
                        }}
                        onChange={(e) => onchangeHandler(e)}
                        value={category}
                        name="category"
                    />

                    <label style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#555',
                        textAlign: 'left',
                        marginBottom: '8px',
                    }}>Price</label>
                    <input
                        type="text"
                        placeholder="Enter item price"
                        style={{
                            height: '40px',
                            padding: '0 12px',
                            marginBottom: '24px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '14px',
                            color: '#333'
                        }}
                        onChange={(e) => onchangeHandler(e)}
                        value={price}
                        name="price"
                    />

                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => AddingItem()}
                        style={{
                            backgroundColor: '#2565AE',
                            color: '#fff',
                            border: 'none',
                            height: '40px',
                            borderRadius: '4px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            marginBottom: '12px',
                            transition: 'background-color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#2565AE'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#2565AE'}
                    >
                        Add
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary"
                        style={{
                            backgroundColor: '#6c757d',
                            color: '#fff',
                            border: 'none',
                            height: '40px',
                            borderRadius: '4px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            marginBottom: '20px',
                            transition: 'background-color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
                    >
                        Reset
                    </button>

                  
                </form>
            </div>
        </div>

    </div>)
}
export default AddItem