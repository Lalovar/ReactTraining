import React from 'react';
import Tarjeta from './components/Tarjeta';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: "",
      currentPosition: "",
      currentbgColor: "",
      arregloUsuario: [],
      textToDisplay: "Hola tesoro",
      textToDisplay2: undefined,
      dasd: "Perro",
      loading:false
    };
  }

  componentDidMount() {
    this.setState({
      textToDisplay: 1,
      arregloUsuario: [
        {
          nombre: "Lalo",
          puesto: "Dev",
          bgColor: "blue"
        },
        {
          nombre: "Paco",
          puesto: "Test",
          bgColor: "red"
        },
        {
          nombre: "Tesoro",
          puesto: "Fresher",
          bgColor: "green"
        }
      ]
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
    if (this.state.dasd === "Gato") {
      this.setState({ dasd: "Perro" })
    }
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    })
    //  console.log(this.state)
  }

   agregar = async () => {
    this.setState({loading:true})
    await setTimeout(() => {
      const obj = {
        nombre: this.state.currentName,
        puesto: this.state.currentPosition,
        bgColor: this.state.currentbgColor
      }
  
      const arrOnState = this.state.arregloUsuario
      arrOnState.push(obj)
      this.setState({ arregloUsuario: arrOnState })
      this.setState({loading:false})
    }, 1000);
    
  }

  render() {
    const numero = this.state.textToDisplay;
    const arrVal = this.state.arregloUsuario;

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
        <div>
          <p>Nombre</p>
          <input name="currentName" value={this.state.currentName} onChange={event => { this.handleChange(event) }} />
          <p>Posicion</p>
          <input name="currentPosition" value={this.state.currentPosition} onChange={event => { this.handleChange(event) }} />
          <p>bgColor</p>
          <input name="currentbgColor" value={this.state.currentbgColor} onChange={event => { this.handleChange(event) }} />
          <button onClick={this.agregar}> Agregar </button>
          {
            this.state.loading? <p>Loading...</p>:null
          }
        </div>
        <h2>Tarjetas de usuarios </h2>{
          arrVal.map((element, index) => {
            return <Tarjeta key={index} usuario={element} />
          })
        }
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