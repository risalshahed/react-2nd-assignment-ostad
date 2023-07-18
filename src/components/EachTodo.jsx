export default function EachTodo({ eachTodo, handleRemove }) {
  // console.log(eachTodo);
  const { id, title, completed } = eachTodo;

  return (
    <div>
      <li className="each-todo">
        <div>{title}</div>
        <button className="remove" onClick={() => handleRemove(id)}>X</button>
      </li>  
    </div>
  )
}