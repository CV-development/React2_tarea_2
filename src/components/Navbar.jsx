import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar d-flex justify-content-center g-3'>
      <Link to='/' className='nav-link mx-3'> Home </Link> | <Link to='/favoritos' className='nav-link mx-3'> Favoritos </Link>
    </nav>
  )
}
export default Navbar
