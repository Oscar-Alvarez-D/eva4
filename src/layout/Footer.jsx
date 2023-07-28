import React from 'react'

export const Footer = () => {
  return (
    <footer style={footerStyle} className='footer'>
      <p>Contáctanos:AndyBikes@Gmail.com</p>
      <p>Teléfono: +56992950000</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f4f4f4',
  padding: '10px',
  textAlign: 'center',
};

export default Footer;
