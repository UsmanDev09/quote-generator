import React, {Component} from 'react';
class Main extends Component{
        constructor(props){
            super(props);
           
            this.state = {
                index: 0
            }
            this.fetchQuote = this.fetchQuote.bind(this);
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
            return response.json();
        })
        .then(function(data) {
          
            document.getElementById("text").innerHTML = data[0].text;
            document.getElementById("author").innerHTML = data[0].author;
        });
        }
    
        fetchQuote(){
            var me = this;
            console.log(this.state.index)
            this.setState({
                index: this.state.index + 1
            });
            fetch("https://type.fit/api/quotes")
            .then(function(response) {
            return response.json();
        })
        .then(function(data) {
           console.log(me.state.index);
            document.getElementById("text").innerHTML = data[me.state.index].text;
            document.getElementById("author").innerHTML = data[me.state.index].author;
        });         
        }
    render(){
       

      

        return(
           
            <div id="quote-box" style={{display:"flex",flexDirection:"column",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center"}}>
                <div id="text"></div>
                <div id= "author"></div>
                <button id ="new-quote" onClick = {this.fetchQuote}>NEXT QUOTE</button>
                <button id="tweet-quote"><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></button>
            </div>
          

        )
    }
}
export default Main;