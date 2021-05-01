import React from 'react';

class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {booksList: []};
    }

componentDidMount() {
    fetch('http://localhost:8080/book')
    .then(response => response.json())
    .then(jsonResponse=> {
        this.setState({booksList: jsonResponse});
    })
}

renderList = () => {
  return  this.state.booksList.map((book, index) => {
        return <li key = {index}>
            <p>Kategoria: {book.booksCategory}</p>
            <p>Tytuł: {book.title}</p>
            <p>Opis: {book.description}</p>
            <p>Autor: {book.author}</p>
            <p>Cena: {book.prize}</p>
            <iframe width="1020" height="615"
            src = {book.url}>
            </iframe>

        </li>
    })
}

    render() {
        return(
            <div>
            <h1>Books list!</h1>
            <ul>
                {this.renderList()}
            </ul>
            </div>
        )
    }
}
export default BooksList;
