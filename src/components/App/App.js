import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns/formatDistanceToNow';

import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'
import './App.css'

export default class App extends Component {

  maxId = 5;

  state = {
    todoData: [
      {
        description: "Barely get out of bed",
        createdTime: (formatDistanceToNow(new Date(2023, 6, 2))),
        id: 1
      },
      {
        description: "Crying while teaching React",
        createdTime: (formatDistanceToNow(new Date())),
        classNames: 'completed',
        id: 2
      },
      {
        description: "Drinking beer ",
        createdTime: (formatDistanceToNow(new Date(2024, 5, 28))),
        id: 3
      }
    ]
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArr = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)]

      return {
        todoData: newArr
      }
    })
  }

  addItem = (text) => {
    console.log('hehe', text)
    const newItem = {
      description: text,
      createdTime: (formatDistanceToNow(new Date(2023, 6, 2))),
      id: this.maxId++
    };

    this.setState(({ todoData }) => {

      const newArr =[
        ...todoData,
        newItem
      ]

      return {
        todoData: newArr
      }
    })

  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList 
            todos={this.state.todoData}
            onDeleted={ this.deleteItem}
  
          />
          <Footer />
  
        </section>
        
      </section>
    )

  }
}

