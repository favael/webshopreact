import React from 'react';
import './MainPageTest.css';

class MainPageTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chessBooks: [], dramatBooks: [], cooksBooks: [], scfiBooks: [], geographyBooks: [], romansBooks: [], historyBooks: [] } 
            
    }

// componentDidMount() {
//     fetch('http://localhost:8080/book/szachy')
//     .then(response => response.json())
//     .then(chessResponse=> {
//         this.setState({chessBooks: chessResponse});
//     })
// }
componentDidMount() {
    // Promise.all([fetch('https://favael-webshop.herokuapp.com/book/szachy'), fetch('https://favael-webshop.herokuapp.com/book/dramat'), fetch('https://favael-webshop.herokuapp.com/book/gotowanie'), fetch('https://favael-webshop.herokuapp.com/book/scfi'), fetch('https://favael-webshop.herokuapp.com/book/geografia'), fetch('https://favael-webshop.herokuapp.com/book/romans'), fetch('https://favael-webshop.herokuapp.com/book/historia')])
    Promise.all([fetch('http://localhost:8080/book/szachy'), fetch('http://localhost:8080/book/dramat'), fetch('http://localhost:8080/book/gotowanie'), fetch('http://localhost:8080/book/scfi'), fetch('http://localhost:8080/book/geografia'), fetch('http://localhost:8080/book/romans'), fetch('http://localhost:8080/book/historia')])

      .then(([res1, res2, res3, res4, res5, res6, res7]) => { 
         return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json()]) 
      })
      .then(([res1, res2, res3, res4, res5, res6, res7 ]) => {
        this.setState({chessBooks: res1, dramatBooks: res2, cooksBooks: res3, scfiBooks: res4, geographyBooks: res5, romansBooks: res6, historyBooks: res7})
      });
}



  renderChessList = () => {
    return  this.state.chessBooks.map((book) => {
          return <button id = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          </button>
      })
  }
  renderDramatList = () => {
    return  this.state.dramatBooks.map((book) => {
          return <button id = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          </button>
      })
  }
  renderCookList = () => {
    return  this.state.cooksBooks.map((book) => {
          return <button id = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          </button>
      })
  }

  renderScfiBooksList = () => {
    return  this.state.scfiBooks.map((book) => {
          return <button id = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          </button>
      })
  }

  renderGeographyBooksList = () => {
    return  this.state.geographyBooks.map((book) => {
          return <button id = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          </button>
      })
  }

  renderRomansBooksList = () => {
    return  this.state.romansBooks.map((book) => {
          return <button id = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          </button>
      })
  }

  renderHistoryBooksList = () => {
    return  this.state.historyBooks.map((book) => {
          return <button id = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
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
                                <button class="dropbtn">Dramat
                                        <i class="fa fa-caret-down"></i>
                                </button>
                                    <div class="dropdown-content">
                                            {this.renderDramatList()}                                        
                                    </div>
                            </div>

                            <div class="dropdown">
                                <button class="dropbtn">Historia
                                        <i class="fa fa-caret-down"></i>
                                </button>
                                    <div class="dropdown-content">
                                            {this.renderHistoryBooksList()}                                        
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
                                            {this.renderRomansBooksList()}                                        
                                    </div>
                            </div>

                            <div class="dropdown">
                                <button class="dropbtn">Sci-Fi
                                        <i class="fa fa-caret-down"></i>
                                </button>
                                    <div class="dropdown-content">
                                            {this.renderScfiBooksList()}                                        
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
