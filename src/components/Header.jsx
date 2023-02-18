import { FaPlus, FaSignInAlt, FaSignOutAlt, FaTable, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
      <div style={{marginTop:'0px'}}><img src={"./logo.jpg"} className='foot'/> Takwirti</div>
      </div>
      <ul>
        {user ? (
          <>
          <li>
          <Link to='/add'>
                <FaPlus /> Ajout Terrain
          </Link>
        </li>
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </>
        ) : (
          <>
            <li>
              <Link to='/login'>
              <div style={{color:'#68B984'}}><FaSignInAlt /> Login</div>
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
