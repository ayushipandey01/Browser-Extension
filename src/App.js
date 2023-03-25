import { useEffect } from 'react';
import './App.css';
import { BrowserProvider, useBrowser } from './context/browser-context';
import { images } from './db/images';
import { Home , Task} from './pages';

const index = Math.floor(Math.random() * 21);
const bgImage = images[index].image;

function App() {

  const {name , browserDispatch} = useBrowser();

  useEffect(()=>{
    const userName = localStorage.getItem("name");
    browserDispatch({
      type: "NAME",
      payload: userName
    })
  },[])

  return (
    <div className='app' style={{backgroundImage: `url("${bgImage}")`}}>
      {
        name ? <Task /> : < Home />
      }
                   
    </div>    
  );
}

export default App;
