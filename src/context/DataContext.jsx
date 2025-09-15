import React, {createContext, useEffect, useState } from 'react'
import { getAllImpactSlider, getAllProducts, getAllShadeFinder, getAllSlider } from '../../public/services/ProductServices'
export const rareContext = createContext()

function DataContext({children}) {
    const [data, setData ] = useState([])
    const [sliderData, setSliderData ] = useState([])
    const [shadeFinderData, setShadeFinderData ] = useState([])
    const [impactSliderData, setImpactSliderData ] = useState([])
    const [error, setError ] = useState(null)
    const [loader, setLoader ] = useState(true)
    const [basket, setBasket] = useState([]) 
    const [basketOpen, setBasketOpen] = useState(false)
    
    useEffect(()=>{
        getAllProducts()
        .then(item => {
            setData(item)
        })
        .catch(err => setError(err))
        .finally(()=>setLoader(false))

        getAllSlider()
        .then(item => {
            setSliderData(item)
        })
        getAllShadeFinder()
        .then(item => {
            setShadeFinderData(item)
        })
        getAllImpactSlider()
        .then(item => {
            setImpactSliderData(item)
        })
    },[])
    const addToBasket = (product) => {
        setBasket(prev => {
            const exist = prev.find(
                item => item.name === product.name && item.shade.name === product.shade.name
            );
            if (exist) {
                return prev.map(item =>
                    item.name === product.name && item.shade.name === product.shade.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1, selectedShade: product.shade,
                    shades: product.shades }];
            }
        });
    };
    
    
    const removeFromBasket = (name, shadeName) => {
        setBasket(prev =>
          prev.filter(item => !(item.name === name && (item.selectedShade.name || item.shade.name) === shadeName))
        );
      };
      
    
    const changeQuantity = (productName, shadeName, delta) => {
        setBasket(prev =>
          prev
            .map(item =>
              item.name === productName && (item.selectedShade.name || item.shade.name) == shadeName
                ? { ...item, quantity: item.quantity + delta }
                : item
            )
            .filter(item => item.quantity > 0) // убираем товар, если количество <= 0
        );
      };
      
    

    const obj = {
        data, sliderData, error, loader,shadeFinderData,
        basket, addToBasket, removeFromBasket, changeQuantity, setBasket, basketOpen, setBasketOpen, impactSliderData
    }
  return (
    <>
        <rareContext.Provider value={obj}>
            {children }
        </rareContext.Provider>
    </>
  )
}

export default DataContext