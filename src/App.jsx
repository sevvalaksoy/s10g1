import React from 'react';
import { useReducer } from 'react';
import { initialState } from './store/reducers.jsx';
import reducer from './store/reducers.jsx';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  showTotal,
  clearMemory,
  memoryAdd,
  showNumber,
  recallMemory,
} from './store/actions';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';

function App() {
  const [balance, dispatch] = useReducer(reducer, initialState);

  function eventHandlerNumber(nmbr) {
    dispatch(showNumber(nmbr));
  }
  function eventHandlerOperator(operator) {
    dispatch(changeOperation(operator));
  }
  function eventHandlerClearHistory(e) {
    dispatch(clearDisplay(e));
  }
  function eventHandlerTotal(e) {
    dispatch(showTotal(e));
  }
  function eventHandlerClearMemory(e) {
    dispatch(clearMemory(e));
  }
  function eventHandlerAddMemory(e) {
    dispatch(memoryAdd(e));
  }
  function eventHandlerRecallMemory() {
    dispatch(recallMemory());
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={balance.display} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {balance.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {balance.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton
                value={'M+'}
                onClick={() => eventHandlerAddMemory()}
              />
              <CalcButton
                value={'MR'}
                onClick={() => eventHandlerRecallMemory()}
              />
              <CalcButton
                value={'MC'}
                onClick={() => {
                  eventHandlerClearMemory(0);
                }}
              />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={() => eventHandlerNumber(1)} />
              <CalcButton value={2} onClick={() => eventHandlerNumber(2)} />
              <CalcButton value={3} onClick={() => eventHandlerNumber(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => eventHandlerNumber(4)} />
              <CalcButton value={5} onClick={() => eventHandlerNumber(5)} />
              <CalcButton value={6} onClick={() => eventHandlerNumber(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => eventHandlerNumber(7)} />
              <CalcButton value={8} onClick={() => eventHandlerNumber(8)} />
              <CalcButton value={9} onClick={() => eventHandlerNumber(9)} />
            </div>
            <div className="row">
              <CalcButton
                value={'+'}
                onClick={() => eventHandlerOperator('+')}
              />
              <CalcButton value={0} onClick={() => eventHandlerNumber(0)} />
              <CalcButton
                value={'-'}
                onClick={() => eventHandlerOperator('-')}
              />
            </div>
            <div className="row">
              <CalcButton
                value={'*'}
                onClick={() => eventHandlerOperator('*')}
              />
              <CalcButton
                value={'/'}
                onClick={() => eventHandlerOperator('/')}
              />
              <CalcButton
                value={'CE'}
                onClick={() => eventHandlerClearHistory(0)}
              />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={(e) => eventHandlerTotal(e)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
