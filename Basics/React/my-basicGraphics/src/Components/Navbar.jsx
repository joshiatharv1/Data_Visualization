import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{
    backgroundColor: '#222',
    color: 'white',
    padding: '15px 20px',
    fontSize: '18px',
    display: 'flex',
    gap: '20px'
  }}>
    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>About Me</Link>
    <Link to="/Faces" style={{ color: 'white', textDecoration: 'none' }}>Data Visualization</Link>
    <Link to="/Mouse" style={{ color: 'white', textDecoration: 'none' }}>Mouse Tracker</Link>
    <Link to="/Mouse" style={{ color: 'white', textDecoration: 'none' }}>Data Visual</Link>
  </nav>
);

export default Navbar;
