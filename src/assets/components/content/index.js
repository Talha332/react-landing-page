import React, {Component} from 'react';
import '../content/content.css';

class Content extends React.Component{
    render(){
    return( 
     <div className="content">
    <h1>{this.props.title}</h1>
    <p>{this.props.description} </p>
  </div>
    
    )

    }
}
export default Content;