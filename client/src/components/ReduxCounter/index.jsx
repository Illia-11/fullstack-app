import { connect } from "react-redux";
import {
  increment,
  decrement,
  setStep,
} from "../../store/slice/counterSlice";

const ReduxCounter = (props) => {
  console.log(props);
  const { count, step, increment, decrement, setStep, setStepHandler } = props;

  // const handleAddStep = () => {
  //   const incrementAction = increment();

  //   dispatch(incrementAction);
  // };
  // const handleSubtractStep = () => {
  //   dispatch(decrement());
  // };

  const handleChangeStep = ({ target: { value } }) => {
    setStep(value);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>Add step</button>
      <button onClick={() => decrement()}>Subtract step</button>
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

// функція яка пояснює яку частинку редаксівського стану під'єднуємо до компонента
const mapStateToProps = (state) => {
  // об'єкт який повертається буде додано до пропсів компонента
  return state.counter;
};

// mapDispatchToProps може бути вказаний декількома шляхами
/*
  1 спосіб - функція, яка приймає dispatch як аргумент та повертає обʼєкт з функціями яякі будуть передані в пропси елементу аналогічно тому як передавався стан у mapStateToProps
*/
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     setStep: (newStep) => dispatch(setStep(newStep)),
//     setStepHandler: ({ target: { value } }) => dispatch(setStep(value)),
//   };
// };

/*
  2 спосіб - обʼєкт в якому властиивостями мають бути екшн креатори
*/
const mapDispatchToProps = {
  increment,
  decrement,
  setStep,
}

// withProps - Компонент вищого порядку, який дозволить під'єднати редакс до компоненту
// const withProps = connect(mapStateToProps);

// // тут вже буде компонент якому в пропси кинули те що mapStateToProps передав
// const CounterWithRedux = withProps(ReduxCounter);

// export default CounterWithRedux;

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
