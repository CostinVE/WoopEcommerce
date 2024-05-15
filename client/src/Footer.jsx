import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <div className="flex flex-col bottom-0  bg-zinc-950 " style={{minHeight:"40vh", height:"fit"}}>
          <div className="flex flex-row mx-60 mt-8 mb-20 gap-60">
              <div className="flex flex-col gap-4">
                  <p className="roboto-condensed-bold text-base text-white cursor-pointer">FIND A STORE</p>
                  <p className="roboto-condensed-bold text-sm text-white cursor-pointer">WOOP JOURNAL</p>
                  <p className="roboto-condensed-bold text-sm text-white cursor-pointer">BECOME A MEMBER</p>
                  <p className="roboto-condensed-bold text-sm text-white cursor-pointer">FEEDBACK</p>
                  <p className="roboto-condensed-bold text-sm text-white cursor-pointer">PROMO CODES</p>
           </div>
           <div className="flex flex-col gap-4">
                  <p className="roboto-condensed-bold text-base text-white cursor-pointer">HELP</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">Get Help</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">Order Status</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">Shipping and Delivery</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">Returns</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">Payment Options</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">Contact Us</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">Reviews</p>
                
           </div>
           <div className="flex flex-col gap-4">
                  <p className="roboto-condensed-bold text-base text-white cursor-pointer">COMPANY</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">About Woop</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">News</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">Careers</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">Investors</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">Sustainability</p>
                  <p className="roboto-condensed-bold text-sm text-zinc-500 cursor-pointer hover:text-white">Purpose</p>
                
           </div>
          </div>
          <div className='flex flex-row mx-60 mb-4 justify-between'>
            <p className='roboto-condensed text-base text-white cursor-pointer'><FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} /> Country </p>
            <p className='roboto-condensed text-base text-zinc-500'>@2024 Woop Inc. All rights reserved.</p>
            <div className='flex flex-row gap-5'>
            <p className='roboto-condensed text-sm cursor-pointer text-zinc-500 hover:text-white'>Guides</p>
            <p className='roboto-condensed text-sm cursor-pointer text-zinc-500 hover:text-white'>Terms of Use</p>
            <p className='roboto-condensed text-sm cursor-pointer text-zinc-500 hover:text-white'>Terms of Sale</p>
            <p className='roboto-condensed text-sm cursor-pointer text-zinc-500 hover:text-white'>Company Details</p>
            <p className='roboto-condensed text-sm cursor-pointer text-zinc-500 hover:text-white'>Privacy & Cookie Policy</p>
            <p className='roboto-condensed text-sm cursor-pointer text-zinc-500 hover:text-white'>Cookie Settings</p>
            </div>
          </div>
        </div>
  )
}
