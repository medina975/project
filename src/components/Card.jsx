import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Details from '../pages/Details'
import { rareContext } from '../context/DataContext'

function Card({ item ,name, img, shades, price}) {
    const [currentShade, setCurrentShade] = useState(shades[0])
    const navigate = useNavigate()
    const {addToBasket, setBasketOpen, basketOpen} = useContext(rareContext)
    
  return (
    <>
    <div className='slide'>
        <div className="slide1" >
            <Link 
            to={`/products/details/${name}`}
            state={{ selectedShade: currentShade }}
            >
            <img  src={`/products/${currentShade.productImages[0]}`} alt="" />
            </Link>
            <p>{name}</p>
        </div>
            <div className='shades'>
                {shades.map(item=> item.shadeImage ? <img onClick={() => setCurrentShade(item)} src={`/products/${item.shadeImage}`}/> : null)}
            </div>
        <div className="slide2">
            <button onClick={()=> {addToBasket({name, price, shade:currentShade, shades}), setBasketOpen(true)}}>ADD TO BAG  <span>{price}$</span></button>
        </div>
    </div>
    </>
  )
}

export default Card