import React, { Component } from 'react';
import { Widget, toggleWidget, addResponseMessage, addLinkSnippet, addUserMessage, senderPlaceHolder } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

// import logo from './logo.svg';
class App extends Component {
    componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");

        // shows widget by default
        toggleWidget();

        let connection = new WebSocket('ws://127.0.0.1:1337');

        connection.onopen = function () {
            // connection is opened and ready to use
        };

        connection.onerror = function (error) {
            // an error occurred when sending/receiving data
        };

        connection.onmessage = function (message) {
            // try to decode json (I assume that each message
            // from server is json)
            try {
                var json = JSON.parse(message.data);
                addResponseMessage(json.messageText)
            } catch (e) {
                console.log('This doesn\'t look like a valid JSON: ',
                message.data);
            return;
            }
            // handle incoming message
        };
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
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
                senderPlaceHolder="sah mah dude"
            />
            </div>
        );
    }
}
   
export default App;





