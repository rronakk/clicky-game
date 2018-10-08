import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score"
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
    state = {
        friends : friends,
        score: 0,
        topScore : this.score,
        clickedImage: []
        // Add all clicked image to an array/set,
        // Length of clicked image array will be the score.
        // if item already exist on the array, then reset the score, and add score to top_score. (if it is less than previous top score)
    };
    shuffle = (img) => {
        this.setState({
            friends : this.state.friends.sort(() => Math.random() - 0.5),
            score: this.state.clickedImage.length,
            clickedImage: this.state.friends.filter(clickedImg => clickedImg.id === img)
        });
    };

    render() {
        return (
            <Wrapper>
                <h1 className="title">Clicky Game <Score score={this.state.score}/></h1>

                {this.state.friends.map((frnd) => {
                    return <FriendCard key={frnd.id}
                        id={frnd.id}
                        name={frnd.name}
                        image={frnd.image}
                        occupation={frnd.occupation}
                        location={frnd.location}
                        shuffle ={this.shuffle}
                    />
                })}
            </Wrapper>
        );
    }
}

export default App;
