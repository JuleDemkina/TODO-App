import Task from "../Task/Task";

const TaskList = ( {todos, onDeleted} ) => {

  const elements = todos.map( (item) => {

    const { id, ...itemProps} = item;
    return (
        <Task 
          {...itemProps} 
          key = {id}
          onDeleted={() => onDeleted(id)}

        />
    )
  })


  return (
    <ul className="todo-list">
      {elements}
    </ul>
  )
}

export default TaskList;