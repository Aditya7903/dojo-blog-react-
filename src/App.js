
import './App.css';

function App() {
  const title ='Welcome to my new blog';
  const likes =50;
  // const person = {name:'yosh', age:30};
  const link ="http://www.google.com";
  return (
    <div className="App">
     <div className='content'>
      <h1>{title}</h1>
      <p>liked {likes} times</p>
      {/* <p>{person}</p> */}
      <a href={link}>google site</a>
     </div>
    </div>
  );
}

export default App;
