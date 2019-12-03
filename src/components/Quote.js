import React, { Component } from 'react'
import tweet from './tweet.png'

export class quote extends Component {
    constructor(){
        super();
    var x = Math.ceil((quoteArray.length -1)*Math.random())
    this.state = {
        quote: quoteArray[x].quote,
        author:quoteArray[x].author,
        count: 0,
    };
}

handleClick = () =>{
    this.setState({count: this.state.count+1})
    var x = Math.ceil((quoteArray.length -1)*Math.random())
    this.setState({ quote: quoteArray[x].quote,
        author:quoteArray[x].author,})
}
shareOnTwitter = () =>{
    console.log('shared')
}

    render() {
        return (
            <div style = {quoteboxstyle}>
                 <p id = "text">{this.state.quote}</p> <br/>
                 <p id="author">- {this.state.author}</p> <br/>
                    <div style = {container}>
                        <a id="tweet-quote" href = "twitter.com/intent/tweet"> 
                         <button className  = "btn-primary" onClick={this.shareOnTwitter}> tweet
                         <img src= {tweet} style = {logo} alt="logo"/> </button>
                        </a>                       
                        <button  id="new-quote" className  = "btn-primary" style= {newquote} onClick={this.handleClick}>New Quote</button>
                        
                    </div>
            </div>
        )
    }
}

export default quote

const quoteboxstyle = {
    position: "fixed",
    top: "20vh",
    display: "block",
    width: "40vw",
    height: "auto",
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "5vh",
    fontSize: "4vh",
    borderRadius: "10%",
    fontFamily: "cursive",
   };

const container ={
    display:"flex",
    flexDirection: "row",
    justifyContent: "spaceAround",
    width: "maxContent",

   
}

const newquote = {
    position: "absolute",
    right: "10%",
}

const logo = {
    height:"auto",
    width: "4vh",
}

// const tweetquote = {
//     position: "absolute",
//     left: "10%",
//     cursor: "pointer",
//     height: "5vh",
//     width: "10vh",
//     fontSize: "5vh",
// }


const quoteArray = [
    {
    quote:"Strive not to be a success, but rather to be of value.",
    author:"Albert Einstein"
    },
    {
    quote:"An unexamined life is not worth living.",
    author:"Socrates"      
    },
    {
    quote:"The best revenge is massive success.",
    author:"Frank Sinatra"     
    },
    {
    quote:"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author:"Jesus"      
    },   
    {
    quote:"Believe you can and you’re halfway there.",
    author:"Theodore Roosevelt"    
    },   
    {
    quote:"Happiness is not something readymade.  It comes from your own actions.",
    author:"Dalai Lama"    
    },   
];