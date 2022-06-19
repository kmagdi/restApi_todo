import mysql from 'mysql';
import {configDb} from '../configDb.js'
const db=mysql.createConnection(configDb)

export const tasks=(req,resp)=>{
    db.query('select * from todos order by timestamp desc',(err,result)=>{
        if(err)
            console.log('Hiba:',err)
        else{
            resp.send(result)
            
        }
    })
}

export const task=(req,resp)=>{
    const {id} = req.params
    db.query('select * from todos where id=?',[id],(err,result)=>{
        if(err)
            console.log('Hiba:',err)
        else{
            resp.send(result)
        }
    })
}

export const newTask=(req,resp)=>{
    console.log(req.body)
    const {name,description}=req.body
    console.log(name,description)
    db.query('insert into todos (name,description) values (?, ?)',[name,description], (err,result)=>{
        if(err)
            console.log('Hiba-insert:',err)
        else{
            resp.send({msg:'sikeres insert'})
        }
            
    })
}


export const updateTask=(req,resp)=>{
    const {id} = req.params
    db.query('update todos set status=!status where id=?',[id],(err,result)=>{
        if(err)
            console.log('Hiba-insert:',err)
        else{
            resp.send({msg:'sikeres update'})
        }
    })
}

export const deleteTask=(req,resp)=>{
    const {id} = req.params
    db.query('delete from todos where id=?',[id],(err,result)=>{
        if(err)
            console.log('Hiba-insert:',err)
        else{
            resp.send({msg:'sikeres törlés'})
        }
    })
}