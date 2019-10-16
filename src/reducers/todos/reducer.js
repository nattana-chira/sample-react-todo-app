import { actionTypes } from "./actions";

const initialState = {
  todos: [
    {
      text: "First todo item"
    }
  ],
  input: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TODO_ADD:
      return addTodo(state, action);

    case actionTypes.TODO_DELETE:
      return deleteTodo(state, action);

    case actionTypes.INPUT_CHANGE:
      return changeInput(state, action);

    default:
      return state;
  }
}

function addTodo(state, action) {
  return {
    ...state,
    todos: [
      ...state.todos,
      {
        text: action.todo
      }
    ]
  };
}

function deleteTodo(state, action) {
  return {
    ...state,
    todos: state.todos.filter((todo, index) => index !== action.index)
  };
}

function changeInput(state, action) {
  return {
    ...state,
    input: action.input
  };
}

export default reducer;
