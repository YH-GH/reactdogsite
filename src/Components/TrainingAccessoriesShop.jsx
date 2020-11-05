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
                    description: "Used during dog training, usually coupled with clickers and treats to signal to the dog that he had performed a task correctly. The noise will likely grab a dog's attention",
                    imgURL: "https://imgaz1.staticbg.com/thumb/other_items/oaupload/banggood/images/27/EF/7857f341-dc85-4b89-bf42-7d7d204835c2.jpg.webp",
                },
                {
                    key: "clicker",
                    name: "Clicker",
                    description: "A tool that can make positive reinforcement training more efficient. After being repeatedly associated with a treat or reward, a clicker becomes a conditioned reinforcer",
                    imgURL: "https://static.miscota.com/media/1/photos/products/072354/72354-4011905228600hdfh_1_g.jpg",
                },
                {
                    key:"barkingrepeller",
                    name: "Barking Repller",
                    description: "Ultrasonic anti barking device",
                    imgURL: "https://ae01.alicdn.com/kf/H0bb984f744514637bc357ae866cce289P/Ultrasonic-Anti-Barking-Device-Dog-Training-Equipment-Outdoor-Waterproof-Dog-Repeller-Stop-Bark-Dogs-Accessories-Pet.jpg"
                },
                {
                    key:"dinnerbell",
                    name:"Dog Dinner-Bell",
                    description: "When the dog presses the bell he may get rewards and praises, just repeated practice, and it can improve the feelings with the lovely pet. It will be a neat trick for potty training",
                    imgURL: "https://i3.wp.com/ae01.alicdn.com/kf/HTB1TDMxL9zqK1RjSZFpq6ykSXXaC/Pet-Dog-Training-Cat-Dinner-Bell-Dog-Toys-Bell-Call-Training-Accessories-Puppy-Feeding-Ring-Trolling.jpg_640x640.jpg"

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
                <button className="btnClear" onClick={() => this.handleClearCart()} disabled={this.state.cart.length === 0}>
                    <div className="btnText">
                        Empty shopping cart
                    </div>
                    <div className="btnImg">
                    </div>
                </button>
                {displayItems}
            </div>
        );
    }
}

export default TrainingAccessoriesShop;