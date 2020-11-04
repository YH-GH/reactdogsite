import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';
import './DogBreeds.css';

class DogBreeds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allImgURLs:["https://images.dog.ceo/breeds/germanshepherd/n02106662_24577.jpg"]
        };
    }
    
    async componentDidMount() {
        // this.state.intervalId = setInterval(async ()=> {
        //     const result = await axios.get("https://dog.ceo/api/breeds/image/random");
        //     const randImgURL = result.data.message;

        //     this.setState(prev => ({
        //             allImgURLs: prev.allImgURLs.includes(randImgURL) ? prev.allImgURLs : prev.allImgURLs.concat(randImgURL) 
        //         })
        //     )
        // }, 3200);                
        let imgs=[];
        for (let i=0;i < 20;i++) {
            const result = await axios.get("https://dog.ceo/api/breeds/image/random");
            const randImgURL = result.data.message;
            if (imgs.includes(randImgURL) == false) {
                imgs.push(result.data.message);
            }
        }

        this.setState({
            allImgURLs: imgs
        });
    }

    // componentWillUnmount() {
    //     clearInterval(this.state.intervalId);
    // }


    render() { 
        const displayItems = this.state.allImgURLs.map(imgURL => {
                //example: https://images.dog.ceo/breeds/dhole/n02115913_1323.jpg
                const breed = imgURL.replace("https://images.dog.ceo/breeds/","").split('/')[0];
                console.log("breed:",breed);
                return (
                    <Carousel.Item interval={2000} key={imgURL}>
                        <img className="dogBreedImg" src={imgURL} alt="random breed"/> 
                        <Carousel.Caption>
                            {breed}
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            }
        );
        
        return (
            <div>
                <Carousel>
                    {displayItems}
                </Carousel>
            </div>
        );
    }
}

export default DogBreeds;