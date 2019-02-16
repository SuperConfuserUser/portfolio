import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='copyright'>
        © 2019 Chely Ho
      </div>
      <div className='external-links'>
        <a href='https://github.com/unenlightened' target='_blank' rel="noopener noreferrer">
          <i className='fab fa-github'></i>
        </a>
        <a href='https://www.linkedin.com/in/chelyho/' target='_blank' rel="noopener noreferrer">
         <i className='fab fa-linkedin-in' target='_blank'></i>
        </a>
        <a href='mailto: hello@chelyho.com'>
          <i className='far fa-envelope'></i>
        </a>

        {/* TODO: on hove expand out the names for med and large screen sizes */}
        {/* TODO: extra margin coming from somewhere.... maybe sticky footer */}
      </div> 
    </footer>
  )
}

export default Footer
