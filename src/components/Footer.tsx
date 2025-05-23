import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid #ddd' }}>
    <p>
      © {new Date().getFullYear()} Yuki Katayama. Created using React and Vite.  
    </p>
  </footer>
);

export default Footer;
