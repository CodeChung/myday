import React from 'react'
import './Landing.css'
import Typing from 'react-typing-animation';

class Landing extends React.Component {
    render() {
        return (
            <section className='page-landing'>
                <Typing>
                    <h1>Relax & Rejuvenate</h1>
                    <Typing.Delay ms={1500} />
                    <Typing.Backspace count={20} />
                    <h1>It's Your Day!</h1>
                    <Typing.Delay ms={1500} />
                    <Typing.Backspace count={25} />
                    <h1>My Day Spa and Wellness</h1>
                </Typing>
            </section>
        )
    }
}

export default Landing