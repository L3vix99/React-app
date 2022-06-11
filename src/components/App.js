import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';


import './App.css';

class App extends Component {
  counter = 6;
  state = {
    tasks: [
      {
        id: 0,
        text: "Zagrać wreszcie w Wiedzmina 3",
        date: "2022-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {id: 1 , text: "Zrobić zakupy ", date: "2022-11-12",important: false, active:true, finishDate:null},
      {id: 2 , text: "nauka js i reacta ", date: "2022-10-19",important: false, active:true, finishDate:null},
      {id: 3 , text: "Wyjść z psem na spacer ", date: "2022-09-18",important: false, active:true, finishDate:null},
      {id: 4 , text: "Projekt na studia ", date: "2022-12-02",important: false, active:true, finishDate:null},
      {id: 5 , text: "Nauka programowania (Ogólna) ", date: "2022-07-02",important: false, active:true, finishDate:null},
    ]
  }

  deleteTask = (id) => {

// PIERWSZA METODA USUWANIA 

 // console.log("delate elementu id" + id);
//const tasks = [...this.state.tasks];
 // console.log(tasks);
 // const index = tasks.findIndex(task => task.id === id);
 // tasks.splice(index, 1);
 // console.log(tasks); 


 //DRUGA METODA USUWANIA 

 let tasks = [...this.state.tasks];
 //console.log(tasks);
 tasks = tasks.filter(task => task.id !== id);
 //console.log(tasks);
  this.setState({
  tasks: tasks
   })
  }



  changeTaskStatus = (id) => {
    console.log("change w stanie elementu o id" + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task=> {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })

    this.setState({
      tasks: tasks
    })

  }

  addTask = (text, date, important) => {
    //console.log("dodajemy obiekt");
    const task = { 
      id: this.counter,
      text: text, //tekst z inputa 
      date: date, //tekst z inputa
      important: important, //wartość z inputa 
      active: true,
      finishDate: null,
    }

    this.counter++;
    console.log(task, this.counter);


    this.setState(prevState => ({ 
      tasks: [...prevState.tasks, task]

    }))
    return true
  }

  
  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask  add={this.addTask}/>
        <TaskList tasks={this.state.tasks}
         delete={this.deleteTask} change={this.changeTaskStatus}/>
     
      </div>

    );
  }
}

export default App;
