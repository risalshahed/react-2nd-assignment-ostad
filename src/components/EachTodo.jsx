export default function EachTodo({ eachTodo, handleRemove, handleToggle }) {
  // console.log(eachTodo);
  const { id, title, completed } = eachTodo;

  return (
    <div>
      <li className="each-todo">
        <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</div>
        <button
          onClick={() => handleToggle(id)}
          style={{backgroundColor: completed ? 'green' : 'blue'}}
        >
          {completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button className="remove" onClick={() => handleRemove(id)}>X</button>
      </li>  
    </div>
  )
}