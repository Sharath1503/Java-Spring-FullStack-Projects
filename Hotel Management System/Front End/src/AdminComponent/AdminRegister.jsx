import { Link, useNavigate } from "react-router-dom"
import HomeNavbar from "../HomeComponent/HomeNavbar"
import { useState } from "react"
import axios from 'axios'
const initialValue={
    name:'',
    password:'',
    email:''

}
function AdminRegister() {
    let[admin,setAdmin]=useState(initialValue)
    let{name,password,email}=admin
    let navigate = useNavigate()

    function onchangeHandler(event)
    {
        setAdmin({...admin,[event.target.name]:event.target.value})
       
        console.log(admin)
    }
    let addAdmin=async()=>
    {
        await axios.post("http://localhost:8080/admins/addadmin",admin)
        alert("admin Registered Successfully")

        navigate("/admin")
    }
    return (
        <div>
            <HomeNavbar />
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
    }}>Admin Register</p>

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
      }}>Email:</label>
      <input 
        type="email" 
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
        onChange={(e) => onchangeHandler(e)} 
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
        onChange={(e) => onchangeHandler(e)} 
        value={password} 
        name="password"
      />

      <button 
        type="button" 
        className="btn btn-success" 
        onClick={() => addAdmin()}
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
        Register
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

      <p style={{
        fontSize: '14px',
        color: '#666',
        marginTop: '20px',
      }}>
        Already have an account? <Link to='/admin' style={{ color: '#007bff', textDecoration: 'none' }}>Login here</Link>
      </p>
    </form>
  </div>
</div>

        </div>
    )
}
export default AdminRegister