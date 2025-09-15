import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { getUserLogIn } from '../../public/services/ProductServices'
import { rareContext } from '../context/DataContext'
import Loader from '../components/Loader'

function RegisterOrAcc() {
    const navigate = useNavigate()
    const[user, setUser] = useState({
        email: '',
        password: '',

    })
    const {loader} = useContext(rareContext)
    function handleVal(e){
        setUser({...user, [e.target.name]: e.target.value})
    }
    async function registerLogin(){
         if( !user.email && !user.password){
            toast.error('doldurdaa')
            return
         }
         if(user.password.length < 8){
            toast.error('8 den cox olmalidirdaa')
            return

         }
         console.log(user);
         
        //  getUserLogIn(user)
        // .then(item =>{
        //     localStorage.setItem('user', JSON.stringify(user))
        //     toast.success('giris olundu')
        //     navigate('/')
        //  })
        // .catch(()=> toast.error('password or email is false'))
         

        try {
            const loggedUser = await getUserLogIn(user)
            localStorage.setItem('user', JSON.stringify(loggedUser))
            toast.success('Giriş olundu')
            navigate('/')
          } catch (error) {

            toast.error('Email və ya password səhvdir')
          }
    }
    if(loader){
        return <Loader/>
    }
  return (
    <>
    <div className="registerOrAcc">
        <div className="container-cat">
            <div className="registerOrAcc-container">
                <div className="signIn">
                    <h1>Sign In</h1>
                    <div className="inputs">
                        <input name='email' onChange={handleVal} type="text" placeholder='Email' />
                        <input name='password' onChange={handleVal} type="password" placeholder='Password' />
                    </div>
                    <button onClick={registerLogin}>SIGN IN</button>
                    <p>If you have not account click <Link to={'/createacc'}>here</Link></p>
                </div>
                <hr />
                <div className="newAccount">
                    <h1>New Account</h1>
                    <button onClick={()=>navigate('/createacc')}>CREATE ACCOUNT</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RegisterOrAcc