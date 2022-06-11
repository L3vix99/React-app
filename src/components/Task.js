import React from 'react';
import TaskList from './TaskList';

const Task = (props) => {

    const style = {
        color: "red",
    }
    
    const {text, date, id, active, important, finishDate} = props.task;

    if(active) {
    return (  
     <div>
         <p>
         <strong style = {important ? style : null}>{text}</strong> - do:  <span>{date}  </span>
        
         <button onClick={() => props.change(id)}>Zostało Zrobione</button>
        <button style={{margin: 10}} onClick={()=> props.delete(id)}>X</button>
         </p>

         
     </div>
);
} else {

    const finish = new Date(finishDate).toLocaleString();
    return (
        <p>
        <strong>{text}</strong><em>(zrobić do {date} )
        </em><br />
        - potwierdzenie wykonania:  <span>{finish}</span>
       
        
        <button style={{margin: 10}} onClick={()=> props.delete(id)}>X</button>
        </p>
    
    )
}
} 

 
export default Task;