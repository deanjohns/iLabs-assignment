import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../../styles/SASS/css/style.css';
import EcommerceStyles from '../../styles/Ecommerce';
import { withStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

class BuyProcedure extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <div className="categoryTitle">
                    <span>This is the Best company for you</span>
                </div>
                <div className="categorySubTitle">
                    <span>You have easy and short steps to buy an item</span>
                </div>
                <div className="categoryBodyBuy">
                    <div className="itemGridMainProcedure">
                        <div className="procMain">
                            <SearchOutlinedIcon className="searchIcon" />
                            <div className="procTitle">
                                <span>Search for what you need</span>
                            </div>
                            <div className="procSubTitle">
                                <span>It is easy to search with your prefered category</span>
                            </div>
                        </div>

                        <div className="procMain">
                            <ShoppingCartOutlinedIcon className="searchIcon" />
                            <div className="procTitle">
                                <span>Add the item to the cart</span>
                            </div>
                            <div className="procSubTitle">
                                <span>Cart will keep your items</span>
                            </div>
                        </div>

                        <div className="procMain">
                            <CreditCardOutlinedIcon className="searchIcon" />
                            <div className="procTitle">
                                <span>Pay for the item</span>
                            </div>
                            <div className="procSubTitle">
                                <span>With the secured money transaction</span>
                            </div>
                        </div>

                        <div className="procMain">
                            <LocalShippingOutlinedIcon className="searchIcon" />
                            <div className="procTitle">
                                <span>You will receive the item</span>
                            </div>
                            <div className="procSubTitle">
                                <span>We brings the item to your door step</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BuyProcedure.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(EcommerceStyles)(BuyProcedure);