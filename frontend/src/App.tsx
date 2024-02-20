import logo from '../src/assets/OWDN6985.jpg';
// import  Link  from 'react-router-dom';

function App() {
  return (
    <>
      <div className = " bg-white h-screen w-screen">
        <nav className = "flex justify-between w-full p-5">
          <div className = 'flex items-center gap-4'>
            <img src = { logo } alt="" className = 'w-10 h-10' />
            <h3> CasaSwap </h3>
          </div>
          <div className = ' flex items-center gap-6' >
            <a href = '/'>
              Pricing
            </a>
            <a href = "/">
              About Us
            </a>
            <button>
              LOG IN
            </button>
            <button>
              REGISTER FOR FREE
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default App
 