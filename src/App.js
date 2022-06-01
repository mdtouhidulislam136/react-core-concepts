
import './App.css';
 
const styles = {
  color: 'black',
  backgroundColor: 'aquamarine',
  borderRadius: '20px',
  shadowColor: 'blue',
  border: '2px solid blue'
}

function App() {
const lists = ['robin', 'mahmudul', 'green', 'pink ', 'blue', 'yellow', 'black', 'white', 'aqua' , 'red'];
  return (

    
    <div className="App">
      {
        lists.map(list => <li>Name: {list}</li>)

      }

      {
        lists.map(list => <Counter name={list}></Counter>)
      }
      <Counter name={lists[1]}></Counter>
      <Counter name={lists[0]}></Counter>
      <Counter name={lists[2]}></Counter>
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




