import Categories from './categories';
import FrontHeader from './frontHeader';
import FrontFooter from './frontFooter';
import '../../styles/SASS/css/style.css';
import React, { Component } from 'react';
import BuyProcedure from './buyProcedure';
import LatestProducts from './latestProducts';
import '../../styles/SASS/other/otherStyles.css';
import { Container, Row, Col } from 'bootstrap-4-react';

class Front extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <div className="pic-wrapper">
                    <figure className="pic-1"></figure>
                    <figure className="pic-2"></figure>
                    <figure className="pic-3"></figure>
                    <figure className="pic-4"></figure>
                </div>
                <div className="frontSlideText">
                    <div className="frontSlideTitle">
                        <span>National crafting items</span>
                    </div>
                    <div className="frontSlideSubTitle">
                        <span>Deliver to your door step</span>
                    </div>
                </div>
                <div className="frontHeader">
                    <FrontHeader />
                </div>
                <div className="frontBodyUpper">
                    <Container>
                        <Row>
                            <Col col="sm-12 md-12 lg-12">
                                <Categories />
                            </Col>
                        </Row>
                        <Row>
                            <Col col="sm-12 md-12 lg-12">
                                <LatestProducts />
                            </Col>
                        </Row>
                        <Row>
                            <Col col="sm-12 md-12 lg-12">
                                <BuyProcedure />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="frontFooter">
                    <FrontFooter />
                </div>
            </div>
        );
    }
}

export default Front;