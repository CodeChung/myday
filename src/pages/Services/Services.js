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
        console.log(window.location.href)
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
            <div className='service-container'>
                <section className={`page-services ${!loading && ' page-active'}`}>
                    <div className='services'>
                        <h1>Services</h1>
                        <ul>
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
                                Massages
                            <div class="checkbox-container">
                                    <label class="checkbox-label">
                                        <input onClick={() => this.toggleIcon('massage')} type="checkbox" />
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
                        <a href="https://www.picktime.com/6c44a31a-e8bc-4155-9af7-2faa231db4a1" className="ptbkbtn" rel="noopener noreferrer" target="_blank" ><img border="none" src="https://www.picktime.com/bookingPage/img/picktime-book-online.png" alt="Book an appointment with My Day Spa" /></a>
                        <ServiceIcons />
                    </div>
                    <div className="service-text">
                        <h2>Acupuncture / Electro Acupuncture</h2>
                        <p>Acupuncture, among the oldest healing practices in the world, is part of traditional Asian
medicine. Acupuncture practitioners stimulate specific points on the body—most often
by inserting thin needles through the skin. In traditional Korean medicine theory, this
regulates the flow of vital energy along pathways known as meridians.</p>
                        <h2 className='modalities'>Modalities</h2>
                        <p>Myofascial release, trigger point therapy, or acupressure. Cupping / Moxibustion.</p>
                    </div>
                </section>
                <section className="massage-menu">
                    <h2>Massage Menu</h2>
                    <ul className="massage-list">
                        <li>
                            <h4>Swedish</h4>
                            <p>The invigorating massage technique using elbows and forearms to work on deeper
tissues. Result is a profound relief from muscle tightness.</p>
                        </li>
                        <li>
                            <h4>Deep Tissue</h4>
                            <p>Deep tissue massage usually focuses on a specific problem, such as chronic muscle
pain, injury rehabilitation, and the following conditions:chronic pain.lower back
pain.tennis elbow.limited mobility.</p>
                        </li>
                        <li>
                            <h4>Combination</h4>
                            <p>The muscle-soothing flow of Swedish massage and our special oil, coupled with the
chi-balancing power of Shiatsu's finger pressure.</p>
                        </li>
                        <li>
                            <h4>Foot Reflexology</h4>
                            <p>This ancient massage is believed to help promote oxygenation of tissues of several
major organs of the body by focusing on the reflex zones of the feet that correspond to
them. Other benefits include improved circulation, ease of pain.</p>
                        </li>
                        <li>
                            <h4>Warm Oil Massage</h4>
                            <p>This ancient massage is believed to help promote oxygenation of tissues of several
major organs of the body by focusing on the reflex zones of the feet that correspond to
them. Other benefits include improved circulation, ease of pain.</p>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Services