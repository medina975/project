import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import { getUser } from '../../public/services/ProductServices'
import { Link, useNavigate } from 'react-router-dom'
import { rareContext } from '../context/DataContext'
import Loader from '../components/Loader'

function CreateAcc() {

    const[user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',

    })
    const navigate = useNavigate()
    const {loader} = useContext(rareContext)
    function handleVal(e){
        setUser({...user, [e.target.name]: e.target.value})
    }
    function register(){
         if(!user.firstName || !user.email || !user.lastName || !user.password){
            toast.error('fill all these gaps')
            return
         }
         if(user.password.length < 8){
            toast.error('should be moreb than 8 symbols')
            return

         }
         getUser(user)
         .then(item=>{
            console.log(item);
            if(!item){
                toast.error('this email has taken')
                return
            }
            localStorage.setItem('user', JSON.stringify(user))
             toast.success('Account has created!');
             navigate('/')
         })
         
    }
    if(loader){
        return <Loader/>
    }
  return (
    <>
    <div className="createAcc">
        <div className="createAcc-container">
        <h1>Create Account</h1>
        <div className="inputs">
            <input name='firstName' onChange={handleVal} type="text" placeholder='First Name' />
            <input name='lastName' onChange={handleVal} type="text" placeholder='Last Name' />
            <input name='email' onChange={handleVal} type="email" placeholder='Email' />
            <input name='password' onChange={handleVal} type="password" placeholder='Password' />
        </div>
        <button onClick={register}>REGISTER</button>
        <p>If you have already account click <Link to={'/registeroracc'}>here</Link></p>
        </div>
    </div>
    </>
  )
}

export default CreateAcc