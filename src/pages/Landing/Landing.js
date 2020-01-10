import React from 'react'
import './Landing.css'
import Typing from 'react-typing-animation';

class Landing extends React.Component {
    state = {
        loading: true
    }
    componentDidMount() {
        setTimeout(this.toggle, 200)
        const video = document.getElementById("myVideo");

        video.play()
    }
    toggle = () => {
        this.setState({ loading: !this.state.loading })
    }
    render() {
        const { loading } = this.state
        return (
            <div>
                <section className={`page-landing ${!loading && ' page-active'}`}>
                    <h1>My Day Spa & Wellness</h1>
                </section>
                <section className='landing-desc'>
                    <img src='https://snipboard.io/Fc0xB2.jpg' className='banner' alt='banner' />
                    <div className='landing-block'>
                        <img src='https://snipboard.io/uwgEOj.jpg' alt='store-front'></img>
                        <p>Located in Calabasas, My Day Spa and Wellness is committed to bringing health, wellness, and peace to the world.</p>
                    </div>
                    <div className='landing-block'>
                        <p>We understand that you are not living your best life unless your mind and body are completely healthy. That's why we take a holistic approach to preventing and reversing disease.</p>
                        <img src='https://images.unsplash.com/photo-1551690935-a9e6f0a7e788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' alt='incense' />
                    </div>
                    <div className='landing-block'>
                        <img src='https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1650&q=80' alt='woman getting acupuncture' />
                        <p>Our goal is to provide alternative medical care that will reverse and prevent disease using the fundamental healing principles of mind-body medicine. Our results prove the best way to heal the body is naturally.</p>
                    </div>
                    <div className='landing-block'>
                        <p>We care about your overall well being and will provide you with the guidance, knowledge, and tools needed to be healthy. Let us help you achieve optimal wellness!</p>
                        <img src='https://images.unsplash.com/photo-1532486770861-0d1872c391ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' alt='waterfall' />
                    </div>
                </section>
            </div>
        )
    }
}

export default Landing