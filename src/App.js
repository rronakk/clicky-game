import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
    state = {
        friends : friends
    };
    removeFriend = (frndId) => {
        this.setState({friends : this.state.friends.filter(frnds => frnds.id !== frndId)})
    };
    render() {
        return (
            <Wrapper>
                <h1 className="title">Friends List</h1>
                {this.state.friends.map((frnd) => {
                    return <FriendCard key={frnd.id}
                        id={frnd.id}
                        name={frnd.name}
                        image={frnd.image}
                        occupation={frnd.occupation}
                        location={frnd.location}
                        removeFriend ={this.removeFriend}
                    />
                })}
            </Wrapper>
        );
    }
}

export default App;
