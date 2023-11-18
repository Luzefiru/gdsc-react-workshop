function TodoCard({ description, dueDate, id, deleteTodo }) {
  const formattedDueDate = new Date(dueDate).toLocaleDateString();

  return (
    <li>
      <div className="todo-card">
        <p>ID: {id}</p>
        <p>Description: {description}</p>
        <p>Due date: {formattedDueDate}</p>
        <div>
          <button
            onClick={() => {
              deleteTodo(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoCard;
