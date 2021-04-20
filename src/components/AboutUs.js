import React from 'react';
import {Row, Col, Carousel} from 'react-bootstrap';
import './AboutUs.css';

function About() {
    return (
        <div className='bg_img'>
            <div className='heading'> 
                <h2>ABOUT US </h2>
            </div>
            
            <div>
                <Row>
                    <Col lg= {6} style={{color: 'black'}}>
                        <div className='txt'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem neque, sodales a consequat et, volutpat ac mi. Nunc sit amet rhoncus elit. Aenean fringilla a dolor eu tincidunt. Nulla dignissim gravida lectus vel sodales. Vivamus laoreet arcu et cursus efficitur. Phasellus fringilla consectetur lacinia. Vivamus maximus elit sed metus volutpat, sit amet vestibulum lectus laoreet. Aliquam sed magna lobortis, varius erat vel, consectetur sapien. Vivamus sagittis maximus nulla at maximus. Donec ac ipsum ligula. Donec ultrices tortor et lorem dapibus, vitae gravida lacus malesuada. Cras mollis diam eget nisl scelerisque, sit amet mattis quam dictum. Praesent eget aliquet neque.
                        </div>
                    </Col>
                    <Col lg={5} >
                        <Carousel>
                            <Carousel.Item>
                                <div className="about_img">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GFS5sbybBw9U2cbkuRCua28iV_CbgCNl8w&usqp=CAU' alt="img" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default About;