
import {Component} from 'react'
import './Task.css'

export default class Task extends Component {

  state = {
    completed: false
  }

  onLabelClick = () => {
    this.setState(( {completed} ) => {
      return {
        completed: !completed
      }
    })
  
  }
  render() {

    const { description, createdTime, onDeleted } = this.props;
    const {completed} = this.state;

    let classNames = ''

    if (completed) {
      classNames = 'completed'
    }

    return (
      <li className={classNames} onClick={ this.onLabelClick}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description" >{ description }</span>
          <span className="created">{createdTime}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"
                onClick={onDeleted}></button>
      </div>
    </li>
    )

  }

}
