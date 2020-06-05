import React, { Component } from 'react';

import SearchResultInfo from './SearchResultInfo';
import SelectBox from '../general/SelectBox.jsx';

export default class SearchHeader extends Component {
    state = {
        options: [
            { key: 'bestMatch', value: 'רלוונטיות' },
            { key: 'PriceAscending', value: 'מחיר: מהנמוך לגבוה' },
            { key: 'PriceDescending', value: 'מחיר: מהגבוה לנמוך' }
        ]
    };

    render() {
        const { term, productsLength, updateSort, toggleFilters } = this.props;
        const { options } = this.state;
        return (
            <div className="search-header flex align-center justify-between">
                <SearchResultInfo term={term} productsLength={productsLength} />
                <div>
                    <div className="filter-btn flex justify-center align-center" onClick={toggleFilters}>
                        <i className="fas fa-filter"></i>
                        <div className="title">סנן תוצאות</div>
                    </div>
                    <SelectBox handleChange={updateSort} options={options} />
                </div>
            </div>
        )
    }
}
