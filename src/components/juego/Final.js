import React from "react";

class Final extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render(){   
        return(
        <h1 className="historia">
          {this.props.txt}
        </h1>

        ); 
    }
}
  
export default Final;

