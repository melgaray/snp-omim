import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>
            DNA
            <span className='badge badge-up badge-danger'>mt</span>
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/stats'>Stats</Link></li>
            <li className='dropdown'>
              <Link to='/phenotypes'>Known Phenotypes </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;