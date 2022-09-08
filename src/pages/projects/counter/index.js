import React, { useState } from "react";
import { Card } from "react-bootstrap";

const ACTION_TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [variation, setVariation] = useState(1);

  const counterReducer = (action) => {
    switch (action.type) {
      case ACTION_TYPE.INCREMENT:
        setCounter((prev) => prev + action.payload);
        break;
      case ACTION_TYPE.DECREMENT:
        setCounter((prev) => prev - action.payload);
        break;

      default:
        break;
    }
  };

  const dispatchAction = (type) => {
    if (variation) counterReducer({ type: type, payload: parseInt(variation) });
    else counterReducer({ type: type, payload: 1 });
  };

  return (
    <Card style={{ paddingTop: "25px" }}>
      <div className="container">
        <label htmlFor="variation" className="d-block">
          Variation Value(only integer)
        </label>
        <input
          type="number"
          name="variation"
          id="variation"
          className="form-control"
          value={variation}
          onChange={(e) => {
            setVariation(parseInt(e.target.value));
          }}
        />
        <div className="number-container m-5">{counter}</div>
        <div className="d-flex justify-content-around align-items-center">
          <div className="btn-container w-25">
            <button
              className="btn btn-success w-100"
              onClick={() => dispatchAction(ACTION_TYPE.INCREMENT)}
            >
              +
            </button>
          </div>
          <div className="btn-container w-25">
            <button
              className="btn btn-danger w-100"
              onClick={() => dispatchAction(ACTION_TYPE.DECREMENT)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Counter;
