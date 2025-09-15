import React, { useContext, useEffect, useRef, useState } from 'react'
import { rareContext } from '../context/DataContext'
import Loader from '../components/Loader'
import Card from '../components/Card'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
function Rare() {
    const {sliderData,data, error, loader} = useContext(rareContext)

    const sliderRef = useRef(null);
    const sliderRef1 = useRef(null);
    
    
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isUserScrolling, setIsUserScrolling] = useState(true);
    const isDown1 = useRef(false);
    const navigate = useNavigate()
    let [x , setX] = useState(0)
    const startX1 = useRef(0);
    const scrollLeft1 = useRef(0);
    
        useEffect(() => {
            const slider = sliderRef1.current;
            // if (!slider) return
            
            const interval = setInterval(() => {
                
                if (!isUserScrolling ) {
                //   console.log('go');
                //   setX(prev => prev + 2)
                  slider.scrollLeft += 2; 
              }
            }, 30);
        
            return () => clearInterval(interval);
          }, [isUserScrolling]);

    
          
          if(loader){
              return <Loader/>
            }
            const handleMouseDown1 = (e) => {
                isDown1.current = true;
                setIsUserScrolling(true)
                startX1.current = e.clientX;
                scrollLeft1.current = sliderRef1.current.scrollLeft;
              };
              console.log(startX1.current);
              console.log(scrollLeft1.current);
              
              const handleMouseLeave1 = () => {
                isDown1.current = false;
                setIsUserScrolling(false);
              };
              
              const handleMouseUp1 = () => {
                isDown1.current = false;
                setIsUserScrolling(false);
              };
              
              const handleMouseMove1 = (e) => {
                if (!isDown1.current) return;
                e.preventDefault();
                const x = e.clientX;
                const walk = x - startX1.current; 
                sliderRef1.current.scrollLeft = scrollLeft1.current - walk;
              };
              

              const handleMouseDown = (e) => {
                setIsDown(true);
                setStartX(e.clientX - sliderRef.current.offsetLeft);
                setScrollLeft(sliderRef.current.scrollLeft);
              };

              
              const handleMouseLeave = () => setIsDown(false);
              const handleMouseUp = () => setIsDown(false);
              
              const handleMouseMove = (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.clientX - sliderRef.current.offsetLeft;
                const walk = (x - startX) * 1; 
                sliderRef.current.scrollLeft = scrollLeft - walk;
              };
            

              function scrollLeftSlider(a,b){
                a.scrollLeft -=  b
              }
              function scrollRightSlider(a,b){
                a.scrollLeft +=  b
              }
  return (
    <>
        <div className='main' >
            <div className='aa'>
            </div>
            <div className="video-container">
                <video autoPlay muted loop controls>
                    <source src="/rare.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="part1">
                <div className="best">
                <div className="container-1">
                    <div className='best-container'>
                            <h1>Bestsellers</h1>
                        <Link to={'/products/category/all/bestsellers'}>
                            SHOP NOW
                        </Link>
                    </div>
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
                            {data.map((item, i) => 
                            // console.log(item)
                            
                                // <div key={i} className="slide">
                                // {i + 1}
                                // </div>
                                item.products.filter((item)=> item.bestSellers).map(item=> <Card  key={item.name} id={item.id} name={item.name} shades={item.shades} price={item.price} img={item.shades[0].productImages[0]}/>)
                            )}
                        </div>
                        <button className='slider-arrow right'
                         onClick={() => scrollRightSlider(sliderRef.current, 300)}>
                        <MdKeyboardArrowRight/>
                        </button>
                </div>
                        </div>
            </div>
           </div>
            <div className="part2">
            <div className="container">
                    <div className="part2-container">
                        <img src="/products/home1.webp" alt="" />
                        <div>
                            <h1>Soft Pinch Liquid Blush</h1>
                            <p>Meet our award-winning bestseller that’s sold every four seconds. Lightweight, layerable, long-lasting—and loved by so many worldwide. Get pinch-perfect color in just one dot.</p>
                            <a href="" onClick={()=> navigate('/products/search?q=soft%20pinch')}>SHOP SOFT PINCH</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="part3">
                <div className="container-2">
                    <div className="part3-container">
                        <div className='part31'>
                            <h1>Foundation <br /> Shade <span>Finder</span></h1>
                            <p>Find your best shade, along with complexion must-haves perfect for your skin tone. All in just 3 simple steps.</p>
                            <button onClick={()=>navigate('products/shadefinder')}>MATCH ME</button>
                        </div>
                        <div className="part32">
                            <div className='girls'>
                                <img className='small' src="/products/girl1.jpg" alt="" />
                                <img className='large' src="/products/girl2.webp" alt="" />
                                <img className='small' src="/products/girl3.jpg" alt="" />
                            </div>
                            <div className="part321">
                                <div className="colors">
                                    <p>LIGHT</p>
                                    <p>LIGHT <br /> MEDIUM</p>
                                    <p>MEDIUM</p>
                                    <p>MEDIUM <br /> TAN</p>
                                    <p>MEDIUM <br /> DEEP</p>
                                    <p>DEEP</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="mosaic-slider"
                ref={sliderRef1}
                onMouseDown={handleMouseDown1}
                onMouseLeave={handleMouseLeave1}
                onMouseUp={handleMouseUp1}
                onMouseMove={handleMouseMove1}
                >
                    <div className='community'>
                        <h3>This is <span>Your</span><br /> Community</h3>
                        <p>Share your #RareRoutine and tag @rarebeauty for a <br /> chance to be featured!</p>
                        <a href="" onClick={()=> navigate('/products/impact')}>LEARN MORE</a>
                    </div>

                 {sliderData.map((item, i) => (
                    <div
                    key={i}
                    className={`mosaic-item ${i % 3 === 0 ? "up" : i % 3 ==1 ? 'middle' : "down"}`}
                    >
                    <img onMouseDown={handleMouseDown1}
                onMouseLeave={handleMouseLeave1}
                onMouseUp={handleMouseUp1}
                onMouseMove={handleMouseMove1} src={`/products/${item.image}`} alt={`slide-${i}`} />
                    </div>
                ))}
                <div className='community'>
                        <h3>This is <span>Your</span><br /> Community</h3>
                        <p>Share your #RareRoutine and tag @rarebeauty for a chance to be featured!</p>
                        <a onClick={()=> navigate('/products/impact')} href="">LEARN MORE</a>
                    </div>
            </div>
            <div className="part4">
                    <h1>Shop by <br /> Category</h1>
                            <div className='one'>
                                <Link to={'/products/category/eye'}>
                                <img src="/products/p1.webp" alt="" />
                                </Link>
                                <h1>Eye</h1>
                            </div>
                           <div className='two'>
                           <Link to={'/products/category/lip'}>
                                <img src="/products/p2.webp" alt="" />
                                </Link>
                                <h1>Lip</h1>
                           </div>
                            <div className='three'>
                            <Link to={'/products/category/all/bestsellers'}>
                                <img src="/products/p3.webp" alt="" />
                                </Link>
                                <h1>Bestsellers</h1>
                            </div>
            </div>
            <div className="part5">
                <div className="container-2">
                    <div className="part5-container">
                        <img src="/products/selena.webp" alt="" />
                        <div>
                            <h1>Make an <span>Impact</span> on <br /> mental health</h1>
                            <p>1% of Rare Beauty’s annual sales will go <br /> directly to the Rare Impact Fund to <br /> expand mental health services in <br /> underserved communities.</p>
                            <button onClick={()=> navigate('/products/impact')}>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Rare