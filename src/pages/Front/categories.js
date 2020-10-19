import React, { Component } from 'react';
import '../../styles/SASS/css/style.css';
import CategoryData from './DataSet/CategoryData';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <div>
                <div className="categoryTitle">
                    <span>Explore Categories</span>
                </div>
                <div className="categoryBody">
                    <div className="itemGridMain">
                        {
                            CategoryData.map(category => {
                                return (
                                    <div className="itemCatCard" key={category.id}>
                                        <div className="catCard">
                                            <img src={category.image} alt={category.name} className="catCardImage" />
                                            <div className="catCardTitle">
                                                <span>{category.name}</span>
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

export default Categories;