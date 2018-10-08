import React from "react";

class Score extends React.Component {

    render(){
        return(
            <div> Score : <strong>{this.props.score}</strong></div>
        )

};
}
export default Score;
