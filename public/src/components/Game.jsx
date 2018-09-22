import React, { Component } from 'react';
import { Widget, toggleWidget, addResponseMessage, addLinkSnippet, addUserMessage, senderPlaceHolder } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import CanvasDraw from './DrawCanvas';
import CurrentJoinedUsers from './CurrentJoinedUsers';
import styles from '../pages/css/ChatComponentStyle.css';
import axios from 'axios';

// Temp answers
const boxBorder = {
    border: '1px solid black',
    margin: '0px',
    padding: '0px'
};

const card = {
    width: '100%',
    height: '100%',
}

const cardBody = {
    width: '100%',
    background: 'rgb(0, 0, 0, 0.01)',
    padding: '40px 20px 20px 20px',
    height: '100%',
}
const user = localStorage.getItem("username");
console.log("user", user);

// import logo from './logo.svg';
export default class Chat extends Component {

    state = {
        isConnected: false,
        messages: [],
        connection: null,
        chosenWord: ''
    }

    getChosedWord() {
        axios.get('/api/word/').then((response) => {
            console.log(response);
            let chosenWord = response['data'][0]['chosenWord'];
            this.setState({
                chosenWord
            });
            axios.delete('/api/word/', {
                data: {
                    id: response['data'][0]['id']
                }
            }).then(response => {
                console.log(response);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    componentWillMount() {
        this.getChosedWord();
    }

    componentDidMount() {
        // addResponseMessage("Welcome to this awesome chat!");

        // shows widget by default
        toggleWidget();

        let port;
        if (window['location']['port'] === '') {
            port = ':' + window['location']['port'];
        } else {
            port = ':8080';
        }
        let wsProtocol = 'ws://';
        if (window.location.protocol.substr(0, 5) === 'https') {
            wsProtocol = 'wss://'
        }
        let webSocketString = wsProtocol + window['location']['hostname'].toString() + port + '/game';
        console.log(webSocketString);

        let connection = new WebSocket(webSocketString);
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
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message outgoing! ${newMessage}`);
        console.log(newMessage);
        console.log(this['state']['chosenWord']);
        this.handleCorrectAnswer(newMessage);
        if (!this.state.isConnected) { return; }

        this.state.connection.send(newMessage);
    }

    handleCorrectAnswer = (incomingMessage) => {
        if (incomingMessage === this['state']['chosenWord']) {
            console.log(user + " got the answer!");
            this.getChosedWord();
        }
    }

    handleUnderScore = () => {
        let underscore = [];
        for (let i = 0; i < this['state']['chosenWord']['length']; i++) {
            underscore.push('_ ');
        }

        return (
            <div>
                {underscore}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className='container'>
                    {/* <br></br> */}
                    {/* <SketchLogo /> */}
                    <div className="row">
                        <div className="col-2" style={boxBorder}>
                            <CurrentJoinedUsers />
                        </div>

                        <div className="col-7" style={boxBorder}>
                            <div className='card' style={card}>
                                <div className='card-header text-center font-weight-bold'>Word:
                                {this.handleUnderScore()}</div>
                                <div className='card-body' style={cardBody}>
                                    <CanvasDraw />
                                </div>
                            </div>
                        </div>
                        <div className="col-3" style={boxBorder}>
                            <Widget
                                handleNewUserMessage={this.handleNewUserMessage}
                                // profileAvatar={insert user photo here}
                                title='Sketch Game Chat'
                                subtitle={user}
                                // titleAvatar="insert chat name here --- e.g. carrot, broccoli, apple, etc."
                                senderPlaceHolder='plz type here...'
                                style={styles}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}






