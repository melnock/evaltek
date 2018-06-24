import React from 'react'
import { Link} from 'react-router-dom'


class NavBar extends React.Component {
  render(){

    return(
      <div className="navbar">
      <Link to="/contracts"> Contracts </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact Us </Link>
      </div>
    )

  }


}

export default NavBar
