import React from 'react'
import './About.css'
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper'

import sohn from '../../images/sohn.JPG'
import rui from '../../images/rui.jpg'
import rating from '../../images/rating.png'

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
        const params = {
            slidesPerView: 3,
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        }
        return (
            <section className={`page-about ${!loading && ' page-active'}`}>
                <div className='about-card'>
                    <img className='bio-img' src={sohn} alt='Dr. Sohn' />
                    <div className='about-desc'>
                        <h2>TOMMY JEHUN SOHN, <br /> LAC, PHD</h2>
                        <p>Tommy has been practicing Acupuncture and Asian medicine for more than 10 years in Westlake Village, CA.</p>
                        <p>He graduated from Liaoning Traditional Medical University in 1997, After he graduated, he practiced acupuncture, traditional massage, herbal medicine, and Qi gong as a doctor.</p>
                        <p>His mission is to provide the best quality service to his patients.</p>
                        <h3>Education</h3>
                        <ul>
                            <li>CA Acupuncture Board Certified Acupuncturist</li>
                            <li>Liaoning University of Traditional Medicine<br />-<b>Bachelor's Degree in Traditional Medicine</b></li>
                            <li>South Baylor University<br />-<b>Master of Science in Acupuncture and Oriental Medicine</b></li>
                            <li>American Liberty University<br />-<b>Doctor of Philosophy in Oriental Medicine</b></li>
                        </ul>
                    </div>
                </div>
                <div className='swiper-container'>
                    <h2>Testimonials</h2>
                    <Swiper {...params}>
                        <div className='about-swipe'>
                            <h2>Stacey E.</h2>
                            <div className='swipe-img'>
                                <img src='https://s3-media0.fl.yelpcdn.com/photo/O2_rYyR5IVak57gXPRNtPw/120s.jpg' alt='yelp review' />
                            </div>
                            <div className='swipe-rating'>
                                <img src={rating} alt='rating' />
                            </div>
                            <div className='swipe-text'>
                                "My Day Spa is a truly lovely place and we are happy to have it in our neighborhood. The facility is clean, quiet, well decorated and maintained.
                                The women who work there are professional, nice and helpful. My mom and I went in on a Sunday for a massage and a facial, each. 2 hours of pure heaven!!!..."
                            </div>
                        </div>
                        <div className='about-swipe'>
                            <h2>Dr Ramin M.</h2>
                            <div className='swipe-img'>
                                <img src='https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png' alt='yelp review' />
                            </div>
                            <div className='swipe-rating'>
                                <img src={rating} alt='rating' />
                            </div>
                            <div className='swipe-text'>
                                "I saw the the advertisement at the nail salon and I decided to walk in and check the place, even though I didn't have an appointment she accepted to take me in. I do get massages very frequently at different places, but Rui is something else . She is super nice , very professional and knows what she is doing . She doesn't rush u and hits spots perfectly"
                            </div>
                        </div>
                        <div className='about-swipe'>
                            <h2>Jessica R.</h2>
                            <div className='swipe-img'>
                                <img src='https://s3-media0.fl.yelpcdn.com/photo/SV7bM-Ef8kUWtC-XaEEb9A/120s.jpg' alt='yelp review' />
                            </div>
                            <div className='swipe-rating'>
                                <img src={rating} alt='rating' />
                            </div>
                            <div className='swipe-text'>
                                "This review is for the Acupuncturist Tommy. This guy really knows his stuff. He spends time listening to you and even more time doing an assessment. He has many years experience which was very important to me. I have seen him several times now and am already on my way to feeling better. I've used several different acupuncturists and feel like I've finally found one I can stick with!"
                            </div>
                        </div>
                        <div className='about-swipe'>
                            <h2>Thomas L.</h2>
                            <div className='swipe-img'>
                                <img src='https://s3-media0.fl.yelpcdn.com/photo/_je5SGziMG1mUQeqBem6xg/120s.jpg' alt='yelp review' />
                            </div>
                            <div className='swipe-rating'>
                                <img src={rating} alt='rating' />
                            </div>
                            <div className='swipe-text'>
                                "This massage place has the best decorations in the town (not like other massage places, dark, crowded). Everything is brand new and organized. Recommend!"
                            </div>
                        </div>
                        <div className='about-swipe'>
                            <h2>Eli A.</h2>
                            <div className='swipe-img'>
                                <img src='https://s3-media0.fl.yelpcdn.com/photo/_riYfFV2LoqclUb3fv6Mbg/120s.jpg' alt='yelp review' />
                            </div>
                            <div className='swipe-rating'>
                                <img src={rating} alt='rating' />
                            </div>
                            <div className='swipe-text'>
                                "This new spa is a must go ! Enjoyed every moment of my one hour massage. Very relaxing. Will definitely come back!"
                            </div>
                        </div>
                        <div className='about-swipe'>
                            <h2>Crystal K.</h2>
                            <div className='swipe-img'>
                                <img src='https://s3-media0.fl.yelpcdn.com/photo/_riYfFV2LoqclUb3fv6Mbg/120s.jpg' alt='yelp review' />
                            </div>
                            <div className='swipe-rating'>
                                <img src={rating} alt='rating' />
                            </div>
                            <div className='swipe-text'>
                                "This new spa is a must go ! Enjoyed every moment of my one hour massage. Very relaxing. Will definitely come back!"
                            </div>
                        </div>
                    </Swiper>
                </div>
            </section>
        )
    }
}

export default About