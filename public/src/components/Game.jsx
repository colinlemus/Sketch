import React, { Component } from 'react';
import { Widget, toggleWidget, addResponseMessage, addLinkSnippet, addUserMessage, senderPlaceHolder } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import CanvasDraw from './DrawCanvas';
import CurrentJoinedUsers from './CurrentJoinedUsers';
import styles from '../pages/css/ChatComponentStyle.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import logo from '../assests/logo.png';
import '../pages/css/utilities.css';
import '../pages/css/SketchLogo.css';

const justifyCenter = {
    justifyContent: 'center'
}
// Temp answers
const boxBorder = {

    border: '1px transparent black',
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
var score = 0;
console.log("user", user);


// import logo from './logo.svg';
export default class Chat extends Component {


    state = {
        isConnected: false,
        messages: [],
        connection: null,
        chosenWord: '',
        score: 1
    }

    addPlayer() {
        let name = localStorage.getItem("username");
        console.log(name);
    }

    getChosedWord() {
        let randomWord = Math.floor(Math.random() * 3);
        let words = ["jason"];
        this.setState({
            chosenWord: words[0]
        });

        axios.get('/api/word/').then((response) => {
            // console.log(response);
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

    onUnload(event) {
        axios.get('/api/lobby/').then((response) => {
            console.log(response);
            axios.delete('/api/lobby/', {
                data: {
                    id: response['data']['id']
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
        window.removeEventListener("beforeunload", this.onUnload);
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

        window.addEventListener("beforeunload", this.onUnload);
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
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message outgoing! ${newMessage}`);
        console.log(newMessage);
        console.log(this['state']['chosenWord']);
        this.handleCorrectAnswer(newMessage);
        if (!this.state.isConnected) { return; }

        this.state.connection.send(localStorage.getItem('username') + ": " + newMessage);
    }

    handleCorrectAnswer = (incomingMessage) => {
        if (this.state.score === 10) {
            alert("you win!");
            this.setState({
                score: 0
            });
            score = 0;
        }

        if (incomingMessage === this['state']['chosenWord']) {
            console.log(user + " got the answer!");
            score++;
            this.getChosedWord();
            this.setState({
                score: score
            });

            let username = localStorage.getItem('username');
            UserProfile.setScore(score);
            axios.post("/api/lobby/", {
                username,
            }).then((response) => {
                console.log(response);
                console.log(response['data']['id']);
                axios.put('/api/lobby/', {
                    id: response['data']['id'],
                    onlineUser: response['data']['onlineUser'],
                    socre: response['data']['score'],
                }).catch((error) => {
                    console.log(error);
                });
            });
        } else {
            console.log("not right");
        }
    }

    handleUnderScore = () => {
        let underscore = [];
        for (let i = 0; i < this['state']['chosenWord']['length']; i++) {
            underscore.push('_ ');
        }

        return (
            <div>
                Word: {underscore}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="vertical-center-game" style={{ justifyContent: 'center', width: '256px', height: '150px' }}>
                                <img id='sketch-logo' src={logo} alt={logo}></img>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-2" style={boxBorder}>
                            <CurrentJoinedUsers />
                        </div>

                        <div className="col-xl-7 rounded-0" style={boxBorder}>
                            <div className='card rounded-0' style={card}>
                                <div className='card-header text-center font-weight-bold rounded-0'>{this.handleUnderScore()}</div>
                                <div className='card-body rounded-0' style={cardBody}>
                                    <CanvasDraw />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 rounded-0" style={boxBorder}>
                            <Widget
                                handleNewUserMessage={this.handleNewUserMessage}
                                // profileAvatar={insert user photo here}
                                title='Sketch Game Chat'
                                subtitle={user}
                                // titleAvatar="insert chat name here --- e.g. carrot, broccoli, apple, etc."
                                senderPlaceHolder='Enter your message here!'
                                style={styles}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
