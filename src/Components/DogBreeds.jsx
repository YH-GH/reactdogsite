import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'

class DogBreeds extends React.Component {

    render() {
        return (
            <Carousel>
                <Carousel.Item interval={500}>
                    <img src="la.jpg" alt="Chania"/> 
                    <Carousel.Caption>
                        <p>China is always so much fun!</p> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src="la.jpg" alt="Alabama"/> 
                    <Carousel.Caption>
                        <p>Alabama is always so much fun!</p> 
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default DogBreeds;