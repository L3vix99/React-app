import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done =   props.tasks.filter(task => !task.active);
    // 1 sposob sort
   // done.sort((a,b) => b.finishDate - a.finishDate)

   // 2 sposob sort (done)
    if (done.length >= 2){
   done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1
      }

      if (a.finishDate > b.finishDate) {
        return -1
      } 
      else {
        return 0
      }
   })}
   // active sort 
   if(active.length >= 2) {

     active.sort((a, b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

       if(a < b) return -1;
        
         if(a > b) return 1;

        return 0;
          
       })
      }
   
    //console.log(active, done);

    const activeTasks = active.map(task => <Task 
    key={task.id} task={task} delete={props.delete} change= {props.change} />);

    const doneTasks = done.map(task => <Task 
    key={task.id} task={task} delete={props.delete} change= {props.change} />); 
    return (  
        <>
        <div className='active'>
           <h1> Zadania do zrobienia </h1>
          {activeTasks.length > 0 ? activeTasks :
           <p>brak zadań, ale jesteś dobry ziom!</p>}
         
        </div>

        <hr />

        <div className='done'>
          <h3>Zadania zrobione <em>({done.length})</em></h3>
          {done.length > 4 && <span style = {{fontSize: "10px", color: "red"}}>Wyświetlone są jedynie 
         4 ostatnie zadania </span>}
          {doneTasks.slice(0, 4)}
         
        </div>
        </>
    );
}
 
export default TaskList;
