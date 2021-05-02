import React from 'react';
import './BooksList.css';

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
  return  this.state.booksList.map((book) => {
        return <tr>
            <td >{book.booksCategory}</td>
            <td>"{book.title}"</td>
            <td>{book.description}</td>
            <td>{book.author}</td>
            <td>{book.prize} zł</td>
        </tr>
            
    })
}

    render() {
        return(
            <div id = "all"> 
            <table>
                <tr>
                <th>Kategoria</th>
                <th>Tytuł</th>
                <th>Opis</th>
                <th>Autor</th>
                <th>Cena</th>
                </tr>
               
                                 
                                     {this.renderList()}
                                
                          <caption>Dostępne ksiązki</caption>
                    </table>
                 </div>

        )
    }
}
export default BooksList;
