import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textToDisplay: "Hola tesoro",
      textToDisplay2: undefined,
      dasd: "Perro"
    };
  }

  componentDidMount() {
    this.setState({
      textToDisplay: 1
    })
  }

  aumentar = evento => {
    this.setState({
      textToDisplay: this.state.textToDisplay + 1
    })
  }
  changeAnimal = () => {
    if (this.state.dasd === "Perro") {
      this.setState({ dasd: "Gato" })
    }
    if(this.state.dasd==="Gato"){
      this.setState({dasd:"Perro"})
    }
    this.setState({
      dasd: "gato"
    })
  }

  render() {
    const numero = this.state.textToDisplay;

    return (
      <>
        SALUDO:
        <p>
          {
            numero
          }
        </p>
        <button onClick={this.aumentar} >aumentar  </button>
        <p>
          {
            this.state.dasd
          }
        </p>
        <button onClick={this.changeAnimal}> animal</button>
      </>
    );
  }
}
export default App;



/**
function App(prod) {
  return (
    <div className="App">
      Hola
    </div>
  );
}
 */