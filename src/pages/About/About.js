import React from 'react'
import './About.css'

import sohn from '../../images/sohn.JPG'
import rui from '../../images/rui.jpg'

class About extends React.Component {
    render() {
        return (
            <section className='page-about'>
                <div className='about-card-1'>
                    <img src={sohn} alt='Dr. Sohn' />
                </div>
                <div className='about-card-2'>
                    <img src={rui} alt='Dr. Rui' />
                </div>
            </section>
        )
    }
}

export default About