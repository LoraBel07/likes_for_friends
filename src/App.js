import './App.css';
import { Heart } from './Heart';
import { Likes } from './Likes';
import Person from './Person';

function App() {
  return (
    <div className='box'>
      <div className='one'>
      <Person herimg="https://images.pexels.com/photos/89779/girl-rustic-grass-meadow-89779.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" hername="Olivya" herage="24" city="Montreal"/>
      <Likes />
      </div>
      <div className='one'>
      <Person herimg="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" hername="Mia" herage="27" city="Tokio"/>
      <Likes />
      </div>
      <div className='one'>
      <Person herimg="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" hername="Natasha" herage="32" city="Moscow"/>        
      <Likes />  
      </div>
      <Heart />
    </div>
  );
}

export default App;
