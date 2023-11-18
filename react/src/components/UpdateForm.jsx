function UpdateForm(
  idToUpdate,
  setIdToUpdate,
  newDescription,
  setNewDescription,
  newDueDate,
  setNewDueDate,
  handleChange,
  updateTodo
) {
  console.log('what?', idToUpdate);

  return (
    <form className="todo-form">
      <div>
        <label htmlFor={idToUpdate}>ID to Update:</label>
        <input
          value={idToUpdate}
          id="idToUpdate"
          onChange={(e) => {
            handleChange(e, setIdToUpdate);
          }}
        />
      </div>
      <div>
        <label htmlFor={newDescription}>New Description:</label>
        <input
          value={newDescription}
          id="newDescription"
          onChange={(e) => {
            handleChange(e, setNewDescription);
          }}
        />
      </div>
      <div>
        <label htmlFor={newDueDate}>New Due Date:</label>
        <input
          value={newDueDate}
          id="newDueDate"
          onChange={(e) => {
            handleChange(e, setNewDueDate);
          }}
        />
      </div>
      <button type="button" onClick={updateTodo}>
        Update Todo
      </button>
    </form>
  );
}

export default UpdateForm;
