import React, { Component } from 'react'
import Quote from './Quote';

export class QuoteBox extends Component {

    render() {
        return (
            <div style = {flexRow} id = "quote-box">
                <p style = {titlestyle}> Random Quote Generator </p>
                <Quote />
            </div>
        )
    }
}

   const flexRow = {
    display: "flex",
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    overflow: "auto",
    backgroundColor: "Blue",
    flexDirection: "row",
    justifyContent: "center",
   };

   const titlestyle = {
    fontFamily: "fantasy",
    position:"fixed",
    top:"5vh",
    color: "rgb(11, 11, 105)",
    fontSize: "8vh"
   }


    
  


export default QuoteBox

