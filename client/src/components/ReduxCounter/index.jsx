import { connect } from "react-redux";

const ReduxCounter = (props) => {
  const { count, step, dispatch } = props;
  const handleAddStep = () => {
    const incrementAction = {
      type: "increment",
    };

    dispatch(incrementAction);
  };

  const handleSubtractStep = () => {
    const substractionAction = {
      type: "subtraction",
    };

    dispatch(substractionAction);
  };

  const handleChangeStep = ({ target: { value } }) => {
    const setStep = (payload) => ({
      type: "setStep",
      payload,
    });

    dispatch(setStep(value));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleAddStep}>Add step</button>
      <button onClick={handleSubtractStep}>Substract step</button>
      <label>
        Step:{" "}
        <select value={step} onChange={handleChangeStep}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </label>
    </div>
  );
};

// функція яка пояснює яку частинку редаксівського стану підʼєднуємо до компонента
const mapStateToProps = (state) => {
  // обʼєкт який повертається буде додано до пропсів компонента
  return state;
};

// withProps - Компонент вищого порядку, який дозволить підʼєднати редакс до компонента
const withProps = connect(mapStateToProps);

// тут вже буде компонент якому в пропси кинули те що mapStateToProps передав
const CounterWithRedux = withProps(ReduxCounter);

export default CounterWithRedux;
