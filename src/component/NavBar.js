// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <h1 style={styles.appName}>SmartHire</h1>
      </div>
    </nav>
  );
};

const styles = {
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
    zIndex: 1000,
  },
  navContent: {
    // maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  },
  appName: {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  },
};

export default Navbar;
