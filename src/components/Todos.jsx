import useTodos from '../hooks/useTodos'
import EachTodo from './EachTodo';
import useAddTodo from '../hooks/useAddTodo';

export default function Todos() {
  const { todos, setTodos, error } = useTodos();
  const { newTodo, handleAddTodo, handleInputChange } = useAddTodo();

  if( error ) return <p>{ error.message }</p>;

  // console.log(todos?.map(todo => todo));

  const handleRemoveTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }

  return (
    <div>
      <h2>Todos</h2>

      <h4>Total Task: {todos?.length}</h4>

      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new item name"
      />
      <button onClick={() => handleAddTodo(setTodos)}>Add a Todo</button>

      <ul>
        {
          todos?.map(todo =>
            <EachTodo
              key={todo.id}
              eachTodo={todo}
              handleRemove={handleRemoveTodo}
            />
          )
        }
      </ul>
    </div>
  )
}