import React from 'react'
import { Link} from 'react-router-dom'


class NavBar extends React.Component {
  render(){

    return(
      <div className="navbar">
        <Link to="/about"> About </Link>
        <Link to="/contracts"> Contracts </Link>
      </div>
    )

  }


}

export default NavBar
