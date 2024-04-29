import {formatDistanceToNow} from 'date-fns/formatDistanceToNow';

import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'
import './App.css'

const App = () => {
  

  const todoData = [
    {
      description: "Barely get out of bed",
      createdTime: (formatDistanceToNow(new Date(2023, 6, 2))),
      id: 1
    },
    {
      description: "Crying while teaching React",
      createdTime: (formatDistanceToNow(new Date())),
      liState: 'completed',
      id: 2
    },
    {
      description: "Drinking beer ",
      createdTime: (formatDistanceToNow(new Date(2024, 5, 28))),
      id: 3
    }
  ]
  
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList todos={todoData}/>
        <Footer />

      </section>
      
    </section>
  )
}

export default App;
