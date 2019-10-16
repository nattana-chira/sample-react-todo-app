export const actionTypes = {
    TODO_ADD: "TODO_ADD",
    TODO_DELETE: "TODO_DELETE",
    INPUT_CHANGE: "INPUT_CHANGE"
  };
  
  export const addTodo = todo => ({
    type: actionTypes.TODO_ADD,
    todo
  });
  
  export const deleteTodo = index => ({
    type: actionTypes.TODO_DELETE,
    index
  });
  
  export const changeInput = input => ({
    type: actionTypes.INPUT_CHANGE,
    input
  });
  