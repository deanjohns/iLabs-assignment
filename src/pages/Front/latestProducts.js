import { compose } from 'recompose';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import '../../styles/SASS/css/style.css';
import ProductData from './DataSet/ProductData';
import { updateCartList } from '../../store/actions';
import StarRateIcon from '@material-ui/icons/StarRate';

class LatestProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alreadyInCart: false,
        }
    }

    addItemToCart = (item) => {
        const { cartList, updateCartList } = this.props;
        var newList = cartList;
        const isExists = newList.some(e => e.id === item.id)
        console.log("ooo", isExists)
        if (isExists) {
            this.setState({ alreadyInCart: true }, () => {
                this.clearAlert()
            })
        }
        else {
            newList.push(item);
        }
        updateCartList(newList);
    }

    clearAlert = () => {
        setTimeout(() => {
            this.setState({ alreadyInCart: false })
        }, 2000);
    }

    render() {

        const { alreadyInCart } = this.state;

        return (
            <div>
                <div className="categoryTitle">
                    <span>Products List</span>
                </div>
                <div className="errorAlertMain" style={{ height: alreadyInCart ? '36px' : '0px' }}>
                    <div className="errorAlert">Item is already in the cart</div>
                </div>
                <div className="itemBody">
                    <div className="itemGridMain">
                        {
                            ProductData.map(product => {
                                return (
                                    <div className="itemCard" key={product.id}>
                                        <div className="itemCardMain">
                                            <div className="itemCardSub1">
                                                <img src={product.image} alt={product.name} className="itemCardImage" />
                                            </div>
                                            <div className="itemCardSub2">
                                                <div className="cardTitle">
                                                    <span>{product.name}</span>
                                                </div>
                                                <div className="itemDetails">
                                                    <div className="itemPrice">
                                                        {product.unitPrice}
                                                    </div>
                                                    <div className="itemRatings">
                                                        {
                                                            product.rating.map(rating => {
                                                                return (
                                                                    <StarRateIcon className="itemRatingStar" key={rating.id} />
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                <div className="itemButtons">
                                                    <button onClick={() => this.addItemToCart(product)}>Add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cartList: state.cartList,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateCartList: updateCartList,
    }, dispatch);
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(LatestProducts);