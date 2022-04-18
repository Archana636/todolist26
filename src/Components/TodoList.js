import React, { Component,useState,useEffect } from 'react';
import TodoItem from './TodoItem';
import './component.css';

class TodoList extends React.Component {
    constructor(props){
      super(props);
    }
    componentDidUpdate(){
      // console.log(this.props.items)
    }
    render() {
    return (  
    <div>
      <div>
        {this.props.items.map(item => (
        <TodoItem id={item.id} status={item.status} task={item.task} deleteItem={this.props.deleteItem} markItemComplete={this.props.markItemComplete} />
        ))} 
        
      </div>
    </div>
        
    );
  } 
}

export function Todoitem2(props){
  const [value,setValue] = useState('');
  const [list,setList] = useState([]);

  function showNumber(num){
    return 25
  }

  function handleChange(e){
    const {value} = e.target;
    // console.log('Hey input is changesd',value)
    setValue(value);
    
  }
  function addItem(){
    setList(prevValue=>[...prevValue,value]);
  }


  useEffect(()=>{
    console.log('1. Their is change in component')
  })
  useEffect(()=>{
    console.log('Hey, This component just mounted')
  },[])
  useEffect(()=>{
    console.log('Item added in list')
  },[list])


  return (
    <div>Hello All!
      <h1>value:{value}</h1>
      <input onChange={handleChange}/>
      <button onClick={addItem}>Add</button>

      <ul>
        {list.map((value,i)=><li key={ i}>{value}</li>)}
      </ul>
    </div>
  )
}


export {TodoList as default};