import React, { Component } from 'react';
import Product from "./Product";
import Title from './Title';
export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}