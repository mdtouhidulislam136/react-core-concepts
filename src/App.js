
import './App.css';
 
const styles = {
  color: 'black',
  backgroundColor: 'aquamarine',
  borderRadius: '20px',
  shadowColor: 'blue',
  border: '2px solid blue'
}

function App() {

  return (
    <div className="App">
      <Counter name="robin"></Counter>
      <Counter name="robin"></Counter>
      <Counter name="robin"></Counter>
      <Counter name="robin"></Counter>
     
    </div>
  );

  function Counter(props) {
    return(
      <div>
        <h1 style={styles} >  Hi my Dear,</h1>
        <h2 style={styles}>{props.name}</h2>
      </div>
      
      
    )

  }


}



export default App;




