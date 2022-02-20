import React from 'react'
import {FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
      <footer className='text-center mt-auto'>
        <a className='mx-3 fs-3' href="https://www.github.com/hahusahin">
          <FaGithub />
        </a>
        <a className='mx-3 fs-3' href="https://www.twitter.com/hahusahin">
          <FaTwitter />
        </a>
        <a className='mx-3 fs-3' href="https://www.instagram.com/hahusahin">
          <FaInstagram />
        </a>
        <p></p>
        <p>{`© Copyright ${new Date().getFullYear()} Huseyin SAHIN`}</p>
      </footer>
  )
}

export default Footer