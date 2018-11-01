import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='copyright'>
        © 2018 Chely Ho
      </div>
      <div className='external-links'>
        <a href='https://github.com/unenlightened' target='_blank' rel="noopener noreferrer"><i className='fab fa-github'></i></a>
        <a href='https://www.linkedin.com/in/chelyho/' target='_blank' rel="noopener noreferrer"><i className='fab fa-linkedin' target='_blank'></i></a>
        <a href='mailto: hello@chelyho.com'><i className='fas fa-envelope'></i></a>
        {/* <a><i className='material-icons'>mail</i></a> */}

        {/* TODO: on hove expand out the names for med and large screen sizes */}
        {/* extra margin coming from somewhere.... maybe sticky footer */}
        {/* <a>GitHub</a>
        <a>LinkedIn</a>
        <a>Email</a> */}
      </div> 
    </footer>
  )
}

export default Footer
