import React, { Component } from 'react'
import Product from './Product'

export default class Content extends Component {

    onClick() {
        console.log('test');
    }

    onAddCart = () => {
        console.log(this.refs.name.value);
    }

    render() {

        const ListProduct = [
            {
                id : 1,
                name : 'Samsung Tab S7',
                price: 17000000,
                status: true,
                image: 'https://cdn.tgdd.vn/Files/2020/08/11/1278876/samsung-ra-mat-bo-doi-galaxy-tab-s7-va-tab-s7--ma-7.jpg'
            },
            {
                id : 2,
                name : 'Samsung Tab S7 Plus',
                price: 21000000,
                status: true,
                image: 'https://www.powerplanetonline.com/cdnassets/samsung_galaxy_tab_s7_plus_t970_128gb_wifi_plata_01_l.jpg'
            },
            {
                id : 3,
                name : 'Samsung Tab S6',
                price: 140000000,
                status: true,
                image: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2019/08/galaxy-tab-s6-ra-mat-0.jpg'
            },
            {
                id : 4,
                name : 'Samsung Tab S6 Lite',
                price: 7000000,
                status: true,
                image: 'https://phucanhcdn.com/media/product/38901_p615_xanh.png'
            },
            {
                id : 5,
                name : 'Samsung Tab S8',
                price: 22000000,
                status: false,
                image: 'https://i.ytimg.com/vi/6Ga-Pw4if98/maxresdefault.jpg'
            },
        ]

        let elements = ListProduct.map((product, index) => {
            let result = '';
            if(product.status) {
                result = 
                    <Product 
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
            }
            return result;
        });

        return (
            <div>
                <div className="w-full p-5">
                    <form>
                        <label className="ml-5 block text-sm font-medium text-gray-500">Ten san pham</label>
                        <div>
                            <input type="text" ref="name" className="m-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <button className="ml-5 px-4 py-2 bg-blue-500 text-white rounded" onClick={this.onAddCart}>Them</button>
                    </form>
                </div>
                <div className="flex flex-wrap -m-4 justify-center ">
                    { elements }
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <button type="button" onClick={ this.onClick }> Click me</button>
                    </div>
                </div>
            </div>
        )
    }
}
