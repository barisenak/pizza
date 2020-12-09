import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// import Input from "./Input";

const ingridients = ["Beef", "Pork", "Cheese", "Tomato", "Olives", "Chicken"];

const WithRedux = () => {
  const numberFromRedux = useSelector((state) => {
    return state.number;
  });

  const dispatch = useDispatch();

  const actionCounter = {
    type: "COUNTER",
  };

  const actionMinus = {
    type: "MINUS",
  };

  const counter = () => {
    dispatch(actionCounter);
  };

  const minus = () => {
    dispatch(actionMinus);
  };

  const func = (event) => {
    return event.target.checked ? counter() : minus();
  };

  return (
    <div className="App">
      {ingridients.map((item) => {
        return (
          <div>
            <input
              type="checkbox"
              text={item}
              onChange={(event) => func(event)}
            />
            <span>{item}</span>
          </div>
        );
      })}
      {numberFromRedux > 5 && <p>You can't choose more than 5 items!</p>}
    </div>
  );
};

export default WithRedux;
