import React, { Component } from 'react';
import './component.css';

class TodoItem extends Component {
    
    constructor(){
        super();
        
        this.onMarkItemComplete=(event)=>{
            console.log(event)
            this.props.markItemComplete(this.props.id)
        }
        
        this.onDeleteItem=(event)=>{
            this.props.deleteItem(this.props.id);
            
        }  
    } 
    componentDidMount(){
        // console.log('Delete status of item:',this.props.deleteStatus)
        console.log('delete function is:',this.props.deleteItem)
    } 
    render() {
        const itemClass = "inCompleted-" + (this.props.status ? "done" : "undone");
     
    return (
        <div className="container-fluid">
        <div className="item">
        
        <input type="checkbox" onChange={this.onMarkItemComplete} checked={this.props.status}/>
        <span className={itemClass}> {this.props.task} </span> 
        
        {Boolean(this.props.deleteItem)&&    <button style={{float:'right', marginTop:"-4px"}} type="button" className="btn btn-danger btn-sm" onClick={this.onDeleteItem}>delete</button>}        
        </div>
        </div>
    );
  }   
}
export default TodoItem;