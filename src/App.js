import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { customId, decrementId, incrementId, fetchData, reset } from './features/dataSlice'

function App() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.data)

  const renderImg = () => {
    return <img src={data.apiData.primaryImage} />
  }

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchData())}>Trigger Thunk</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementId())}>Next</button>
      <button onClick={() => dispatch(decrementId())}>Back</button>
      
      <input value={data.objectId} onChange={(e) => {
        console.log(e.target.value);
        dispatch(customId(Number(e.target.value)));
      }} />
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

export default App;
