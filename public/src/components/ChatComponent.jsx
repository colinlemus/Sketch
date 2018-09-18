import React, { Component } from 'react';
import { Widget, toggleWidget, addResponseMessage, addLinkSnippet, addUserMessage, senderPlaceHolder } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

var answer = "daddy";
var user = localStorage.getItem("username");
console.log("user",user);

// import logo from './logo.svg';
class App extends Component {

    
    
    state = {
        isConnected: false,
        messages: [],
        connection: null
    }

    componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");

        // shows widget by default
        toggleWidget();

        let connection = new WebSocket(`ws://localhost:8080/game-chat`);
        connection.onopen = this.onOpen;
        connection.onerror = this.onError;
        connection.onmessage = this.onMessage;

        this.setState({
            connection: connection
        });
    }

    onOpen = () => {
        // connection is opened and ready to use
        console.log("connection.onopen happening");
        this.setState({
            isConnected: true
        });
    }

    onError = (error) => {
        // an error occurred when sending/receiving data
        console.log("connection.onerror: " + error);
    }

    onMessage = (message) => {
        // try to decode json (I assume that each message
        // from server is json)
        // console.log("you just sent a message. Here it is ",message);
        // try {
        //     console.log("front end msg: ",message);

        //     var json = JSON.parse(message.data);
        //     addResponseMessage(json.messageText);
        //     console.log(json.messageText);
        // } catch (e) {
        //     console.log('This doesn\'t look like a valid JSON: ',
        //     message.data);
        // return;
        // }

        addResponseMessage(message.data);
        console.log(`New message incoming! ${message.data}`);

        // if you got the answer right
        if (message.data === answer) {
            // console.log(localStorage.getItem("username") + " got the answer!");
            console.log(user + " got the answer!");
        }

    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message outgoing! ${newMessage}`);
        // Now send the message through the backend API
        if (!this.state.isConnected) { return; }

        this.state.connection.send(newMessage);

        // check if answer is correct
        this.isAnswerCorrect(newMessage);

    }

    isAnswerCorrect = (newMessage) => {
        if (newMessage === answer) {
            console.log(user + " got the answer!");
        }
    }

    render() {
        return (
            <div className="App">
            <Widget
                handleNewUserMessage={this.handleNewUserMessage}
                // profileAvatar={insert user photo here}
                title="Skitch Game Chat"
                subtitle="username here"
                // titleAvatar="insert chat name here --- e.g. carrot, broccoli, apple, etc."
                senderPlaceHolder="type here plz"
            />
            </div>
        );
    }
}
   
export default App;





