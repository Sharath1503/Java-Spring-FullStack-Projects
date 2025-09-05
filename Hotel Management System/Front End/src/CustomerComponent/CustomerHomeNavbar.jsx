import logo from '../Images/logo.png'
import { useState } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom';

function CustomerHomeNavbar()
{
    
    return(
<>
       <div style={{ position: 'relative', width: '100%' }}>
    
      <div style={{ height: '3px', background: 'linear-gradient(to right, #1a1a1a, #333333, #1a1a1a)' }} />
      
      <div style={{ 
        background: 'linear-gradient(to bottom, #1a1a1a, #242424)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '0 24px'
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '16px 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ 
              background: '#000',
              padding: '12px',
              borderRadius: '8px',
              width: '180px',
              height: '60px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={logo}
                alt="TechPro Lounge"
                style={{
                  width: '160px',
                  height: '40px',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div>
              <h1 style={{ 
                color: 'white', 
                fontSize: '28px', 
                fontWeight: 'bold', 
                margin: '0',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                TechPro Lounge
              </h1>
              <p style={{ 
                color: '#666', 
                fontSize: '14px', 
                margin: '4px 0 0 0',
                letterSpacing: '0.5px'
              }}>
                Restaurant Management System
              </p>
            </div>
          </div>

          <nav>
            <ul style={{ 
              display: 'flex', 
              gap: '16px', 
              listStyle: 'none', 
              margin: 0, 
              padding: 0 
            }}>
              <li>
                <Link to="/customer/register"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    background: 'transparent',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#333';
                    e.target.style.borderColor = '#444';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = '#333';
                  }}
                >
                  <span style={{
                    fontSize: '18px',
                    marginRight: '8px'
                  }}>👥</span>
                  Customer Portal
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div style={{ 
        position: 'absolute', 
        bottom: -4,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), transparent)'
      }} />
    </div>

        </>
    )}
    export default CustomerHomeNavbar
