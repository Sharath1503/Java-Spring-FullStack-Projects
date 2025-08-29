import { Link, useNavigate } from "react-router-dom"
import HomeNavbar from "../HomeComponent/HomeNavbar"
import { useState } from "react"
import axios from "axios"
const initialValue = {
    name:'',
    password: '',
    email: ''

}
function AdminLogin() {
    let [admin, setAdmin] = useState(initialValue)
    let { password, email } = admin
    let navigate=useNavigate()
    function onchangeHandler(event) {
        setAdmin({ ...admin, [event.target.name]: event.target.value })

        console.log(admin)
    }
    let LoginCheck=async()=>
    {
        let valid=await axios.post("http://localhost:8080/admins/login",admin)

        console.log(valid)
        if(valid.data==1)
        {
            alert("admin login Successsfully")
            navigate("/adminhome")

        }
        else{
            alert("Incorrect email or password")
        }
    }
    return (
        <div>
            <HomeNavbar />
            <div className="form-div-admin-login" style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f7f7f7',
  fontFamily: 'Arial, sans-serif',
  padding: '20px'
}}>
  <div style={{
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center'
  }}>
    <p style={{
      fontSize: '24px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '20px',
    }}>Admin Login</p>

    <form className="form-admin-login" style={{ display: 'flex', flexDirection: 'column' }}>
      <label style={{
        fontSize: '16px',
        fontWeight: '500',
        marginBottom: '8px',
        color: '#555',
        textAlign: 'left',
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
        marginBottom: '8px',
        color: '#555',
        textAlign: 'left',
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
        onClick={() => LoginCheck()}
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
        Login
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
          marginBottom: '12px',
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
        New to this website? Please <Link to='/adminregister' style={{ color: '#007bff', textDecoration: 'none' }}>register</Link>
      </p>
    </form>
  </div>
</div>

        </div>
    )
}
export default AdminLogin