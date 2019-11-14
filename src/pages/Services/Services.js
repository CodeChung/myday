import React from 'react'
import ServiceIcons from './ServiceIcons'
import './Services.css'
import flyer from '../../images/services.jpg'

class Services extends React.Component {
    state = {
        loading: true,
        icons: {
            massage: false,
            acupuncture: false,
            makeup: false,
            wax: false,
            skin: false,
        }
    }
    componentDidMount() {
        setTimeout(this.toggle, 200)
    }
    toggle = () => {
        this.setState({ loading: !this.state.loading })
    }
    toggleIcon = (type) => {
        const { icons } = this.state
        icons[type] = !icons[type]
        this.setState({ icons })
    }
    render() {
        const { loading } = this.state
        return (
            <section className={`page-services ${!loading && ' page-active'}`}>
                <div className='services'>
                    <h1>Services</h1>
                    <ul>
                        <li>
                            Massages         
                            <div class="checkbox-container">
                            <label class="checkbox-label">
                                <input onClick={() => this.toggleIcon('massage')} type="checkbox" />
                                <span class="checkbox-custom rectangular"></span>
                            </label>
                            </div>
                        </li>
                        <li>
                            Acupuncture         
                            <div class="checkbox-container">
                            <label class="checkbox-label">
                                <input onClick={() => this.toggleIcon('acupuncture')} type="checkbox" />
                                <span class="checkbox-custom rectangular"></span>
                            </label>
                            </div>
                        </li>
                        <li>
                            Permanent Make Up        
                            <div class="checkbox-container">
                            <label class="checkbox-label">
                                <input onClick={() => this.toggleIcon('makeup')} type="checkbox" />
                                <span class="checkbox-custom rectangular"></span>
                            </label>
                            </div>
                        </li>
                        <li>
                            Waxing       
                            <div class="checkbox-container">
                            <label class="checkbox-label">
                                <input onClick={() => this.toggleIcon('wax')} type="checkbox" />
                                <span class="checkbox-custom rectangular"></span>
                            </label>
                            </div>
                        </li>
                        <li>
                            Skin Care Products        
                            <div class="checkbox-container">
                            <label class="checkbox-label">
                                <input onClick={() => this.toggleIcon('skin')} type="checkbox" />
                                <span class="checkbox-custom rectangular"></span>
                            </label>
                            </div>
                        </li>
                    </ul>
                    <a href="https://www.picktime.com/6c44a31a-e8bc-4155-9af7-2faa231db4a1" className="ptbkbtn" target="_blank" ><img border="none" src="https://www.picktime.com/bookingPage/img/picktime-book-online.png" alt="Book an appointment with My Day Spa"/></a>
                    <ServiceIcons />
                </div>
                <img src={flyer} alt='promo' />
            </section>
        )
    }
}

export default Services