import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import headerStyles from './Header.module.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className={headerStyles.nav_greeting}>
        <span className={headerStyles.greeting}>
          Hello, {this.context.user.name}
        </span>
        <nav className={headerStyles.nav}>
          <Link
            className={headerStyles.nav_links}
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav className={headerStyles.nav}>
        <Link className={headerStyles.nav_links} to='/login'>Login</Link>
        {' '}
        <Link className={headerStyles.nav_links} to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header className={headerStyles.header_container}>
        <h1 className={headerStyles.title}>
          <Link className={headerStyles.title_text} to='/'>
            Spaced repetition
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header
