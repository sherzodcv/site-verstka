import React, {Component} from 'react';
import '../styles/caruselStyle.css';
import Img1 from '../images/imgAv.jpg';
import Img2 from '../images/avatarImg.jfif';
import Img3 from '../images/ImageAvatar.png';
import Nail from '../images/nail.png';

class Carousel extends Component {
    render() {
        return (
            <>
                <section className="carousel">
                    <div className="carousel__viewport">
                        <div id="1" className="carousel__slide active">
                            <h1>Testimonials</h1>
                            <img className="nail" src={Nail} alt=""/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium
                                animi distinctio eius eligendi obcaecati quae quaerat qui temporibus! Ab assumenda
                                consectetur consequuntur deleniti ducimus eos esse hic in incidunt ipsa laboriosam
                                animi distinctio eius eligendi obcaecati quae quaerat qui temporibus! Ab assumenda
                                laborum maxime nam natus, nihil nisi nobis obcaecati officia optio quis quos ratione
                                similique sit soluta totam voluptatum?
                            </p>
                            <img src={Img1} style={{borderRadius:"50%", width:84, height:84}} alt=""/>
                            <h2>Sofia</h2>
                            <h3>Client</h3>
                        </div>
                        <div id="2" className="carousel__slide">
                            <h1>Testimonials</h1>
                            <img className="nail" src={Nail} alt=""/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium
                                consectetur consequuntur deleniti ducimus eos esse hic in incidunt ipsa laboriosam
                                similique sit soluta totam voluptatum?
                            </p>
                            <img src={Img2} style={{borderRadius:"50%", width:84, height:84}} alt=""/>
                            <h2>Anna</h2>
                            <h3>Client</h3>
                        </div>
                        <div id="3" className="carousel__slide">
                            <h1>Testimonials</h1>
                            <img className="nail" src={Nail} alt=""/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium
                                animi distinctio eius eligendi obcaecati quae quaerat qui temporibus! Ab assumenda
                                laborum maxime nam natus, nihil nisi nobis obcaecati officia optio quis quos ratione
                                similique sit soluta totam voluptatum?
                            </p>
                            <img src={Img3} style={{borderRadius:"50%", width:84, height:84}} alt=""/>
                            <h2>Amanda Smith</h2>
                            <h3>Client</h3>
                        </div>

                    </div>
                    <div className="carousel__navigation">
                        <div className="carousel__navigation-list">
                            <div className="carousel__navigation-item ">
                                <a href="#1"
                                   className="carousel__navigation-button"/>
                            </div>
                            <div className="carousel__navigation-item">
                                <a href="#2"
                                   className="carousel__navigation-button"/>
                            </div>
                            <div className="carousel__navigation-item">
                                <a href="#3"
                                   className="carousel__navigation-button"/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Carousel;