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
  return  this.state.booksList.map((book, index) => {
        return <tr key = {index}>
            
            <td>{book.booksCategory}</td>
            <td>{book.title}</td>
            <td>{book.description}</td>
            <td>{book.author}</td>
            <td>{book.prize}</td>
            

        </tr>
    })
}

    render() {
        return(
            <div id = "book"> 
            <h1>Books list!</h1>
            <table>
               <tr> 
                   {this.renderList()}
                   </tr>
            </table>
            </div>
        )
    }
}
export default BooksList;
