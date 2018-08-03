import React, { Component } from 'react';
import './index.css';
class Square extends React.Component{
    render(){
        return (
            <button className="square" onClick={()=>this.props.clickEvent()} >
                {this.props.value}
            </button>
        )
    }
}
export default Square