import React from "react";
import Data from "../../utils/data.json"
import Juego from "../juego/Juego";

class Contenedor extends React.Component {
    constructor() {
        super();
        this.state = {
            momentoActual:1,
            seleccionPrevia: "",
            historiaSeleccionada:"",
            historiaAMostrar: Data[0].historia,
            opcionesAMostrar: Data[0].opciones,
            historial: [],           
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evento){
        let idBusqueda = String(this.state.momentoActual+1)+evento.target.id;
        let history = Data.find(
            (historia)=> historia.id === idBusqueda);
        let historiaPorId = "";
        let opcionesPorId = "";

        if (history !== undefined) {
            historiaPorId = history.historia;
            opcionesPorId = history.opciones;
        }

        this.setState({
            
            momentoActual: this.state.momentoActual + 1,
            seleccionPrevia: evento.target.id,
            historiaSeleccionada: idBusqueda,
            historiaAMostrar: historiaPorId,
            opcionesAMostrar: opcionesPorId,
            historial: [...this.state.historial,...evento.target.id],

        });
    }

    componentDidUpdate(pProps,pState){
        if (this.state.historiaAMostrar === "") {
            alert("llegamos al final del juego");         
        }
    }

    render(){   
        return(
            <Juego 
                historiaAMostrar={this.state.historiaAMostrar}
                opcionesAMostrar={this.state.opcionesAMostrar}
                seleccionPrevia={this.state.seleccionPrevia}
                historial={this.state.historial}
                handleClick={this.handleClick}
            />
        ); 
    }
}
  
export default Contenedor;

