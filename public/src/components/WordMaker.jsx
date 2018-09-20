import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';

export default class WordMaker extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        checking:false
      };
      this.chosenWord = this.chosenWord.bind(this);
    }

    chosenWord() {
        var letterUnder = [];
        var currentWord;
        var randomWord = Math.floor(Math.random() * 3);
        var words = ["edean", "colin", "nick"]
        
        var fixedWord = words[randomWord];
        for(var i=0;i<fixedWord.length; i++){
            letterUnder.push("_")
        }
        currentWord = letterUnder.join(" ");
        console.log(currentWord);
        return currentWord;
    }

    render() {
        return(
            <div>
            <h1>Hello</h1>
            <div>{this.chosenWord()}</div>
            </div>
        );
    }
}
