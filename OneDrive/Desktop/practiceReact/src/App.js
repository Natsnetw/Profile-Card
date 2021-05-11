import logo from "./images/logo.svg"
import mockup from "./images/illustration-mockups.svg"
import './App.css';

function App() {
  return (
   <>
      <header>
      <img src={logo} alt="logo"/>
      </header>
      <main>
         <img src={mockup} alt="mockup"/>
         <div className="content">
           <h2>Build the community your fans will love</h2>
           <p>We are excited to announce that we are in the process of switching all reaction buffers to be BSA-free. 
             Beginning April 2021, we will be gradually transitioning to buffers containing Recombinant Albumin (rAlbumin)
              for restriction enzymes and some DNA modifying enzymes. </p>
              <button>Register</button>
         </div>

      </main>
      <footer>
      <i class="fab fa-facebook-f"></i>
      </footer>

   </>

  );

}

export default App;
