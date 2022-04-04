import React from "react";

import Final from "./Final"
import Historia from "./Historia";

class Juego extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render(){   
        return(
        <div className="layout">
            {this.props.opcionesAMostrar !== "" ?
            <Historia 
                historiaAMostrar={this.props.historiaAMostrar}
                handleClick={this.props.handleClick}
                opcionesAMostrar={this.props.opcionesAMostrar }
            /> : <Final txt={"Final del juego"} />}

            <div className="recordatorio">

                <h3>Seleccion anterior: 
                    <span className="mayus">{this.props.seleccionPrevia} </span> 
                </h3>

                <h4>Historial de opciones:</h4>
                <ul>
                {this.props.historial.map(
                    (elemento,index) => {
                    return <li className="mayus" key={elemento+index}> {elemento}</li>
                    })}
                </ul>
            </div>

        </div>
        ); 
    }
}
  
export default Juego;

