import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Landing from './pages/Landing/Landing'
import Services from './pages/Services/Services'


// import massage from './images/massage.mp4'
import candle from './images/candle.mp4'
import logo from './images/logolarge.jpg'
import beach from './images/beach.mp4'
import mistogan from './images/flour.mp4'
import incense from './images/incense.mp4'
import './App.css';

class App extends React.Component {
  state = {
    navOpen: false,
  }
  componentDidMount() {
    const video = document.getElementById("myVideo");

    video.play()
  }
  toggleNav = () => {
    const { navOpen } = this.state
    console.log('yo')
    this.setState({ navOpen: !navOpen })
  }
  closeNav = () => {
    this.setState({ navOpen: false })
  }
  render() {
    const { navOpen } = this.state
    return (
      <div id="outer-container">
        <Menu
          isOpen={navOpen}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
          width={220}>
          <div className='hamburger-list'>
            <Link onClick={this.closeNav} to='/services'>Services</Link>
            <Link onClick={this.closeNav} to='/about'>About</Link>
            <Link onClick={this.closeNav} to='/contact'>Contact</Link>
          </div>
        </Menu>
        <main id="page-wrap">
          <div className='video-wrapper'>
            <video id='myVideo' className='video-background' src={window.location.href.includes('services') ? beach : window.location.href.includes('about') ? mistogan : window.location.href.includes('contact') ? incense : candle } muted={true} loop={true} />
          </div>
          <section className='body'>
            <nav className='nav'>
              <ul>
                <li>
                  <Link to='/' onClick={this.closeNav} >Home</Link>
                </li>
                <li>
                  <Link to='/services' onClick={this.closeNav} >Services</Link>
                </li>
                <li>
                  <Link onClick={this.closeNav} to='/'><img src={logo} alt='logo' /></Link>
                </li>
                <li>
                  <Link to='/about' onClick={this.closeNav} >About</Link>
                </li>
                <li>
                  <Link to='/contact' onClick={this.closeNav} >Contact</Link>
                </li>
              </ul>
              <div className='hamburger' onClick={this.toggleNav} />
            </nav>
            <section className='main'>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/services' component={Services} />
              </Switch>
            </section>
          </section>
        </main>
      </div>
    )
  }
}

export default App;
