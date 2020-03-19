/*
-actions:
SEARCH PRODUCT (FILTER BY TEXT)
FILTER BY PRICE
FILTER BY PRICE RANGE
FILTER BY DISCOUNT
FILTER BY NEWEST (DATE ADDED)
FILTER BY MANUFACTURER
FILTER BY POPULARITY
*/

const filtersReducerDefaultState = {
    filters: {
        searchText: '',
        filterBy: '', //price,discount,manufacturer,dateAdded,popular
        priceRangeLow: 0,
        priceRangeHigh: undefined,
        currency: 'EUR'
    }
}

export const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SEARCH_PRODUCT':
            return {
                ...state,
                searchText: action.searchText
            };
        case 'SET_CURRENCY':
            return {
                ...state,
                currency: action.currency
            }
        case 'GET_CURRENCY':
            return action.currency;

        case 'FILTER_BY_PRICE_ASCENDING':
            return {
                ...state,
                filterBy: 'priceAscending'
            };
        case 'FILTER_BY_PRICE_DESCENDING':
            return {
                ...state,
                filterBy: 'priceDescending'
            };
        case 'FILTER_BY_DATE':
            return {
                ...state,
                filterBy: 'dateAdded'
            };
        case 'FILTER_BY_DISCOUNT':
            return {
                ...state,
                filterBy: 'discount'
            };
        case 'FILTER_BY_PRICE_RANGE':
            return {
                ...state,
                priceRangeLow: action.priceRangeLow,
                priceRangeHigh: action.priceRangeHigh
            }
        default:
            return state;
    }
}