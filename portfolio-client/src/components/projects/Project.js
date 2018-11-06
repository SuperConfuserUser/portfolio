import React from 'react'
import PropTypes from 'prop-types'

function Project(props) {
  const { name, img_url, description, created_at } = props.project
  
  const date = new Date(created_at)
  .toLocaleDateString('en-US', {
    year: 'numeric', month: 'long'
  })

  //TODO: add category option for Rails side to pass to client-side
  const category = 'Website'

  return (
    <div className='project-detail'>
      <h2>
      {name}
        <span>{date}, {category}</span>
      </h2>

      <img src={img_url} alt={name} />

      <h5>{description}</h5>

      <p>Lorem ipsum dolor sit amet, <em>consectetur</em> adipiscing elit. Fusce a consectetur est. Vestibulum porta non purus in consequat. Donec vitae tempus eros. Cras non vulputate neque. Proin id quam sed diam volutpat euismod sed ut nunc. Sed et sapien ac ligula feugiat cursus.</p>

      <p>Nullam mauris diam, <em>Ruby</em> maximus eu purus maximus, imperdiet lacinia lorem. Donec consectetur risus eros, et viverra neque aliquam vitae. Praesent lacus elit, dapibus a augue tincidunt, pharetra ullamcorper sapien. Sed vulputate rhoncus ornare. Integer non magna ac sem lacinia molestie. Sed et volutpat tortor. Pellentesque <em>facilisis</em> ex ac libero condimentum ultrices in a libero. Proin a elit eros. Vestibulum vel porttitor dolor. Nam placerat eros vel tincidunt cursus.</p>

      <ul className='link-list'>
        <li><a>Demo</a></li>
        <li><a>Walkthrough</a></li>
        <li><a>Github</a></li>
      </ul>

    </div>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired
}

export default Project

