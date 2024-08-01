import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
          <h1>My Projects</h1>
          <ul>
              <Link to="food-feedback">Food Feedback</Link>
              <li>PhoneBook</li>
              <li>CV Application</li>
          </ul>
      </div>
    </>
  )
}

export default App;
