import React from 'react'
import {ListGroup} from 'react-bootstrap'


export const TaskList=({tasks})=>{
  return (
    <ListGroup>
        {tasks.map(obj=>
             <ListGroup.Item key={obj.id} className="item">
                <span className="holder">
                    <i className="fa-solid fa-circle-check text-light"></i>
                    {obj.name}
                    <i class="fa-solid fa-trash-can-arrow-up text-danger "></i>
                </span>
               
            </ListGroup.Item>
            )}
    </ListGroup>
  )
}
