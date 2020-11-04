import React from 'react';
import './TrainingItem.css';

class TrainingItem extends React.Component {
    constructor(props) {
        super(props);        
    }

    handleOnChange = (event) => {        
        this.props.handleChange(this.props.itemKey, event.target.checked);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='cartItem col-3'>
                        <h5>{this.props.name}</h5>
                        <img src={this.props.imgURL} alt={this.props.name}/>
                    </div>
                    <div className='col-5'>
                        {this.props.description}
                    </div>
                    <div className='col-3'>
                        <label htmlFor="addToCart">{this.props.isSelected ? "In cart" : "Add to cart"}</label>
                        <input type="checkbox" id="addToCart" checked={this.props.isSelected} onChange={this.handleOnChange}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrainingItem;