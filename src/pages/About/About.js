import React from 'react'
import './About.css'

import sohn from '../../images/sohn.JPG'
import rui from '../../images/rui.jpg'

class About extends React.Component {
    state = {
        loading: true
    }
    componentDidMount() {
        setTimeout(this.toggle, 200)
    }
    toggle = () => {
        this.setState({ loading: !this.state.loading })
    }
    render() {
        const { loading } = this.state
        return (
            <section className={`page-about ${!loading && ' page-active'}`}>
                <div className='about-card-1'>
                    <div className='img-wrapper'>
                        <img src={sohn} alt='Dr. Sohn' />
                    </div>
                </div>
                <div className='about-card-2'>
                    <div className='img-wrapper'>
                        <img src={rui} alt='Dr. Rui' />
                    </div>
                </div>
            </section>
        )
    }
}

export default About