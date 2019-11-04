import React from 'react'
import { TiPhoneOutline } from 'react-icons/ti'
import { GoMailRead } from 'react-icons/go'
import { FaYelp} from 'react-icons/fa'
import './Contact.css'

class Contact extends React.Component {
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
            <section className={`page-contact ${!loading && ' page-active'}`}>
                <div className='contact-icons'>
                    <div className='phone contact-icon'>
                        <h2>Phone</h2>
                        <TiPhoneOutline className='contact-icon-img' />
                        (818) 877-9777
                    </div>
                    <div className='email contact-icon contact-middle'>
                        <h2>Email</h2>
                        <GoMailRead className='contact-icon-img' />
                        mydayspaca@gmail.com
                    </div>
                    <div className='yelp contact-icon'>
                        <h2>Yelp</h2>
                        <FaYelp className='contact-icon-img' />
                        <a 
                            rel="noopener noreferrer"
                            href='https://www.yelp.com/biz/my-day-spa-and-wellness-calabasas-5' 
                            target='_blank'>Yelp Page</a>
                    </div>
                </div>
                <div className='contact-block'>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="500" 
                                height="400" id="gmap_canvas" 
                                src="https://maps.google.com/maps?q=26787%20Agoura%20Rd%20Ste%20E7%20Calabasas%2C%20CA%2091302&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                frameborder="0" scrolling="no" 
                                marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                    <div className='hours'>
                        <h3>Hours of Operations</h3>
                        <ul>
                            <li>Sunday: 10:00 AM - 9:00 PM</li>
                            <li>Monday: 10:00 AM - 9:00 PM</li>
                            <li>Tuesday: 10:00 AM - 9:00 PM</li>
                            <li>Wednesday: 10:00 AM - 9:00 PM</li>
                            <li>Thursday: 10:00 AM - 9:00 PM</li>
                            <li>Friday: 10:00 AM - 9:00 PM</li>
                            <li>Saturday: 10:00 AM - 9:00 PM</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact