import { Link, useParams } from "react-router-dom";  
import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Single = props => {

  const { store } = useGlobalReducer()


  const { theId } = useParams()
  const singleTodo = store.todos.find(todo => todo.id === parseInt(theId));

  return (
    <div className="container text-center">
      <h1 className="display-4">Todo: {singleTodo?.title}</h1>
      <hr className="my-4" /> 

    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Single.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
