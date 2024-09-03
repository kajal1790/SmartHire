import React, { useState } from 'react';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login clicked with:', { username, password });
  };

  const handleSSOLogin = () => {
    // Implement SSO login logic here
    console.log('SSO Login clicked');
  };

  return (
    <div style={styles.container}>

      {/* Login Form */}
      <div style={styles.formContainer}>
        <div style={styles.formCard}>
          <h2 style={styles.header}>Login</h2>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              placeholder="Enter your username"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your password"
            />
          </div>
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
          <button onClick={handleSSOLogin} style={{ ...styles.button, ...styles.ssoButton }}>
            Login with SSO
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  navbar: {
    width: '100%',
    backgroundColor: '#343a40',
    padding: '15px 30px',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  navContent: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  },
  appName: {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  },
  formContainer: {
    marginTop: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  formCard: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  header: {
    marginBottom: '30px',
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '15px',
    transition: 'background-color 0.3s',
  },
  ssoButton: {
    backgroundColor: '#6c757d',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default LoginScreen;