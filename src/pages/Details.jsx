import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { rareContext } from '../context/DataContext'
import { IoIosArrowDown } from 'react-icons/io'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Card from '../components/Card'
import Card1 from '../components/Card1'

function Details() {
    const {name} = useParams()
    const { data, loader, addToBasket } = useContext(rareContext)
    const location = useLocation()
    const allProducts = data?.flatMap(item => item.products)
    const nameData = allProducts.find(item => name === item.name)
    const currentCategory = data?.find(cat =>cat.products.map(p => p.name === name))?.category
    const categoryData = data.find(item=> item.category == currentCategory)

    
    const [currentProduct, setCurrentProduct] = useState(null)
    const [currentShade, setCurrentShade] = useState(null)
    const [currentMedia, setCurrentMedia] = useState({
        type: 'image',
        src:  ''
    })
    const[aktiv, setAktiv] = useState(false)
    const[openMobil, setOpenMobil] = useState(false)
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    
    const sliderRef = useRef(null);
    
    useEffect(()=>{
        if (!nameData) return;
        const selectedShade = location.state?.selectedShade || nameData?.shades?.[0]
        setCurrentProduct(nameData)
        setCurrentShade(selectedShade)
        setCurrentMedia({
         type: 'image',
        src:  selectedShade?.productImages[0] || ''
        })

    },[nameData])
    if( loader|| !data || !nameData){
        return <Loader/>
    }
    console.log(data);

    
    
    
    // const [currentShade, setCurrentShade] = useState(
    //     selectedShade
    //     ? currentProduct?.shades?.find(s => s.name === selectedShade.name)
    //     : currentProduct?.shades[0]
    // )
    // if (loader || !nameData) return <Loader /> 
    
    // const [currentMedia, setCurrentMedia] = useState({
    //     type: 'image', // 'image' или 'video'
    //     src: currentShade?.productImages[0] // по умолчанию первое изображение
    //   });
      
      // при клике на изображение
      function changeMedia(img) {
        if (img.startsWith('video') && currentProduct.video) {
          setCurrentMedia({
            type: 'video',
            src: currentProduct.video 
          });
        } else {
          setCurrentMedia({
            type: 'image',
            src: img
          });
        }
      }
      function handleCardClick(product) {
        setCurrentProduct(product);
        setCurrentShade(product.shades[0]);
        setCurrentMedia({
          type: 'image',
          src: product.shades[0].productImages[0]
        });
      }

//   useEffect(() => {
//     if (selectedShade) {
//       const shade = nameData.shades.find(s => s.name === selectedShade)
//       if (shade) setCurrentShade(shade)
//     }
//   }, [selectedShade, nameData.shades])

function changeShade(shade){
    setCurrentShade(shade)
    setCurrentMedia({
        type: 'image',
        src: shade.productImages[0]
      });
      setAktiv(false)
}
function dropdown(){
    setAktiv(!aktiv)
}


const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.clientX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
//   console.log(startX);
//   console.log(scrollLeft);
  
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.clientX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 1
    sliderRef.current.scrollLeft = scrollLeft - walk
  };


  function scrollLeftSlider(a,b){
    a.scrollLeft -=  b
  }
  function scrollRightSlider(a,b){
    a.scrollLeft +=  b
  }

  return (  
    <>
        <div className="mobilVersion">
            <div onClick={()=> setOpenMobil(!openMobil)} className={`shadeMobil ${openMobil ? 'ac' : ''}`}>
                <div>
                    { !openMobil && <img src={`/products/${currentShade?.shadeImage}`} alt="" />}
                    <p>SHADE <span>{currentShade?.name}</span></p>
                </div>
                { !openMobil && <IoIosArrowDown className='arrowMobil' />}
                { openMobil &&  (
                    <div className='shadesMobil'>
                        {currentProduct?.shades.map(item=> <img onClick={()=> changeShade(item) } src={`/products/${item.shadeImage}`} />)}
                    </div>
                )}
            </div>
            <button onClick={()=> addToBasket({name, price:nameData.price, shade:currentShade, shades:nameData.shades})}>ADD TO CARD $ {nameData.price}</button>
            
        </div>
        <div className="details">
            <div className="details-one">
                <div className="container-cat">
                    <div className="product">
                        <div className="product-one">
                            <h1>{currentProduct?.name}</h1>
                            <p>No. <span className='namee'>{currentShade?.name}</span></p>
                            <p>{currentProduct?.detailsText1}</p>
                            {
                             nameData.shades.length > 1 && (
                                    <div className="details-shades">
                                <div className="details-shades1">
                                    {
                                        currentProduct?.shades.map(item=> <img onClick={()=> changeShade(item) } src={`/products/${item.shadeImage}`} />)
                                    }
                                </div>
                                <div onClick={()=>dropdown()} className={` details-shades2 ${aktiv ? "active" : ""}`}>
                                    <div className='arr'>
                                        <h5>SHADE</h5> <span>{currentShade?.name}</span> <IoIosArrowDown />
                                    </div>
                                    <div  className={`list ${aktiv ? "drop1" : ""}`}>
                                        {
                                            currentProduct?.shades.map(item=> <p onClick={()=> changeShade(item)}>{item.name}</p>)
                                        }
                                    </div>
                                </div>
                            </div>
                                )
                            }
                            <button onClick={()=> addToBasket({name, price:nameData.price, shade:currentShade, shades:nameData.shades})}>ADD TO CARD $ {nameData.price}</button>
                        </div>
                        {currentMedia.type == 'image' ? (
                            <img className="productImage" src={`/products/${currentMedia.src}`} alt={currentShade?.name} />
                        ) : (
                            <video controls autoPlay>
                            <source src={`/products/${currentMedia.src}`} type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        )}
                        <p className='mobilP' >{currentProduct?.detailsText1}</p>
                        <div className='productImages'>
                            {/* {
                                currentShade.productImages.map(item=> <img onClick={()=> changeImage(item)} src={`/products/${item}`}/>)
                            } */}
                            {currentShade?.productImages.map(img => (
                                <img
                                key={img}
                                src={`/products/${img}`}
                                alt={img}
                                onClick={() => changeMedia(img)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-two">
                <div className="container-cat">
                    <div className="details-two-container">
                    <img src={`/products/${currentProduct?.detailsImage}`} alt="" />
                    <div>
                        <h1>Details</h1>
                        <p>
                            {
                                currentProduct?.detailsText2
                            }
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="details-three">
                        <div className="container-1">
                        <div className="hhh">
                        <h1>Bestsellers</h1>
                        </div>
                        </div>
            <div className="sliderr">
           <div className="container">
                        <div className='slider-container'>
                        <button className="slider-arrow left"
                        onClick={() => scrollLeftSlider(sliderRef.current, 300)}>
                        <MdOutlineKeyboardArrowLeft/>
                            
                        </button>
                        <div
                            ref={sliderRef}
                            className="slider"
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            >
                            {
                            allProducts.filter((item)=> item.bestSellers).map((item)=><Card1 handleCardClick={handleCardClick} item={item} key={item.name} id={item.id} name={item.name} shades={item.shades} price={item.price} img={item.shades[0].productImages[0]}/>)
                            }
                        </div>
                        <button className='slider-arrow right'
                         onClick={() => scrollRightSlider(sliderRef.current, 300)}>
                        <MdKeyboardArrowRight/>
                        </button>
                </div>
                        </div>
            </div>
            </div>

            <div className="details-four">
                <div className="container-cat">
                    <div className="details-four-container">
                        <div className='d41'>
                        <h5>What's in it?</h5>
                        <p>{currentProduct?.detailsText1}</p>
                        </div>
                        <img src={`/products/${currentProduct?.people}`} alt="" />
                        <div className='d42'>
                        <h5>How to use</h5>
                        <p>{currentProduct?.detailsText1}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="details-five">
                <div className="container-cat">
                    <div className="details-five-container">
                        <div className="fivee">
                        <h5>WHY SELENA LOVES IT</h5>
                        <p>{currentProduct?.selenaLoves}</p>
                        <h5>SELENA GOMEZ</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="details-six">
                <div className="container-cat">
                    <div className="details-six-container">
                        <h1>This is <span>Your</span> <br /> Community</h1>
                        <p>Share your #RareRoutine and tag <br /> @rarebeauty for a chance to be featured!</p>
                        <a href="">LEARN MORE</a>
                        <img className='small d1' src="/products/girl1.jpg" alt="" />
                        <img className='large d2' src="/products/girl2.webp" alt="" />
                        <img className='small d3' src="/products/girl3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Details