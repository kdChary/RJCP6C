import './index.css'

const TodoItem = props => {
  const {todoItems, deleteTodo} = props
  const {title, id} = todoItems

  const onDeleteClicked = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-list">
      <p className="todo-title">{title}</p>
      <button type="button" onClick={onDeleteClicked} className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
