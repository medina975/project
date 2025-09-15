import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { rareContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

function ShadeFinder() {
  const [value, setValue] = useState(1);
  const sliderRef = useRef(null);
  const { shadeFinderData, loader } = useContext(rareContext);
  const navigate = useNavigate();

  const pages = shadeFinderData || [];

  const scrollToPage = (pageIndex) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const page = slider.querySelectorAll('.sliderImage')[pageIndex];
    if (!page) return;

    const sliderCenter = slider.offsetWidth / 2;
    const pageCenter = page.offsetLeft + page.offsetWidth / 2;
    slider.scrollTo({
      left: pageCenter - sliderCenter,
      behavior: 'smooth'
    });
  };

  const onSelectShade = (index) => {
    setValue(index + 1);
    scrollToPage(index);
  };

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };
  const onMouseLeave = () => { isDragging.current = false; };
  const onMouseUp = () => {
    isDragging.current = false;
    if (!sliderRef.current) return;
  
    const slider = sliderRef.current;
    const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;
    const pagesElements = slider.querySelectorAll(".sliderImage");
  
    let closestIndex = 0;
    let closestDistance = Infinity;
  
    pagesElements.forEach((page, idx) => {
      const pageCenter = page.offsetLeft + page.offsetWidth / 2;
      const distance = Math.abs(sliderCenter - pageCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = idx;
      }
    });
  

    const page = pagesElements[closestIndex];
    if (!page) return;
  
    const pageCenter = page.offsetLeft + page.offsetWidth / 2;
    slider.scrollTo({
      left: pageCenter - slider.offsetWidth / 2,
      behavior: "smooth",
    });
  
    setValue(closestIndex + 1);
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; 
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;
    const pagesElements = slider.querySelectorAll(".sliderImage");
    let closestIndex = 0;
    let closestDistance = Infinity;

    pagesElements.forEach((page, idx) => {
      const pageCenter = page.offsetLeft + page.offsetWidth / 2;
      const distance = Math.abs(sliderCenter - pageCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = idx;
      }
    });

    setValue(closestIndex + 1);
  };

  const goToPage = () => {
    const currentPage = pages[value - 1];
    if (!currentPage) return;
    navigate(`/products/shadeFinder/${currentPage.name}`);
  };

//   // Добавляем padding для центрирования крайних слайдов
//   useLayoutEffect(() => {
//     if (!sliderRef.current) return;
//     const slider = sliderRef.current;
//     const firstSlide = slider.querySelector(".sliderImage");
//     if (!firstSlide) return;
  
//     const offset = (slider.offsetWidth / 2) - (firstSlide.offsetWidth / 2);
  
//   }, [pages]);
  
// useLayoutEffect(() => {
//     if (!sliderRef.current) return;
//     const slider = sliderRef.current;
//     const firstSlide = slider.querySelector(".sliderImage");
//     if (!firstSlide) return;
  
//     const sliderWidth = slider.offsetWidth;
//     const slideWidth = firstSlide.offsetWidth;
  
//     const sidePadding = (sliderWidth - slideWidth) / 2;
  
//     const sliderImages = slider.querySelector(".sliderImages");
//     if (sliderImages) {
//       sliderImages.style.paddingLeft = `${sidePadding}px`;
//       sliderImages.style.paddingRight = `${sidePadding}px`;
//     }
//   }, [pages]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  if(loader){
    return <Loader/>
  }

  return (
    <div className="shadeFinder">
      <div className="container-cat">
        <div className="shadeFinder-container">
          <h1>Find <span>Your</span> Shade Range</h1>
          <p>Choose the group that best represents your skin tone.</p>

          <div className='finderInput'>
            <div className="skinNames">
              <p>LIGHT</p>
              <p>LIGHT <br /> MEDIUM</p>
              <p>MEDIUM</p>
              <p>MEDIUM <br /> DEEP</p>
              <p>DEEP</p>
            </div>
            <input
              type="range"
              step={1}
              min="1"
              max={pages.length}
              value={value}
              onChange={(e) => {
                const newValue = Number(e.target.value);
                setValue(newValue);
                scrollToPage(newValue - 1);
              }}
            />
          </div>
          <span>{value}</span>
        </div>
      </div>

      <div
        className="sliderSkin"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {/* <div className='trans1'></div> */}
        <div className="sliderImages">
          {pages.map((item, index) => (
            <div className="sliderImage" key={index} onClick={() => onSelectShade(index)}>
              {item.images?.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img ? `/products/${img}` : '/fallback.png'}
                  alt={img || 'shade'}
                />
              ))}
            </div>
          ))}
        </div>
        {/* <div className='trans2'></div> */}
      </div>

      <button onClick={goToPage}>continue</button>
    </div>
  )
}

export default ShadeFinder;
