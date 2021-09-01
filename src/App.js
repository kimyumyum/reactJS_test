import logo from './logo.svg';
import './App.css';

function App() {

  let posts ='강남';
  function 함수(){
    return 100
  }
  return (
    <div className="App">
     <div className="black-nav">
      <div style ={{color: 'blue', fontSize: '30px'}}>테스트 blog</div>
     </div>
     <img src= {logo} />
     <h4>{ 함수() }</h4>
    </div>
  );
}

export default App;
