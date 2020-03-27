import React from 'react';

const Footer = () => {

  return (
    <footer style={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '80px',
      backgroundColor: '#282a36'
    }}>
      <span style={{
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff'
      }}>Dreampact - Todos os direitos reservados.</span>
    </footer>
  )
}

module.exports = Footer;
