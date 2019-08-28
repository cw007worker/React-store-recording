import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'
const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products:storeProducts,
        detailProduct:detailProduct
    }
    
    handleDetail = ()=>{
        console.log("hello from detail");
    }
    handleCart = ()=>{
        console.log("hello from Cart");
    }
    render() {
        
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                handleCart:this.handleCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}

