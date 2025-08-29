import HomeNavbar from '../HomeComponent/HomeNavbar'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
const initialValue = {
  name: '',
  phonenumber: '',
  email: '',
  password: '',
  address: ''

}
function CustomerRegister() {
  const [customer, setCustomer] = useState(initialValue);
  const { name, phonenumber, email, password, address } = customer;
  const navigate = useNavigate();

  const onchangeHandler = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
    console.log(customer);
  };
  let addCustomer = async () => {
    await axios.post("http://localhost:8080/customers/addcustomer", customer)
    alert("Customer Registered Successfully")
    navigate("/customer/login")
  }

  return (
    <>
      <HomeNavbar/>
      <div className="form-div-customer-register" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '140vh',
        backgroundColor: '#f7f7f7',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}>
        <div style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#2d3a3a',
            marginBottom: '30px',
          }}>Customer Registration</p>

          <form className="form-customer-register" style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <label style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#4a4a4a',
              textAlign: 'left',
              marginBottom: '8px',
            }}>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                height: '44px',
                padding: '0 12px',
                marginBottom: '18px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#333',
                transition: 'border-color 0.3s ease',
              }}
              onChange={onchangeHandler}
              value={name}
              name="name"
              onFocus={(e) => e.target.style.borderColor = '#7f8c8d'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />

            <label style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#4a4a4a',
              textAlign: 'left',
              marginBottom: '8px',
            }}>Phone Number:</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              style={{
                height: '44px',
                padding: '0 12px',
                marginBottom: '18px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#333',
                transition: 'border-color 0.3s ease',
              }}
              onChange={onchangeHandler}
              value={phonenumber}
              name="phonenumber"
              onFocus={(e) => e.target.style.borderColor = '#7f8c8d'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />

            <label style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#4a4a4a',
              textAlign: 'left',
              marginBottom: '8px',
            }}>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                height: '44px',
                padding: '0 12px',
                marginBottom: '18px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#333',
                transition: 'border-color 0.3s ease',
              }}
              onChange={onchangeHandler}
              value={email}
              name="email"
              onFocus={(e) => e.target.style.borderColor = '#7f8c8d'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />
            <label style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#4a4a4a',
              textAlign: 'left',
              marginBottom: '8px',
            }}>Password:</label>
            <input
              type="password"
              placeholder="Set your password"
              style={{
                height: '44px',
                padding: '0 12px',
                marginBottom: '18px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#333',
                transition: 'border-color 0.3s ease',
              }}
              onChange={onchangeHandler}
              value={password}
              name="password"
              onFocus={(e) => e.target.style.borderColor = '#7f8c8d'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />

            <label style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#4a4a4a',
              textAlign: 'left',
              marginBottom: '8px',
            }}>Address:</label>
            <input
              type="text"
              placeholder="Enter your address"
              style={{
                height: '44px',
                padding: '0 12px',
                marginBottom: '18px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#333',
                transition: 'border-color 0.3s ease',
              }}
              onChange={onchangeHandler}
              value={address}
              name="address"
              onFocus={(e) => e.target.style.borderColor = '#7f8c8d'}
              onBlur={(e) => e.target.style.borderColor = '#ccc'}
            />


            <button
              type="button"
              className="btn btn-success"
              onClick={addCustomer}
              style={{
                backgroundColor: '#2565AE',
                color: 'white',
                border: 'none',
                height: '44px',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer',
                marginBottom: '12px',
                transition: 'background-color 0.3s ease',
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
                height: '44px',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer',
                marginBottom: '20px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
            >
              Reset
            </button>

            <p style={{
              fontSize: '14px',
              color: '#777',
              marginTop: '20px',
            }}>
              Already have an account? <Link to='/customer/login' style={{ color: '#007bff', textDecoration: 'none' }}>Login here</Link>
            </p>
          </form>
        </div>
      </div>

    </>

  )
}
export default CustomerRegister