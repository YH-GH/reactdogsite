import React from 'react';
import tipsData from '../tipsData.json';
import Carousel from 'react-bootstrap/Carousel';
import './Tips.css';

class Tips extends React.Component {
    constructor(props) {
        super(props);
        const distinctCategories = [...new Set(tipsData.map(tipData =>
            tipData.category))];
        
            this.state = {
                tipsData,
                categories: distinctCategories,
                currCategory: distinctCategories[0],
                behaviorDesc: this.getBehaviorDesc(distinctCategories[0])
        }
    }

    handleSelectionChange = (event) => {        
        this.setState({
            currCategory: event.target.value
        });
    }

    getBehaviorDesc(category) {
        switch (category) {
            case "Separation anxiety":
                return "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet cumque quidem qui nulla, explicabo suscipit odio neque ratione ipsum deserunt. Excepturi sequi dicta libero mollitia ea amet, ab aliquid vero."
            case "Barking":
                return "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto laudantium nam aperiam libero doloribus quidem perferendis cumque, magni illo esse a. Illo reprehenderit numquam in nulla! Nisi saepe in dicta?";

        }
    }

    render() {
        const selectOptions = this.state.categories.map(cat =>
            <option>{cat}</option>);

        const displayItems = this.state.tipsData.filter(tipData => 
            tipData.category === this.state.currCategory)
            .map((tipData,idx) =>
            <Carousel.Item key={idx} interval={4500}>                
                <p className="tip">{tipData.tip}</p>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>);


        return (
            <div className="container=fluid">
                <div className="row">
                    <div className="col-9">
                        <select name="Dog Behavior" onChange={this.handleSelectionChange}>
                            {selectOptions}
                        </select>
                        <Carousel>
                            {displayItems}
                        </Carousel>
                        <div className="descBg">
                            <p className="descText">{this.state.behaviorDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Tips;