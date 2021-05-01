import React from 'react';

class BooksList extends React.Component {

componentDidMount() {
    fetch('https://favael-webshop.herokuapp.com/book')
    .then(response => {
        console.log(response);
    })
}

    render() {
        return(
            <h1>Books list!</h1>
        )
    }
}
export default BooksList;
