import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'

export const AddTask=({setTasks})=> {
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [success,setSuccess]=useState(false)
    
    

    const sendData= async ()=>{
        const url='/todos'
        const newTask={name: name,description: description}
        try {
            const resp=await axios.post(url,newTask)              
            const data=await resp.data
            console.log(data)
            resp.status===200 ? setSuccess(true):setSuccess(false)
         
          }catch(e){
            //console.log('write-catch:',Object.keys(e))
            //console.log('write-catch:',e.response)
            console.log('write-catch:',Object.keys(e.response))
          }
    }

console.log(name,description,success)
  return (
    <Form className="border  p-1">
    <Form.Group className="mb-3" >
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="task name..." value={name} onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" onClick={sendData} disabled={!name}>Add</Button>
  </Form>
  )
}
