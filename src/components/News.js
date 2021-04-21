import React from 'react';
import {Carousel} from 'react-bootstrap'; 
import './news.css';

function News() {
    return (
        <div>
            <div >
            <Carousel >
                <Carousel.Item>
                    <img className='carousel'
                    src="https://cdn.pizap.com/pizapfiles/images/photo_backgrounds_textures_app05.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='carousel'
                    src="https://cdn.pizap.com/pizapfiles/images/photo_backgrounds_textures_app05.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='carousel'
                    src="https://cdn.pizap.com/pizapfiles/images/photo_backgrounds_textures_app05.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>                
        </div>
    );
}

export default News;