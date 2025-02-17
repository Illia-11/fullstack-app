import { useReducer } from "react";

/*
  reducer - чиста функція яка використовується реактом для визначення нового стану
  приймає старе значення стану як 1 аргумент
  і обʼєкт екшена як 2 аргумент
  має завжди повертати нове значення стану на основі цих даних
*/
function reducer(state, action) {
  // тут буде логіка

  // по типу події взначаємо що саме робимо
  switch (action.type) {
    case "increment": {
      // генеруємо новий стан та повертаємо його як результат
      const newState = {
        ...state,
        count: state.count + state.step,
      };

      return newState;
    }
    case "setStep": {
      const newStep = isNaN(+action.payload) ? state.step : +action.payload;

      const newState = {
        ...state,
        step: newStep,
      };

      return newState;
    }
    default:
      return state;
  }
}

const initialState = {
  count: 0,
  step: 1,
};

const Counter = (props) => {
  /*
    state - поточний стан
    dispatch - функція зміни стану, приймає екшен (action)
  */
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddStep = () => {
    // setState(state.count + state.step);

    const action = {
      type: "increment",
    };

    // dispatch хоче прийняти екшн - обʼєкт у якому буде достатньо інформації для редюсера щоб зрозуміти як оновити стан
    dispatch(action);
  };

  const handleChangeStep = ({ target: { value } }) => {
    const action = {
      type: "setStep",
      payload: value,
    };

    dispatch(action);
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleAddStep}>Add step</button>
      <label>
        Step:{" "}
        <select value={state.step} onChange={handleChangeStep}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </label>
    </div>
  );
};

export default Counter;
