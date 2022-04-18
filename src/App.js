import React, { Component } from 'react';
import './App.css';
import TodoItem from './Components/TodoItem';
import TodoList,{Todoitem2} from './Components/TodoList';

class App extends Component {
  
  constructor(){
      super();
      
      this.state={
          value:"",
          items:[],
          all:true,
          completed:false,
          active:false,
      }
      
      this.handleInput=(event)=>{
          this.setState({
              value:event.target.value
          })
      }
      
      this.handleAddItem=(event)=>{
          event.preventDefault();
          
          if(this.state.value==="")
              return; 
          
          const newItem={
              task:this.state.value,
              id: Date.now(),
              status:false
          }
          
          this.setState( (prevState)=>({
              items:prevState.items.concat(newItem),
              value: "",
              
          }))  
      }
      
      this.handleMarkItemComplete=(itemId)=>{
          
          const updatedItems= this.state.items.map(item =>{
              if(itemId === item.id)
                  item.status = !item.status;
              
              return item;
          })
          
          this.setState({
              items:[].concat(updatedItems)
          })       
      }

      this.handleItem=(itemId)=>{
          
          const updatedItems=this.state.items.filter(item=>{
              return item.id!==itemId    
          })
          
          this.setState({
              items:[].concat(updatedItems)
          })
      };
      this.componentDidUpdate=()=>{
          const x = this.state.items.filter(item=>!item.status);
      }
  }
  
  render() {
      
    //   const btn_style={
    //       marginLeft:"12px",
    //       marginBottom:"16px",
    //       width:"60px",
    //       padding:"9px",
    //     //      
          
    //   }style={btn_style}
      
    //   const input_style={
    //       width:"250px",
    //       padding:"9px",
    //       width: "70%",
    //       textalign: "center"
    //   }  
      
  return (
      <div className="container-fluid">
      <div className="row">
      
      <div className="col-md-4"></div> 
      <div className="col-md-4">
      <div className="body">
      <h2 className="heading">#todo</h2>  
       <Todoitem2/>
        <div className='btn1'>
        <button className={`${this.state.all ? 'blue':''} btn2`} onClick={()=>{this.setState(prevValue=>({...prevValue,all:true,active:false,completed:false}))}}>All</button>
        <button className={`${this.state.active ? 'blue1':''} btn3`} onClick={()=>{this.setState(prevValue=>({...prevValue,all:false,active:true,completed:false}))}}>Active</button>
        <button className={`${this.state.completed ? 'blue2':''} btn4`} onClick={()=>{this.setState(prevValue=>({...prevValue,all:false,active:false,completed:true}))}}>Completed</button>
        </div>  


      <div className="body2">
        <input className='add1' placeholder="add details" type="input" onChange={this.handleInput} value={this.state.value} />
        <button type="button" className="btn5" onClick={this.handleAddItem}>Add</button>
      </div>
        {/* <TodoList items={this.state.items} deleteItem={this.handleItem} markItemComplete={this.handleMarkItemComplete} /> */}
      {Boolean(this.state.all)&&<div>
        {this.state.items.map(item=><TodoItem
          key={item.id}
          id={item.id}
          task={item.task}
          status={item.status}
          markItemComplete={this.handleMarkItemComplete}
          />)}
      </div>}
      {Boolean(this.state.active)&&<div>
          <h1>Active</h1>
          {Boolean(!this.state.items.filter(item=>!item.status).length)&&<div>No active item found</div>}
          {this.state.items.filter(item=>!item.status).map(item=><TodoItem
          key={item.id}
          id={item.id}
          task={item.task}
          status={item.status}
          markItemComplete={this.handleMarkItemComplete}
          />)}
      </div>}
      {Boolean(this.state.completed)&&<div>
          <h1>Completed</h1>
          
          {Boolean(!this.state.items.filter(item=>item.status).length)&&<div>No completed item found</div>}
          {this.state.items.filter(item=>item.status).map(item=><TodoItem 
          key={item.id}
          id={item.id}
          task={item.task}
          status={item.status}
          markItemComplete={this.handleMarkItemComplete}
          deleteItem={this.handleItem}
          />)}
      </div>}
      </div>
      </div>
      
      
    </div>
    </div>
  );
}
}

export default App;




