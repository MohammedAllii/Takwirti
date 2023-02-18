import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getStories, reset } from '../features/stories/storieSlice'
import Home from '../components/Home'
function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { isError, message } = useSelector(
    (state) => state.stories
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getStories())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])



  return (
    <>
      <div>
        <h1><span style={{color:"red"}}>Welcome</span> <span style={{color:"#AACB73"}}>{user && user.name}</span><span style={{color:"red"}}> Takwirti</span></h1>
      </div>
      <Home />
  
    </>
  )
}

export default Dashboard
