import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { MdOutlineCancel } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Card from './Card';
import { rareContext } from '../context/DataContext';
import Card1 from './Card1';
import { IoIosArrowDown, IoMdMenu } from 'react-icons/io';
function Head() {
    const user = JSON.parse(localStorage.getItem('user'))
    const items = [
        { img: "/products/shop1.webp", title: "Shop All" },
        { img: "/products/shop2.webp", title: "Bestsellers" },
        { img: "/products/shop3.webp", title: "Fragrance" },
        { img: "/products/shop4.webp", title: "Face" },
        { img: "/products/shop5.webp", title: "Eye" },
        { img: "/products/shop6.webp", title: "Lip" },
        { img: "/products/shop7.webp", title: "Body" },
        { img: "/products/shop8.webp", title: "Tools" },
    ];
    const visibleItems = [...items, items[0], items[1], items[2], items[3]]; // дублируем
      const sliderRef = useRef(null);
      const slider1 = useRef(null);
      const [isDown, setIsDown] = useState(false);
      const [startX, setStartX] = useState(0);
      const [scrollLeft, setScrollLeft] = useState(0);
      const [menuOpen, setMenuOpen] = useState(false)
      const [menuList, setMenuList] = useState(false)
      const [shopList, setShopList] = useState(false)
      const [itemWidth, setItemWidth] = useState(150);
      const [searchOpen, setSearchOpen] = useState(false); 
      const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
      const [value, setValue] = useState(null)
      const [showShades, setShowShades] = useState({})
      const {data, error, loader, basket,setBasket, addToBasket, removeFromBasket, changeQuantity, setBasketOpen, basketOpen} = useContext(rareContext)
      const totalItems = basket.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = basket.reduce((sum, item) => sum + item.quantity * item.price, 0);
      const filteredProducts = data .flatMap(item => item.products) .filter(item => value ? item.name.toLowerCase().includes(value.toLowerCase()) : '') .slice(0, 4)
      const navigate = useNavigate();
    //   const [itemWidth, setItemWidth] = useState(0);
      const itemRef = useRef(null); 
      const searchRef = useRef()
      const step = 3; // на сколько карточек двигать за раз
     const [index, setIndex] = useState(0);
     useEffect(() => {
        if (itemRef.current) {
        //   const width = itemRef.current.getBoundingClientRect().width;
          setItemWidth(itemWidth + 16); // добавляем gap
        }
      }, []);
      useEffect(() => {
        const handleClickOutside = (e) => {
          if (searchRef.current && !searchRef.current.contains(e.target)) {
            setSearchOpen(false);
            setValue("");
          }
        };
      
        document.addEventListener("mousedown", handleClickOutside);
        // return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);
      

  const scrollRight = () => {
    let newIndex = index + step;
    if (newIndex >= items.length) {
      newIndex = 0; // возврат в начало
    }
    setIndex(newIndex);

    sliderRef.current.scrollTo(
        {
        
      left: newIndex * itemWidth,
    });
  };

        // useEffect(() => {
        // if (itemRef.current) {
        //     setItemWidth(itemRef.current.getBoundingClientRect().width);
        // }
        // }, []);

    
    //    ширина элемента + gap, можно подстроить
    
    //   drag мышкой
      const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX);
        setScrollLeft(sliderRef.current.scrollLeft);
      };
      const handleMouseLeave = () => setIsDown(false);
      const handleMouseUp = () => {
        // sliderRef.current.scrollLeft = sliderRef.current.offsetWidth ;

        setIsDown(false);
        
      };
      const handleMouseMove = (e) => {
          
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX;
          const walk = x - startX;
          sliderRef.current.scrollLeft = scrollLeft - walk ;
          console.log(sliderRef.current.scrollLeft);
          
      };
    
      // выравниваем scroll по 4 элементам
      const snapScroll = () => {
        const slider = sliderRef.current;
        const page = Math.round(slider.scrollLeft / (itemWidth * 4));
        slider.scrollTo({ left: page * itemWidth * 4});
      };
    
      // кнопка вправо — 4 элемента
     // замена в твоём коде

// кнопка вправо — 4 элемента
// const scrollRight = () => {
//   const slider = sliderRef.current;
//   const page = Math.round(slider.scrollLeft / (itemWidth * 4));
//   const nextPage = page + 1;

//   slider.scrollTo({
//     left: nextPage * itemWidth * 4,
//     behavior: "smooth",
//   });

//   // если ушли за пределы первой копии
//   if (nextPage >= Math.ceil(visibleItems.length / 4) - 1) {
//     setTimeout(() => {
//       slider.scrollTo({ left: 0, behavior: "auto" }); // телепорт в начало
//     }, 500); // время анимации
//   }
// };



    function goToPage(a){
        
        navigate(`/products/category/${a}`)
        setMenuOpen(false);

    }

    // function addToBasket(product){
    //     setBasket(prevProduct =>{
    //         const exist = prevProduct.find(item=> item.id == product.id)
    //         if (exist){
    //             return prevProduct.map(item=> item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
    //         } else{
    //             return [...prevProduct, { ...product, quantity: 1 }];
    //         }
    //     })
    // }
    // const removeFromCart = (productId) => {
    //     setBasket(prevProduct => prevProduct.filter(item => item.id !== productId));
    //   };

    //   const changeQuantity = (productId, delta) => {
    //     setBasket(prevProduct =>
    //       prevProduct.map(item =>
    //         item.id === productId
    //           ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
    //           : item
    //       )
    //     );
    //   };
    
  return (
    <>
    <div className="head searchClick" ref={searchRef} >
    {/* <div className="container"> */}
    <div className='header'>
        <div className='head1'>
            <div onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)} className='shop'>
            <a  href="">SHOP</a>
            {
                menuOpen && (
                    <div className="menu">
                    <div className="container">
                    <div
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="menu-slider-wrapper">
              <div
                className="menu-slider"
                ref={slider1}
            
              >
                {items.map((item, i) => (
                   
                //    ref={i === 0 ? itemRef : null}
                  <div ref={slider1}   key={i}>
                    <img onClick={()=>goToPage(
                        item.title == "Shop All" ? "all" :
                        item.title == "Bestsellers" ? "all/bestsellers" :
                        item.title.toLowerCase()
                    )} src={item.img} alt={item.title} />
                    <h1>{item.title}</h1>
                  </div>
                ))}
              </div>
              
              <button onClick={scrollRight} className="arrow right" >›</button>
            </div>
                    </div>
                </div>
                )
            }
            </div>
            <Link className='aaa' to={'/products/category/fragrance'}>
                FRAGRANCE
            </Link>
            <Link to={'/products/shadefinder'} href="">SHADE FINDER</Link>
            <a onClick={()=> navigate(`/products/impact`)} href="">RARE IMPACT</a>
        </div>
        <div className="menuResponsive">
        {/* <IoMdMenu onClick={()=>setMenuList(true)} className={`threelines ${menuList ? close : ''}`}/> */}
        { menuList ? <MdOutlineCancel className='threelines' onClick={()=>setMenuList(false)}/> : <IoMdMenu onClick={()=>setMenuList(true)} className={`threelines`}/> }
        {menuList && (<div className='menuList'>
            <div className='shopList'>
                <p onClick={()=> (setShopList(!shopList))} href="">Shop</p>
                <div className='shopListsection'>
                {shopList && (items.map((item, i) => (
                   
                   <p onClick={()=>(goToPage( 
                    item.title == "Shop All" ? "all" :
                    item.title == "Bestsellers" ? "all/bestsellers" :
                    item.title.toLowerCase()
                ),setMenuList(false))}>{item.title}</p>
    
               )))}
                </div>
            </div>
            <p onClick={()=> navigate(`/products/shadefinder`)}>Shade Finder</p>
            <p onClick={()=> navigate(`/products/impact`)}>Rare Impact</p>
        </div>)}
        </div>
        <div className='head2'>
            <Link to={'/'}>
            <img src='/logo.png' alt="" />
            </Link>
        </div>
        <div className='head3'>
            <div className='searchClick'>
            <div className={` ${!searchOpen ? 'search' : ''}`}>
                {!searchOpen && (<input onClick={()=> setSearchOpen(true)} type="text" placeholder='Search' />)}
                <FaSearch/>
            </div>
            {searchOpen && (<div className="search-table">
                <div className="container">
                    <div className="searchAll">
                        <div className="search-input">
                            <input  onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                            navigate(`/products/search?q=${encodeURIComponent(value)}`);
                                            setSearchOpen(false);
                                            }
                                        }}  onChange={(e)=> setValue(e.target.value)} type="text" placeholder='Search' />
                            <MdOutlineCancel  onClick={()=> {setSearchOpen(false); setValue("");}} className='ss' />
                        </div>
                            <div className="searchCards">
                            { filteredProducts.length> 0 ?
                                (filteredProducts
                                    .map(item=>(
                                            <Card1 handleCardClick= {()=> {setSearchOpen(false); setValue('')}} key={item.name} id={item.id} name={item.name} shades={item.shades} price={item.price} img={item.shades[0].productImages[0]} 
                                            /> 
                                    ))):(
                                        <h3>No results</h3>
                                    )
                            }
                            </div>
                    </div>

                </div>
            </div>)}
            <div className="mobile-search-icon">
    <FaSearch onClick={() => setMobileSearchOpen(true)} />
  </div>
  {mobileSearchOpen && (
        <div className="mobile-search-fullscreen">
          <div className="mobile-search-header">
            <input
              type="text"
              placeholder="Search..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/products/search?q=${encodeURIComponent(value)}`);
                  setMobileSearchOpen(false);
                }
              }}
              autoFocus
            />
            <MdOutlineCancel
              className="close-icon"
              onClick={() => {
                setMobileSearchOpen(false);
                setValue("");
              }}
            />
          </div>

          <div className="mobile-search-results">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(item => (
                <Card1
                  handleCardClick={() => {
                    setMobileSearchOpen(false);
                    setValue("");
                  }}
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  shades={item.shades}
                  price={item.price}
                  img={item.shades[0].productImages[0]}
                />
              ))
            ) : (
              <h3>No results</h3>
            )}
          </div>
        </div>
      )}
            </div>
            <FaRegUser onClick={()=> user ? navigate('/account') : navigate('registeroracc') }/>
            <div className='shopping'>
            <FaBasketShopping onClick={()=> setBasketOpen(true)}/>
            <div className='totalitems'>{totalItems}</div>
            </div>
            <div className='country'></div>

        </div>
        <div className={`basket ${basketOpen ? 'open' : ''}`}>
        <MdOutlineCancel onClick={()=> setBasketOpen(false)} className='basketIcon'/>
            <h3>Your bag</h3>
            <div className="addedProducts">
                {basket.map((item, index) =>{
                 const activeShade = item.selectedShade || item.shade;
                return (
                    <div key={index} className="productItem">
                    <div className="pp1">
                    <MdOutlineCancel onClick={() => removeFromBasket(item.name,activeShade.name)} className="cancelIcon" />
                    <img src={`/products/${activeShade?.productImages?.[0]}`} alt={item.title} />
                    </div>
                    <div className='baskett'>
                    <p className='itemName'>{item.name}</p>
                    <p className='pp1' onClick={()=> setShowShades((prev)=> ({
                        ...prev,
                        [index]: !prev[index]
                    }))}>{activeShade?.name} <IoIosArrowDown /> </p>
                    <div className='basketShades'>
                    {  showShades[index] && (item.shades.length>1 &&                        
                            item.shades.map(shade => (
                            <img src={`/products/${shade.shadeImage}`} 
                            onClick={() =>
                                setBasket(prev =>
                                    prev.map((p,i) =>
                                        i == index ? { ...p, selectedShade: shade } : p
                                    )
                                )
                            }
                            />
                        )))
                    }
                    </div>
                    </div>
                    <div className="cash">
                        <p>{item.price}</p>
                        <div className="cash11">
                        <button onClick={() => changeQuantity(item.name,activeShade.name, -1)}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => changeQuantity(item.name,activeShade.name, +1)}>+</button>
                        </div>
                    </div>
                    </div>
                )})}
            </div>
                <button className='totalprice'>${totalPrice} CHECKOUT</button>
                    
            </div>                    
    </div>
    </div>

    {/* <div className="menu">
    <div className="container">
    <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="menu-slider-wrapper">
      <div
        className="menu-slider"
        ref={slider1}
    
      >
        {items.map((item, i) => (
           
        //    ref={i === 0 ? itemRef : null}
          <div ref={slider1}   key={i}>
            <img src={item.img} alt={item.title} />
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
      
      <button onClick={scrollRight} className="arrow right" >›</button>
    </div>
    </div>
    </div> */}
    </>
  )
}

export default Head