import './Task.css'


const Task = ({liState, description, createdTime }) => {
   
  return (
    <li className={liState} >
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        <span className="description" >{ description }</span>
        <span className="created">{createdTime}</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  </li>
  )
}

export default Task;