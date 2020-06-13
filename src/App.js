import React from 'react';
import { Router } from '@reach/router'
import './App.css';
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import ResponsiveNavigation from './Components/ResponsiveNavigation'
import logo from './logo.svg'

function App() {

  const navLinks = [
    {
      text: 'Home',
      path: '/',
      icon: 'ion-ios-home',
    },
    {
      text: 'Contact',
      path: '/contact',
      icon: 'ion-ios-megaphone',
    },
    {
      text: 'About',
      path: '/about',
      icon: 'ion-ios-business',
    },
    {
      text: 'Blog',
      path: '/blog',
      icon: 'ion-ios-bonfire',
    },
    {
      text: 'Portfolio',
      path: '/portfolio',
      icon: 'ion-ios-briefcase',
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
