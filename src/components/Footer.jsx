import React from 'react'
import { CiTwitter } from 'react-icons/ci'
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="footer-container1">
      <div className="footer1">
        <h4>Sign up for email and/or texts for the latest updates, special offers, and more.</h4>
        <div className='email'>
          <p>By entering your email address and clicking “Join Us” you agree to receive marketing email messages from Rare Beauty at the email address provided. Unsubscribe at any time. View our Privacy Policy & Terms of Service.</p>
          <div>
            <p>Your Email</p>
            <p>Join Us</p>
          </div>
        </div>
        <div className='mobile'>
          <p>By clicking “join us”, you agree to receive recurring automated marketing text messages (e.g. AI content, cart reminders) from Rare Beauty at the number you provide. Consent not a condition of purchase. We may share info with service providers per our Privacy Policy. Reply HELP for help & STOP to cancel. Msg frequency varies. Msg & data rates may apply. By clicking this button, you also agree to our Terms (incl. arbitration) & Privacy Policy.</p>
          <div>
            <p>Your Mobile</p>
            <p>Join Us</p>
          </div>
        </div>
      </div>
      <div className="footerr">
      <div className="footer2">
        <div className="footer21">
          <h3>SHOP</h3>
          <p>Face</p>
          <p>Eye</p>
          <p>Lip</p>
          <p>Tools</p>
        </div>
        <div className="footer22">
          <h3>COMPANY</h3>
          <p>About Us</p>
          <p>Rare Impact</p>
          <p>Made Accessible</p>
          <p>Sustainability</p>
          <p>Store Locator</p>
        </div>
      </div>
      <div className="footer3">
        <h3>CUSTOMER SERVICE</h3>
        <p>Contact Us</p>
        <p>Shipping & Returns</p>
        <p>Start a U.S. Return</p>
        <p>FAQs</p>
        <p>U.S. Gift Card Balance</p>
        <p>Shade Match Live Chat</p>
        <p>Klarna</p>
        <p>Accessibility</p>
      </div>
      </div>
      </div>
      <div className="footer-container2">
      <div className="ikoni">
        <FaInstagram className='ikonka' />
        <FaFacebookF className='ikonka' />
        <CiTwitter className='ikonka' />
        <FaYoutube className='ikonka' />
        <FaPinterestP className='ikonka' />
        </div>
        <img src="/products/foot.png" alt="" />
      </div>
    </div>
    </>
  )
}

export default Footer