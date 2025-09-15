import React, { useContext } from 'react'
import { rareContext } from '../context/DataContext'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader'

function ProductShade() {
    const{data, loader, addToBasket, setBasketOpen} = useContext(rareContext)
    const {shade} = useParams()
    const navigate = useNavigate()
    const products = data.flatMap(item=> item.products)
    const product = products.find(item=> item.name.includes('Foundation'))
    const cards = product?.shades[1].name
    const skin = product?.shades.find(item=> item.skin == shade)
    console.log(cards);

    function goToDetails(a){
        navigate(`/products/details/${a}`)
    }
    
    if(loader){
        return <Loader/>
      }
  return (
    <>
    <div className="productShade">
        <div className="container-cat">
            <div className="productShade1">
                <h1 className='result'>The Result Are In</h1>
                <p className='result1'>Based on your answers, here’s what we think will look amazing with your <br /> complexion!</p>
                <div className="foundation">
                    <img src={`/products/${skin?.productImages[0]}`} alt="" />
                    <div className='foundationName'>
                        <h4>YOUR BEST MATCH</h4>
                        <h1>Liquid Touch Weightless Foundation</h1>
                        <div className='skinn'>
                            No. <span> {skin?.name}</span>
                        </div>
                        <button onClick={()=> {addToBasket({name:product.name, price: product.price, shade:skin, shades:product.shades}), setBasketOpen(true)}}>ADD TO BAG ${product?.price}</button>
                    <p>Alternate Shades <br />
                    Your skin tone may change by season. Try going lighter or <br /> deeper, depending on the time of year.</p>
                    <div className='skinCards'>
                        <div className="cardSkin">
                            <img src={`/products/${product?.shades[2]?.productImages[0]}`} alt="" />
                            <h1 onClick={()=> goToDetails('Liquid Touch Weightless Foundation')}>{product?.name}</h1>
                            <div>
                                No. <span>{product?.shades[2]?.name}</span>
                            </div>
                            <button onClick={()=> {addToBasket({name:product.name, price: product.price, shade:product.shades[2], shades:product.shades}), setBasketOpen(true)}}>ADD TO BAG ${product?.price}</button>
                        </div>
                        <div className="cardSkin">
                            <img src={`/products/${product?.shades[4]?.productImages[0]}`} alt="" />
                            <h1 onClick={()=> goToDetails('Liquid Touch Weightless Foundation')}>{product?.name}</h1>
                            <div>
                                No. <span>{product?.shades[4]?.name}</span>
                            </div>
                            <button onClick={()=> {addToBasket({name:product.name, price: product.price, shade:product.shades[4], shades:product.shades}), setBasketOpen(true)}}>ADD TO BAG ${product?.price}</button>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductShade