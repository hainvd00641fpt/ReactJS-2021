import { Component } from "react";

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    onAddToCart() {
            alert(this.props.name);
    }


    render() {
        return (
            <div className="lg:w-1/4 md:w-1/2 m-4 p-4 w-1/5 border border-indigo-600 ">
                <a href="!#" className="block relative h-48 rounded overflow-hidden">
                    <img alt={this.props.name} className="object-cover object-center w-full h-full block" src={this.props.image} />
                </a>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{this.props.name}</h2>
                    <p className="mt-1">{this.props.price}</p>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={ this.onAddToCart }>Mua ngay</button>
                </div>
            </div>
        )
    }
}
