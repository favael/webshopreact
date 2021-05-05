import React from 'react';
import './style/reset.css';
import './MainPage.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chessBooks: [], dramatBooks: [], cooksBooks: [], scfiBooks: [], geographyBooks: [], romansBooks: [], historyBooks: [] } 
        
}
componentDidMount() {
  Promise.all([fetch('https://favael-webshop.herokuapp.com/book/szachy'), fetch('https://favael-webshop.herokuapp.com/book/dramat'), fetch('https://favael-webshop.herokuapp.com/book/gotowanie'), fetch('https://favael-webshop.herokuapp.com/book/scfi'), fetch('https://favael-webshop.herokuapp.com/book/geografia'), fetch('https://favael-webshop.herokuapp.com/book/romans'), fetch('https://favael-webshop.herokuapp.com/book/historia')])
  // Promise.all([fetch('http://localhost:8080/book/szachy'), fetch('http://localhost:8080/book/dramat'), fetch('http://localhost:8080/book/gotowanie'), fetch('http://localhost:8080/book/scfi'), fetch('http://localhost:8080/book/geografia'), fetch('http://localhost:8080/book/romans'), fetch('http://localhost:8080/book/historia')])

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

renderUpNav = () => {
        return(  
                    <nav>
                      <button>Moje konto</button>
                      <button>Moj koszyk</button>
                      <button>Zaloguj</button> 
                    </nav>                  
        )
    }
renderHeader = () => {
        return(
                    <div>
                    <p>"KUPUJMY KSIĄŻKI!"</p>
                    </div>
        )
}

renderNav = () => {
        return(        
          <div>
      
          <div class="dropdown">
                                <div class="dropbtn">Szachy
                                </div>
                                    <div class="dropdown-content">
                                            {this.renderChessList()}                                        
                                    </div>
                            </div>

                            <div class="dropdown">
                                <div class="dropbtn">Dramat
                                </div>
                                    <div class="dropdown-content">
                                            {this.renderDramatList()}                                        
                                    </div>
                            </div>

                            <div class="dropdown">
                                <div class="dropbtn">Historia
                                </div>
                                    <div class="dropdown-content">
                                            {this.renderHistoryBooksList()}                                        
                                    </div>
                            </div>

                            <div class="dropdown">
                                <div class="dropbtn">Gotowanie
                                </div>
                                    <div class="dropdown-content">
                                            {this.renderCookList()}                                        
                                    </div>
                            </div>
                            
                            <div class="dropdown">
                                <div class="dropbtn">Romans
                                        <i class="fa fa-caret-down"></i>
                                </div>
                                    <div class="dropdown-content">
                                            {this.renderRomansBooksList()}                                        
                                    </div>
                            </div>

                            <div class="dropdown">
                                <div class="dropbtn">Sci-Fi
                                        <i class="fa fa-caret-down"></i>
                                </div>
                                    <div class="dropdown-content">
                                            {this.renderScfiBooksList()}                                        
                                    </div>
                            </div>

                            <div class="dropdown">
                                <div class="dropbtn">Dramat
                                        <i class="fa fa-caret-down"></i>
                                </div>
                                    <div class="dropdown-content">
                                            {this.renderDramatList()}                                        
                                    </div>
                            </div>
    </div>
        )
}


    render() {
        return( <div class = "all">
                  <div class ="header-bloked">
                    <div class = "header">{this.renderUpNav()} </div>
                    <div class = "header-text">{this.renderHeader()}</div>
                    <div class = "navbar">{this.renderNav()}</div>
                  </div>
                </div>

                              
        )
    }
  }
    
    export default MainPage;