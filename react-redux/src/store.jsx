import { createStore } from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, task: [...state.task, action.payload] };

    case DELETE_TASK:
      const updatedTask = state.task.filter((_, index) => index !== action.payload);
      return { ...state, task: updatedTask };

    default:
      return state;
  }
};

// create redux store using reducer
const store = createStore(taskReducer);

// log the initial state
console.log("Initial state:", store.getState());

export default store;
