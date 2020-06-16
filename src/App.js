import React from 'react';
import { Router } from '@reach/router'
import './App.css';
import About from './About'
import Contact from '/Contact'
import Portfolio from './Portfolio'
import Home from './Home'
import Blog from './Blog'
import ResponsiveNavigation from './Components/ResponsiveNavigation'
import logo from './logo.svg'

function App() {

  const navLinks = [
    {
      text: 'Home',
      path: '/',
      // icon: 'ion-ios-home',
    },
    {
      text: 'Contact',
      path: '/Contact',
      // icon: 'ion-ios-megaphone',
    },
    {
      text: 'About',
      path: '/about',
      // icon: 'ion-ios-business',
    },
    {
      text: 'Blog',
      path: '/blog',
      // icon: 'ion-ios-bonfire',
    },
    {
      text: 'Portfolio',
      path: '/portfolio',
      // icon: 'ion-ios-briefcase',
    }
  ]

  return (
    <div className="App">
      <ResponsiveNavigation 
        navLinks={ navLinks }
        logo = { logo }
      />
      <Router>
        < Contact path = "/contact" />
        < Portfolio path = "/portfolio" />
        < Home path = "/home" />
        < Blog path = "/blog" />
        < About path = "/About" />
      </Router>
    </div>
  );
}

export default App;
