import React, { useContext, useRef } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { rareContext } from '../context/DataContext'

function RareImpact() {
    const{loader, impactSliderData} = useContext(rareContext)
    const sliderRef = useRef(null)

    function scrollLeft(){
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
          }
    }
    function scrollRight(){
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
          }
    }
    if (loader) {
        return (
          <div className="loader-container">
            <div className="spinner"></div>
            <h1 className="loader-text">Loading Data...</h1>
          </div>
        );
      }
  return (
    <>
    <div className="rareImpact">
        <div className="rareImpact1">
            <div className="impact1">
                <img src="/products/impact1.webp" alt="" />
                <div>
                    <h1>rare impact</h1>
                    <p>Rare Beauty’s signature social <br /> impact initiative committed to <br /> making a difference in the world. </p>
                </div>
            </div>
            <div className="impact2">
                <p>WITH A FOCUS ON</p>
                <h1>MENTAL HEALTH AND SELF-ACCEPTANCE</h1>
                <p>Rare Impact aims to support the mental health of our community, employees, and partners everywhere. By celebrating everyone’s uniqueness <br /> and making people feel more connected, Rare Beauty works to reduce the stigma associated with mental health and give people access to the <br /> resources they need to support their mental well-being.</p>
            </div>
            <div className="impact3">
                <p>To donate to the Rare Impact Fund and learn more about our global mental health partners, please visit www.RareImpactFund.org.</p>
            </div>
        </div>
        <div className="rareImpact2">
            <div className="container-cat">
                <div className="rareImpact2-container">
                    <h5>LEARN MORE ABOUT WHAT WE DO</h5>
                    <h1>RARE BEAUTY SOCIAL IMPACT REPORTS</h1>
                    <div className="report">
                        <img src="/products/impact3.webp" alt="" />
                        <div className="report1">
                            <h2>2024</h2>
                            <p>As we celebrate five years of the Rare Impact Fund, we look back on all we accomplished in 2024. Our impact was greater than ever—and we couldn’t have done it without you.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="rareImpact3">
            <div className="container-cat">
                <div className="rareImpact3-container">
                    <h5>MEET OUR</h5>
                    <h1>RARE BEAUTY MENTAL HEALTH COUNCIL</h1>
                    <p>To help guide our strategy, Rare Beauty also created the Rare Beauty Mental Health Council, comprised of leaders and practitioners from the fields of mental health, philanthropy, entertainment, media, and academia.</p>
                    <div ref={sliderRef} className="impactSlider">
                        <div className='impactIkon1' onClick={()=> scrollLeft()}>
                        <MdOutlineKeyboardArrowLeft />
                        </div>
                        {
                            impactSliderData.map(item=> (
                                <div className='impactSlide'>
                                    <img src={`/products/${item.img}`} alt="" />
                                    <h2>{item.name}</h2>
                                    <p>{item.infa}</p>
                                </div>
                            ))
                        }
                        <div className='impactIkon2' onClick={()=>scrollRight()}>
                        <MdOutlineKeyboardArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="rareImpact4">
           <div className="container">
            <div className="rareImpact4-container">
                <div>
                    <h5>DISCOVER OUR</h5>
                    <h1>RESOURCES & SUPPORT</h1>
                    <h3>Understanding mental health and well-being is a lifelong journey.
                     If you or someone you know is experiencing a mental health crisis, please know there are resources available with trained professionals to support you.</h3>
                </div>
            <p>The information provided on and through this website is presented as a supplement to, and not a substitute for, the knowledge, skill and judgment of qualified psychiatrists, psychologists, physicians and health care professionals. The information on RareBeauty.com has been obtained from sources reasonably believed to be accurate and reliable. Content accessed on or through RareBeauty.com is neither complete nor exhaustive. You should always talk to your health care provider. Information provided on RareBeauty.com and our social media channels is for informational purposes only and is not intended as medical advice.</p>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default RareImpact