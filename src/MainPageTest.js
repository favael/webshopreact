import React from 'react';
import './MainPageTest.css';

class MainPageTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {booksList: []};
    }

componentDidMount() {
    fetch('https://favael-webshop.herokuapp.com/book')
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
            <div id = "page"> 
                <div class = "navbar">
                    <div class = "dropbtn">
                    <button class="dropbtn">Moje konto
                                        <i class="fa fa-caret-down"></i>
                    </button>
                    <button class="dropbtn">Zaloguj
                                        <i class="fa fa-caret-down"></i>
                    </button>
                    <button class="dropbtn">Mój koszyk
                                        <i class="fa fa-caret-down"></i>
                    </button>
                
                    </div>
                    <div class = "header-text">
                    "KUPUJMY KSIĄŻKI!"
                    </div>
                    
                </div>

                <div class="navbar">
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                            <div class="dropdown">
                                <button class="dropbtn">Szachy
                                        <i class="fa fa-caret-down"></i>
                                </button>
                                    <div class="dropdown-content">
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
                                    
                                    </div>
                            </div>

                            <div class="dropdown">
                                <button class="dropbtn">Geografia
                                        <i class="fa fa-caret-down"></i>
                                </button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                            </div>

                            <div class="dropdown">
                                <button class="dropbtn">Historia
                                        <i class="fa fa-caret-down"></i>
                                </button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                            </div>

                            <div class="dropdown">
                                <button class="dropbtn">Gotowanie
                                        <i class="fa fa-caret-down"></i>
                                </button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                            </div>
                            
                            <div class="dropdown">
                                <button class="dropbtn">Romans
                                        <i class="fa fa-caret-down"></i>
                                </button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                            </div>

                            <div class="dropdown">
                                <button class="dropbtn">Sci-Fi & Fantasy
                                        <i class="fa fa-caret-down"></i>
                                </button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                            </div>

                            
                            
                            
                </div>
            </div>
        )}
}

export default MainPageTest;
