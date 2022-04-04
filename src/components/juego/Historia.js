import React from "react";

export class Historia extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
  render() {
    return (
      <>
        <h1 className="historia">
          {this.props.historiaAMostrar}
        </h1>
        <div className="opciones">

        <div className="opcion">
            <button 
                id="a" 
                onClick={this.props.handleClick} 
                className="botones">
                A
            </button>
            <h2>
                {this.props.opcionesAMostrar.a}
            </h2>
        </div>

        <div className="opcion">
            <button 
                id="b" 
                onClick={this.props.handleClick} className="botones">
                B
            </button>
            <h2>
                {this.props.opcionesAMostrar.b}
            </h2>
        </div>
    </div>
  </>
    )
  }
}

export default Historia;