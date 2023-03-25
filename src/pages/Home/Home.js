import { useBrowser } from '../../context/browser-context';
import './home.css';
export function Home() {

  const {name , browserDispatch} = useBrowser();

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  const handleNameChange =(event) => {
    
    if(event.key === "Enter" && event.target.value.length > 0){
      browserDispatch({
        type: "NAME",
        payload: event.target.value
      })
      localStorage.setItem("name",event.target.value);
    }
  }

  return (
    <div className="home-container d-flex direction-column align-center lg-gap">
        <h1 className='main-heading'>Browser Extension 2.0</h1>
        <div className="user-details d-flex direction-column gap">
            <span className="heading-1">Hello , Whats your name ?</span>
            <form onSubmit={handleFormSubmit}>
                <input required className="input" onKeyPress={handleNameChange}/>
            </form>
        </div>
    </div>    
  )
}

