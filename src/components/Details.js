import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'

export default class  extends Component {
    render() {
        return (
            <ProductConsumer>
               { value =>{
                   const {id, name, img, price, inCart, info}= value.detailProduct;
                   return(
                      <div className="container">
                          {/* title */}
                          <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue text-capitalize y-5">
                                <h1>  {name}  </h1>
                            </div>
                          </div>
                          {/* end title */}
                          {/* product info */}
                          <div className="row">
                              <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
                                <img src={img} className="img-fluid" alt="product"/>
                              </div>
                              <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
                                  <h2> Pokemon: {name} </h2>
                                    <h4 className="text-blue">
                                        <strong>
                                        price : <span>$</span>
                                        {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Some info about the Pokemon:
                                                </p>
                                         <p className="text-muted lead">{info}</p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                        <ButtonContainer>back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                        cart
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                        >
                                        {inCart ? "in cart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                  </div>
                          </div>

                      </div>
                   )
               }       
               } 
            </ProductConsumer>
        );
    }
}
