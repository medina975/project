import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { rareContext } from '../context/DataContext'
import Loader from '../components/Loader'

function Account() {
  const [user, setUser] = useState(null)
  const {loader} = useContext(rareContext)
  const navigate = useNavigate()

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'))
    if (!savedUser) {
      navigate('/registeroracc')
    } else {
      setUser(savedUser)
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    toast.success('You are out of your account')
    navigate('/registeroracc')
  }

  if (!user) return null
  if(loader){
    return <Loader/>
  }

  return (
    <div className="account">
      <div className="container">
        <div className="account-container">
          <h1>My Account</h1>
          <div className="account1">
            <div className="account11">
              <button>My Info</button>
              <button onClick={handleLogout}>Log Out</button>
            </div>
            <hr />
            <div className="account12">
              <div>
                <h2>My Info</h2>
                <p>{user?.firstName}</p>
                <p>{user?.lastName}</p>
              </div>
              <div>
                <h2>Password</h2>
                <p>●●●●●●●●</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
