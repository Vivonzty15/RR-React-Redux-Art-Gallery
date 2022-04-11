import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { useEffect } from 'react';
import { customId, decrementId, incrementId, fetchData, reset } from './features/dataSlice'

const mapStateToProps = (state) => ({
  objectId: state.data.objectId
})

function App() {
  
  const dispatch = useDispatch()
  const data = useSelector(state => state.data)

  useEffect(() => {
    dispatch(fetchData())
  }, [data.objectId, dispatch])
  
  const renderImg = () => {
    return <img style={{height:'800px', width:'auto'}} src={data.apiData.primaryImage} />
  }

  return (
    <div className="App">
      <h1>React Redux Art Gallery</h1>
      <button onClick={() => dispatch(fetchData())}>Trigger Thunk</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementId())}>Next</button>
      <button onClick={() => dispatch(decrementId())}>Back</button>
      <div>
        <label>Custom art ID</label>
        <input value={data.objectId} onChange={(e) => {
          console.log(e.target.value);
          dispatch(customId(Number(e.target.value)));
        }} />
      </div>
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);
