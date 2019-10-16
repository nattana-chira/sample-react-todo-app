import { connect } from "react-redux";
import { getTodos, getInput } from "../../reducers/todos/selectors";
import { addTodo, deleteTodo, changeInput } from "../../reducers/todos/actions";
import TodoList from "./TodoList";

const mapStateToProps = state => ({
  todos: getTodos(state),
  input: getInput(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeInput: event => dispatch(changeInput(event.target.value)),
  handleAddTodo: input => {
    if (input.trim()) {
      dispatch(addTodo(input));
    }
    dispatch(changeInput(""));
  },
  handleDeleteTodo: key => dispatch(deleteTodo(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
