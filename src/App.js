import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
import { mult, divide } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const myState2 = useSelector((state) => state.multiAndDivi);

  const dispatch = useDispatch();

  return (
    <>
    <div className="container">
      <h1>Welcome to My Counter</h1>
      <div>
        <button
          title="Increment"
          onClick={() => {
            dispatch(incNumber());
          }}
        >
          +
        </button>
        <input type="text" value={myState} />
        <button
          title="Decrement"
          onClick={() => {
            dispatch(decNumber(5));
          }}
        >
          -
        </button>
      </div>
    </div>


    <div>
      <h1>Welcome to My Calculator</h1>
      <div>
        <button
          title="Multiply"
          onClick={() => {
            dispatch(mult(5));
          }}
        >
          *
        </button>
        <input type="text" value={myState2} />
        <button
          title="Divide"
          onClick={() => {
            dispatch(divide(5));
          }}
        >
          /
        </button>
      </div>
    </div>
    </>
  );
}

export default App;
