import './App.css';
import React,{useEffect, useState} from 'react';
import {Container,Col,Row} from 'react-bootstrap'
import {readData} from './components/services'
import {TaskList} from './components/TaskList'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AddTask} from './components/AddTask'

function App() {
  const [tasks,setTasks]=useState([])
  useEffect(() =>{
    readData('/todos',setTasks)
},[])

 /* const readData=async (url) => {
    try{
      const resp = await axios.get(url)
      setTasks(resp.data)
    }catch(err){
      console.log(err)
    }
    
}*/
//console.log(tasks)
  return (
    <Container className="content">
      <Row >
        <Col>
          <h1>To-Do List</h1>
          <TaskList tasks={tasks}/>
          <AddTask setTasks={setTasks}/>
        </Col>
      </Row>
      
      
    </Container>
  );
}

export default App;
