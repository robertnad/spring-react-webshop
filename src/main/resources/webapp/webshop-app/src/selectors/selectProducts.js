// import moment from 'moment';

const selectProducts = (products, 
        {searchText, filterBy, priceRangeLow, priceRangeHigh}) => {
    return products.filter((product) => {
        
        // const dateAdded = moment(product.createdAt);
        const nameMatch = product.name.toLowerCase().includes(searchText.toLowerCase());
        const priceMatch = product.price >= priceRangeLow && product.price <= priceRangeHigh;

        return nameMatch && priceMatch; /*&& dateAdded;*/
    }).sort((a, b) => {
        if (filterBy === 'priceDescending') {
            return (a.price*100) < (b.price*100) ? 1 : -1;
        } else if (filterBy === 'priceAscending') {
            return (a.price*100) < (b.price*100) ? -1 : 1;
        } else if (filterBy === 'dateAdded') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (filterBy === 'discount') {
            return a.discount < b.discount ? 1 : -1;
        }
    });
}

export default selectProducts;

/*EXPENSIFY APP FROM REACT COURSE*/
// import moment from 'moment';
// // Get visible expenses
// export default (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter((expense) => {
//         const createdAtMoment = moment(expense.createdAt);
//         const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
//         const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//
//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//         if (sortBy === 'date') {
//             return a.createdAt < b.createdAt ? 1 : -1
//         } else if (sortBy === 'amount') {
//             return a.amount < b.amount ? 1 : -1
//         }
//     });
// };