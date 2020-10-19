import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/SASS/css/style.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { updateCartList } from '../../store/actions';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class FrontHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.cartList !== this.props.cartList) {
            this.calculateTotal();
        }
    }

    // Calculate the total amount of whole cart list
    calculateTotal = () => {
        var total = 0;
        const { cartList } = this.props;
        cartList.forEach(each => {
            total = total + Number(each.unitPrice.substr(1))
        });
        this.setState({ total: total })
    }

    // Remove an item from the cart
    removeFromCart = (item) => {
        const { cartList, updateCartList } = this.props;
        var newList = cartList;
        newList.forEach(each => {
            if (each.id === item.id) {
                const index = newList.indexOf(each);
                newList.splice(index, 1);
            }
        });
        updateCartList(newList);
    }

    render() {

        const { total } = this.state;
        const { cartList } = this.props;

        return (
            <div>
                <Link to="/">
                    <div className="headerTitle">ECraftt</div>
                </Link>
                <div className="headerNav">
                    <ShoppingCartIcon className="shoppingCartIcon" />
                    <div className="cartCount">{cartList.length}</div>
                    <div className="cartList">
                        <div className="cartListScroll">
                            {
                                cartList && cartList.length > 0 ?
                                    cartList.map(item => {
                                        return (
                                            <div className="listItem" key={item.id}>
                                                <img src={item.image} alt={item.name} className="listItemImage" />
                                                <div className="listItemDetails">
                                                    <div className="listItemName">{item.name}</div>
                                                    <div className="listItemAmount">{item.unitPrice}</div>
                                                </div>
                                                <div className="listItemRemove" onClick={() => this.removeFromCart(item)}>&times;</div>
                                            </div>
                                        )
                                    })
                                    :
                                    <div className="listItem">
                                        <div className="listItemDetails">
                                            <div className="listItemName darkText">No items in the cart</div>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="listTotal">
                            <div className="listTotalText">Total</div>
                            <div className="listTotalAmount">${total}</div>
                        </div>
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(FrontHeader);