import React from 'react';
import './MainPageTest.css';

class MainPageTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chessBooks: [], dramatBooks: [], cooksBooks: []} 
            
    }

// componentDidMount() {
//     fetch('http://localhost:8080/book/szachy')
//     .then(response => response.json())
//     .then(chessResponse=> {
//         this.setState({chessBooks: chessResponse});
//     })
// }
componentDidMount() {
    Promise.all([fetch('http://localhost:8080/book/szachy'), fetch('http://localhost:8080/book/dramat'), fetch('http://localhost:8080/book/gotowanie')])

      .then(([res1, res2, res3]) => { 
         return Promise.all([res1.json(), res2.json(), res3.json()]) 
      })
      .then(([res1, res2, res3]) => {
        this.setState({chessBooks: res1, dramatBooks: res2, cooksBooks: res3})
      });
}



  renderChessList = () => {
    return  this.state.chessBooks.map((book) => {
          return <button>
          <img src={book.url} alt={book.title} width = "180" height = "300"></img>
          </button>
      })
  }
  renderDramatList = () => {
    return  this.state.dramatBooks.map((book) => {
          return <button>
          <img src={book.url} alt={book.title} width = "180" height = "300"></img>
          </button>
      })
  }
  renderCookList = () => {
    return  this.state.cooksBooks.map((book) => {
          return <button>
          <img src={book.url} alt={book.title} width = "180" height = "300"></img>
          </button>
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
                                            {this.renderChessList()}                                        
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
                                            {this.renderCookList()}                                        
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

                            <div class="dropdown">
                                <button class="dropbtn">Dramat
                                        <i class="fa fa-caret-down"></i>
                                </button>
                                    <div class="dropdown-content">
                                            {this.renderDramatList()}                                        
                                    </div>
                            </div>

                            
                            
                            
                </div>
            </div>
        )}
}

export default MainPageTest;
