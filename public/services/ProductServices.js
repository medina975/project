import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL

const getAllProducts = async ()=>{
    try{
        const res = await axios.get(`${BASE_URL}/rareProducts`)
        return res.data
    } catch (error){   
        console.error(error.message || "there is issue")
    }
}

const getAllSlider = async()=>{
    try{
        const res = await axios.get(`${BASE_URL}/slider`)
        return res.data    
    } catch(error){
        console.error(error.message || error ||'there is issue')

    }
}
const getAllShadeFinder = async()=>{
    try{
        const res = await axios.get(`${BASE_URL}/shadeFinder`)
        return res.data    
    } catch(error){
        console.error(error.message || error ||'there is issue')

    }
}
const getAllImpactSlider = async()=>{
    try{
        const res = await axios.get(`${BASE_URL}/impactSlider`)
        return res.data    
    } catch(error){
        console.error(error.message || error ||'there is issue')

    }
}
const getUser = async(user)=>{
    try{
        const res = await axios.get(`${BASE_URL}/users?email=${user.email}`)
        if (res.data.length){
            throw new Error('This email has already been taken')
        }
        const newUser = await axios.post(`${BASE_URL}/users`, user)
        return newUser.data    
    } catch(error){
        console.error(error.message || error ||'there is issue')

    }
}
const getUserLogIn = async(user)=>{
    try{
        const newUser = await axios.get(`${BASE_URL}/users?email=${user.email}&password=${user.password}`)
        if(!newUser.data.length){
            throw new Error('password or email is false')
        }
        return newUser.data[0]    
    } catch(error){
        throw error

    }
}
export{
    getAllProducts,
    getAllSlider, 
    getAllShadeFinder,
    getAllImpactSlider, 
    getUser,
    getUserLogIn
}