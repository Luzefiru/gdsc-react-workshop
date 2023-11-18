function CreateForm({
  description,
  setDescription,
  dueDate,
  setDueDate,
  handleChange,
  handleSubmit,
}) {
  return (
    <form className="todo-form">
      <div>
        <label htmlFor={description}>Description:</label>
        <input
          value={description}
          id="description"
          onChange={(e) => {
            handleChange(e, setDescription);
          }}
        />
      </div>
      <div>
        <label htmlFor={dueDate}>Due Date:</label>
        <input
          value={dueDate}
          id="dueDate"
          onChange={(e) => {
            handleChange(e, setDueDate);
          }}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
}

export default CreateForm;
