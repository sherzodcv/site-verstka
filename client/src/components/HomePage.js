import React, {Component} from 'react';
import {FaFacebookF, FaGooglePlusG, FaPinterestP, FaShoppingCart, FaTwitter, FaYoutube} from 'react-icons/fa';
import ProgressBar from '@ramonak/react-progress-bar';
import Logo from '../images/bodyImg.png';
import GirlImage from '../images/Girl.png'
import LogoImg from '../images/LogoPinterest.png';
import Left from '../images/left.png';
import Right from '../images/right.png';
import Img1 from '../gallery/1.png';
import Img2 from '../gallery/2.png';
import Img3 from '../gallery/3.png';
import Img4 from '../gallery/4.png';
import Img5 from '../gallery/5.png';
import Img6 from '../gallery/6.png';
import Img7 from '../gallery/7.png';
import Img8 from '../gallery/8.png';
import Img9 from '../gallery/9.png';
import Img10 from '../gallery/10.png';
import Img11 from '../gallery/11.png';
import Img12 from '../gallery/12.png';
import TopLeft from '../images/pricingTopLeft.png';
import BottomRight from '../images/pricingBottomRight.png';
import Log1 from '../logos/1.png';
import Log2 from '../logos/2.png';
import Log3 from '../logos/3.png';
import Ins1 from '../feedbackIns/username.png';
import Ins2 from '../feedbackIns/email.png';
import Ins3 from '../feedbackIns/phone.png';
import Ins4 from '../feedbackIns/message.png';
import Foot1 from '../images/location.png';
import Foot2 from '../images/phone.png';
import Foot3 from '../images/letter.png';

class HomePage extends Component {
    render() {
        return (
            <>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <div className="container-fluid">
                    <section className="header">
                        <div className="row firstRow">
                            <div className="col-md-6">
                                <ul className="first-ul">
                                    <li>
                                        Free calls: (99) 911 31 81
                                    </li>
                                    <li>
                                        Opening hours: Mn-Fr: 10am-8pm
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="second-ul">
                                    <li>Ru</li>
                                    <li>En</li>
                                    <li>
                                        <FaFacebookF/>
                                    </li>
                                    <li>
                                        <FaTwitter/>
                                    </li>
                                    <li>
                                        <FaGooglePlusG/>
                                    </li>
                                    <li>
                                        <FaYoutube/>
                                    </li>
                                    <li>
                                        <FaPinterestP/>
                                    </li>
                                    <li>
                                        <FaShoppingCart/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row secondRow">
                            <div className="col-md-2"><p>Home</p></div>
                            <div className="col-md-2"><p>About</p></div>
                            <div className="col-md-2 bgImg">

                            </div>
                            <div className="col-md-2"><p>Service</p></div>
                            <div className="col-md-2"><p>Contacts</p></div>
                        </div>
                        <div className="row thirdRow">
                            <div className="col-md-6">
                                <b>
                                    Be Different with Our Nail Design
                                </b>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorem
                                    dolorum
                                    incidunt itaque laudantium maxime optio quisquam! Corporis ipsam laudantium qui
                                    repellendus, saepe voluptate?
                                </p>
                            </div>
                            <div className="col-md-6 bgColor">
                                <img src={LogoImg} alt="" style={{width: 400, height: 400}}/>
                            </div>
                        </div>
                        <div className="row fourthRow">
                            <div className="col-md-6 bodyImg">

                            </div>
                            <div className="col-md-6 textBody">
                                <p className="mainText">
                                    Why Our Clients Choose Us
                                </p>
                                <p><b>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolorem iste
                                    nemo! Hic, odit, reiciendis.
                                </b>
                                </p>
                                <p className="pt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cupiditate
                                    dolorem eius incidunt itaque nemo quasi, quibusdam quod suscipit ullam ut velit,
                                    vitae. Ab culpa facilis odit similique?
                                </p>
                                <button className="btn readBtn">READ MORE</button>
                            </div>
                        </div>
                    </section>
                    <section className="body">
                        <div className="row firstBodyRow">
                            <div className="col-md-6 firstBgImg">
                                <div className="card-group">
                                    <div className="card">
                                        <img className="firstLogo" src={Log1} alt=""
                                             style={{width: 75, height: 75}}/>
                                        <h1>Manicure</h1>
                                        <h4>Our manicure treatment stimulate nail growth and soften dry, dul
                                            skin.</h4>
                                    </div>
                                    <div className="card">
                                        <img className="secondLogo" src={Log2} alt=""
                                             style={{width: 75, height: 75}}/>
                                        <h1>Pedicure</h1>
                                        <h4>Pedicure services provide full restoration for your nails with extra
                                            polishing.</h4>
                                    </div>
                                    <div className="card">
                                        <img className="thirdLogo" src={Log3} alt=""
                                             style={{width: 75, height: 75}}/>
                                        <h1>Nail Art</h1>
                                        <h4>Let our nail artists create a stunning and sustainable nail design
                                            for you.</h4>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className="col-md-6 bgImg">
                            </div>
                        </div>
                        <div className="row secondBodyRow">
                            <div className="col-md-6 pl-0 secondBgImg">
                                <img src={Logo} alt=""/>
                            </div>
                            <div className="col-md-6">
                                <b className="boldText">Sterilization Process</b>
                                <p className="firstP">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur,
                                    cupiditate doloribus exercitationem expedita impedit ipsum magni minus numquam
                                    porro
                                    quas reiciendis, repudiandae sit, soluta tenetur unde ut veritatis vitae
                                    voluptatem
                                    voluptates. Accusamus consequatur, deleniti doloremque ducimus earum ex,
                                    exercitationem fuga hic impedit magnam maiores minima modi natus nobis, odit
                                    officiis repudiandae rerum sunt ullam veniam. Commodi esse molestiae quisquam.
                                </p>
                                <b>Guarantee</b>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam ea ipsum
                                    molestiae omnis quo soluta vitae, voluptatum? A aliquid at enim est facere ipsam
                                    modi obcaecati quis voluptates voluptatum! Corporis cum doloremque, dolorum, ea
                                    eaque esse, et eveniet fuga harum id iste libero necessitatibus nesciunt omnis
                                    perspiciatis porro quaerat recusandae repellendus sequi unde voluptate.
                                </p>
                                <div className="bgImg"/>
                            </div>
                        </div>
                        <div className="row thirdBodyRow">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={GirlImage} alt="" style={{width: 470, height: 400}}/>
                                        <h1>Mary Lucas</h1>
                                        <h2>Manicurist</h2>
                                    </div>
                                    <div className="card-footer">
                                        <h4>info@demolink</h4>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <b>Meet Our Expert</b>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem
                                    facere in
                                    maxime, qui sunt veniam! Aliquid amet consequuntur debitis rem tenetur totam.
                                    Beatae
                                    cupiditate magnam nisi sit velit! Commodi?
                                </p>
                            </div>
                        </div>
                        <div className="row fourthBodyRow">
                            <div className="col-md-12 p-0 m-0 carouselSection">
                                <img className="float-left" src={Left} alt=""/>
                                <img className="float-right" src={Right} alt=""/>
                            {/*    here in carousel*/}
                            </div>
                        </div>
                        <div className="row fifthBodyRow">
                            <img className="topLeft" src={TopLeft} alt=""/>
                            <img className="bottomRight" src={BottomRight} alt=""/>
                            <h1 className="py-4 mt-5 boldText">Special Pricing</h1>
                            <p className="py-4 textBold">
                                We provide a wide variety of affordable nail and skin treatments for you.Below <br/>
                                You can learn more about the price range of our services.
                            </p>
                            <div className="row d-flex justify-content-center m-0">
                                <div className="col-md-4 ml-3 px-5">
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="form_name"><b>Monecure</b></label>
                                            <label htmlFor="form_name" className="for">$50.00</label>
                                        </div>
                                        <p className="text-muted">60 - 100 Minute Sessions</p>
                                        <hr className=""/>
                                    </div>
                                </div>
                                <div className="col-md-4 px-5">
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="form_name"><b>Men’s Monecure</b></label>
                                            <label htmlFor="form_name" className="for">$40.00</label>
                                        </div>
                                        <p className="text-muted">60 - 100 Minute Sessions</p>
                                        <hr className=""/>
                                    </div>
                                </div>
                                <div className="col-md-4 px-5 ml-3">
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="form_name"><b>Design</b></label>
                                            <label htmlFor="form_name" className="for">$5.00</label>
                                        </div>
                                        <p className="text-muted">30 - 40 Minute Sessions</p>
                                        <hr className=""/>
                                    </div>
                                </div>
                                <div className="col-md-4 px-5">
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="form_name"><b>Correction growing</b></label>
                                            <label htmlFor="form_name" className="for">$70.00</label>
                                        </div>
                                        <p className="text-muted">30 - 40 Minute Sessions</p>
                                        <hr className=""/>
                                    </div>
                                </div>
                                <div className="col-md-4 px-5 ml-3">
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="form_name"><b>Changing previous</b></label>
                                            <label htmlFor="form_name" className="for">$5.00 - 10.00</label>
                                        </div>
                                        <p className="text-muted">40 - 60 Minute Sessions</p>
                                        <hr className=""/>
                                    </div>
                                </div>
                                <div className="col-md-4 px-5">
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="form_name"><b>Narasheniya</b></label>
                                            <label htmlFor="form_name" className="for">$70.00</label>
                                        </div>
                                        <p className="text-muted">40 - 60 Minute Sesiions</p>
                                        <hr className=""/>
                                    </div>
                                </div>
                                <div className="col-md-4 px-5 ml-3">
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between">
                                            <label form="form_name"><b>Gel</b></label>
                                            <label form="form_name" className="for">$65.00</label>
                                        </div>
                                        <p className="text-muted">90 - 120 Minute Sessions</p>
                                        <hr className=""/>
                                    </div>
                                </div>
                                <div className="col-md-4 px-5">
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between">
                                            <label form="form_name"><b>remont odnova
                                                nogatyam</b></label>
                                            <label form="form_name" className="for">$8.00</label>
                                        </div>
                                        <p className="text-muted">90 - 120 Minute Sesiions</p>
                                        <hr className=""/>
                                    </div>
                                </div>
                                <div className="col-md-4 px-5 ml-3">
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between">
                                            <label form="form_name"><b>akrepleniya</b></label>
                                            <label form="form_name" className="for">$5.00</label>
                                        </div>
                                        <p className="text-muted">90 - 120 Minute Sesiions</p>
                                        {/*<hr className=""/>*/}
                                    </div>
                                </div>
                                <div className="col-md-4 px-5">

                                </div>
                            </div>
                        </div>
                        <div className="row sixthBodyRow">
                            <div className="col-md-12">
                                <h1>
                                    Gallery of Our Work
                                </h1>
                            </div>

                            <div className="col-md-5">
                                <img src={Img1} alt="" style={{width: 229, height: 422}}/>
                                <img src={Img2} alt="" style={{width: 229, height: 422, marginLeft: "55px"}}/>
                            </div>
                            <div className="col-md-3">
                                <img src={Img3} alt="" style={{width: 416, height: 422, paddingRight: "40px"}}/>
                            </div>
                            <div className="col-md-4 dFlex">
                                <img src={Img4} alt="" style={{width: 383, height: 190, marginBottom: "28px"}}/>
                                <img src={Img5} alt="" style={{width: 383, height: 190}}/>
                            </div>
                            <div className="col-md-3">
                                <img src={Img6} alt="" style={{width: 448, height: 432, paddingLeft: "42px"}}/>
                            </div>
                            <div className="col-md-5">
                                <img src={Img7} alt=""
                                     style={{width: 256, height: 431, marginLeft: "90px", paddingRight: "20px"}}/>
                                <img src={Img8} alt="" style={{width: 218, height: 432, marginLeft: "35px"}}/>
                            </div>
                            <div className="col-md-4">
                                <img src={Img9} alt="" style={{width: 373, height: 431, marginLeft: "10px"}}/>
                            </div>
                            <div className="col-md-4">
                                <img src={Img10} alt=""
                                     style={{width: 437, height: 374, marginLeft: "20px", paddingLeft: "15px"}}/>
                            </div>
                            <div className="col-md-4">
                                <img src={Img11} alt="" style={{width: 478, height: 380, paddingBottom: "5px"}}/>
                            </div>
                            <div className="col-md-4">
                                <img src={Img12} alt="" style={{width: 373, height: 380, paddingBottom: "5px"}}/>
                            </div>
                        </div>
                        <div className="row seventhBodyRow">
                            <div className="col-md-6 p-0">
                                <div style={{width: "100%"}}>
                                    <iframe title="iframe" width="100%" height="749" frameBorder="2" scrolling="no"
                                            marginHeight="0"
                                            marginWidth="0"
                                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tashkent+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                                </div>
                            </div>
                            <div className="col-md-6 feedbackCol">
                                <h1>Get In Touch <br/>
                                    <ProgressBar className="progressLine" variant="success" completed={13}
                                                 bgcolor="#FFD8CB" labelColor="transparent"
                                                 baseBgColor="transparent"
                                                 borderRadius="0" height="3px"/>
                                </h1>
                                <h5>Have any questions? Feel free to use the contact from below to got in touch with
                                    us.
                                    We will answer you as soon as possible!</h5>
                                <div className="form mb-3">
                                    <input type="text"
                                           autoComplete="on" required/>
                                    <label className="label-name">
                                        <span className="content-name">
                                            <img src={Ins1} style={{width: 33, height: 33}} alt=""/>
                                            Username</span>
                                    </label>
                                </div>
                                <div className="form mb-3">
                                    <input type="text"
                                           autoComplete="on" required/>
                                    <label className="label-name">
                                        <span className="content-name">
                                            <img src={Ins2} style={{width: 33, height: 33}} alt=""/>
                                            Your Email</span>
                                    </label>
                                </div>
                                <div className="form mb-3">
                                    <input type="text"
                                           autoComplete="on" required/>
                                    <label className="label-name">
                                        <span className="content-name">
                                            <img src={Ins3} style={{width: 33, height: 33}} alt=""/>
                                            Your Phone</span>
                                    </label>
                                </div>
                                <div className="form messageForm mb-3">
                                    <input type="text"
                                           autoComplete="on" required/>
                                    <label className="label-name">
                                        <span className="content-name">
                                            <img src={Ins4} style={{width: 33, height: 33}} alt=""/>
                                            Your Message</span>
                                    </label>
                                </div>
                                <button className="btn sendFeedback">Send Message</button>
                            </div>
                        </div>
                    </section>
                    <section className="footer">
                        <div className="row firstRowFooter">
                            <div className="col-md-2">
                                <h1>About us <br/>
                                    <ProgressBar className="progressLine" variant="success" completed={30}
                                                 margin="10px 0"
                                                 bgcolor="#FFD8CB" labelColor="transparent"
                                                 baseBgColor="transparent"
                                                 borderRadius="0" height="3px"/>
                                </h1>
                                <h4 style={{opacity: "0.5"}}>
                                    Allamaroza Nail Salon has been offering an extensive range of nail services and
                                    skin
                                    treatments since 1999
                                </h4>
                            </div>
                            <div className="col-md-2">
                                <h1>Recent Photos <br/>
                                    <ProgressBar className="progressLine" variant="success" completed={30}
                                                 margin="10px 0"
                                                 bgcolor="#FFD8CB" labelColor="transparent"
                                                 baseBgColor="transparent"
                                                 borderRadius="0" height="3px"/>
                                </h1>
                                <h4>
                                    Top 5 reasons to Visit the Nearest <br/>
                                    Nail Salon <br/>
                                    <i>June 10, 2018/3 Comments <br/></i>
                                    <br/>
                                    One Day from the Life of a Nail <br/>
                                    Artist <br/>
                                    <i>June 12, 2018/3 Comments</i>
                                </h4>
                            </div>
                            <div className="col-md-2">
                                <h1>Opening Hours <br/>
                                    <ProgressBar className="progressLine" variant="success" completed={30}
                                                 margin="10px 0"
                                                 bgcolor="#FFD8CB" labelColor="transparent"
                                                 baseBgColor="transparent"
                                                 borderRadius="0" height="3px"/>
                                </h1>
                                <h4>
                                    Mon-Fri: 9 am - 6 am <br/>
                                    Saturday: 9 am - 4 pm <br/>
                                    Sunday: Closed
                                </h4>
                            </div>
                            <div className="col-md-2">
                                <h1>Contact Information<br/>
                                    <ProgressBar className="progressLine" variant="success" completed={30}
                                                 margin="10px 0"
                                                 bgcolor="#FFD8CB" labelColor="transparent"
                                                 baseBgColor="transparent"
                                                 borderRadius="0" height="3px"/>
                                </h1>
                                <h4>
                                    <img src={Foot1} alt="" style={{width: "25px", height: "25px"}}/> Washington,
                                    USA <br/>
                                    <img src={Foot2} alt="" style={{width: "25px", height: "25px"}}/> (99) 911 31
                                    81<br/>
                                    <img src={Foot3} alt=""
                                         style={{width: "25px", height: "25px"}}/> info@demolink.org
                                </h4>
                            </div>
                        </div>
                        <div className="row secondRowFooter">
                            <div className="col-md-4">
                                <img src={LogoImg} style={{width: 126, height: 126}} alt=""/>
                            </div>
                            <div className="col-md-4">
                                <h1>2020 All Rights Reserved Privacy Policy</h1>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li>
                                        <FaFacebookF/>
                                    </li>
                                    <li>
                                        <FaTwitter/>
                                    </li>
                                    <li>
                                        <FaGooglePlusG/>
                                    </li>
                                    <li>
                                        <FaYoutube/>
                                    </li>
                                    <li>
                                        <FaPinterestP/>
                                    </li>
                                    <li>
                                        <FaShoppingCart/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default HomePage;