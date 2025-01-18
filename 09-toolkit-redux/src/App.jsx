import { useDispatch, useSelector } from 'react-redux';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import { decrement, increment, incrementBy } from './store/slices/counter';
import './App.css';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispath = useDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2 className="text-center text-2xl mt-6">
        Counter: <span>{counter}</span>
      </h2>
      <div className="flex flex-col items-center justify-center space-y-2 mt-[40px]">
        <button onClick={() => dispath(increment())}>Increment</button>
        <button onClick={() => dispath(decrement())}>Decrement</button>
        <button onClick={() => dispath(incrementBy(2))}>Increment by 2</button>
      </div>
    </>
  );
}

export default App;
