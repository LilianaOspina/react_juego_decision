import React from "react";
import Contenedor from "./components/contenedor/Contenedor";

//Componente de clase
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render(){
    return(
      <div className="layout">
        <Contenedor />
      </div>
    );

  }
}

export default App;
