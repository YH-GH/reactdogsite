import React from 'react';
import TrainingItem from './TrainingItem';
import {getAllCartItems, addCartItem, removeCartItem, clearCart} from '../Utils/shopItemsRepository.js';
import './TrainingAccessoriesShop.css';

class TrainingAccessoriesShop extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckItem = this.handleCheckItem.bind(this);
        this.state = {
            cart: getAllCartItems(),
            items: [
                {
                    key: "whistle",
                    name: "Dog Whistle",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae cumque itaque natus amet incidunt, libero ab similique laudantium omnis perferendis temporibus dolores illum qui alias ut doloribus exercitationem, sapiente sequi.",
                    imgURL: "https://imgaz1.staticbg.com/thumb/other_items/oaupload/banggood/images/27/EF/7857f341-dc85-4b89-bf42-7d7d204835c2.jpg.webp",
                },
                {
                    key: "clicker",
                    name: "Clicker",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum pariatur eos provident debitis reprehenderit porro optio. Eveniet mollitia facilis voluptates nam! Adipisci rem dolorum mollitia, a consequatur in perferendis fugiat?",
                    imgURL: "https://static.miscota.com/media/1/photos/products/072354/72354-4011905228600hdfh_1_g.jpg",
                },
                {
                    key:"barkingrepeller",
                    name: "Barking Repller",
                    description: "Ultrasonic anti barking device",
                    imgURL: "https://ae01.alicdn.com/kf/H0bb984f744514637bc357ae866cce289P/Ultrasonic-Anti-Barking-Device-Dog-Training-Equipment-Outdoor-Waterproof-Dog-Repeller-Stop-Bark-Dogs-Accessories-Pet.jpg"
                },
                {
                    key:"",
                    name:"",
                    description: ""
                }
            ]
        };
    }
    
    handleCheckItem(key,isSelected) {      
        const item = this.state.items.filter(item => item.key === key)[0];
        console.log("items:",this.state.items,",item:",item);

        if (isSelected) {            
            addCartItem(item);
        } else {
            //unselected
            removeCartItem(key);
        }

        this.setState({
            cart: getAllCartItems()
        });
    }

    handleClearCart() {
        clearCart();
        this.setState({
            cart: getAllCartItems()
        });
    }

    render() {
        const displayItems = this.state.items.map(item => {
            // console.log("in cart?",this.state.cart.filter(cartItem => cartItem.key === item.key).length > 0);
            return (        
                <TrainingItem
                    key={item.key} 
                    itemKey={item.key}
                    name={item.name}
                    description={item.description}
                    imgURL={item.imgURL}
                    isSelected={this.state.cart.filter(cartItem => cartItem.key === item.key).length > 0}
                    handleChange={this.handleCheckItem}/>);
            });
        
        return (
            <div>
                {displayItems}
                <button id="btnClear" onClick={() => this.handleClearCart()}>Empty shopping cart</button>
            </div>
        );
    }
}

export default TrainingAccessoriesShop;