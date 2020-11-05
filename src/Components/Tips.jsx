import React from 'react';
import tipsData from '../tipsData.json';
import catDescData from '../tipCategoryDesc.json';
import Carousel from 'react-bootstrap/Carousel';
import './Tips.css';

class Tips extends React.Component {
    constructor(props) {
        super(props);
        const distinctCategories = [...new Set(tipsData.map(tipData =>
            tipData.category))];
        
            this.state = {
                tipsData,
                catDescData,
                categories: distinctCategories,
                currCategory: distinctCategories[0],
                currCategoryDesc: catDescData[0].desc
        }
    }

    handleSelectionChange = (event) => {        
        const currCategoryDesc = this.state.catDescData.filter(categoryData =>
            categoryData.category === event.target.value)[0].desc;
        console.log(currCategoryDesc);
        this.setState({
            currCategory: event.target.value,
            currCategoryDesc
        });
    }

    render() {
        const selectOptions = this.state.categories.map(cat =>
            <option>{cat}</option>);

        const displayItems = this.state.tipsData.filter(tipData => 
            tipData.category === this.state.currCategory)
            .map((tipData,idx) =>
            <Carousel.Item key={idx} interval={3000}>                
                <p className="tip">{tipData.tip}</p>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>);


        return (
            <div className="container=fluid">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-9">
                        <select name="Dog Behavior" onChange={this.handleSelectionChange}>
                            {selectOptions}
                        </select>
                        <div className="descBg">
                            <p className="descText">{this.state.currCategoryDesc}</p>
                        </div>
                        <Carousel>
                            {displayItems}
                        </Carousel>
                    </div>
                </div>
            </div>
        );

    }
}

export default Tips;