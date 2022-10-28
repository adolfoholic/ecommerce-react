import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__title'>
            <Link to='/'>
                E-commerce
            </Link>
        </h1>
        <nav className='header__list'>
            <ul className='header__list-ul'>
                <li className='header__item'>
                    <NavLink className='header__link' to="/login">
                    <i className="menu__login fa-solid fa-arrow-right-to-bracket"> Login</i>
                    </NavLink>
                </li>
                <li className='header__item'>
                    <NavLink className='header__link' to="/purchases">
                    <i className="menu__purchases fa-solid fa-shop"> Purchases</i>
                    </NavLink>
                </li>
                <li className='header__item'>
                    <NavLink className='header__link' to="/cart">
                    <i className="menu__cart fa-solid fa-cart-shopping"> Cart</i>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header