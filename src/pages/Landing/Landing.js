import React from 'react'
import './Landing.css'
import Typing from 'react-typing-animation';

class Landing extends React.Component {
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
            <section className={`page-landing ${!loading && ' page-active'}`}>
                <Typing>
                    <h1>Relax & Rejuvenate</h1>
                    <Typing.Delay ms={1500} />
                    <Typing.Backspace count={20} />
                    <h1>It's Your Day!</h1>
                    <Typing.Delay ms={1500} />
                    <Typing.Backspace count={25} />
                    <h1>My Day Spa & Wellness</h1>
                </Typing>
            </section>
        )
    }
}

export default Landing