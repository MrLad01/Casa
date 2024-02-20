import logo from '../src/assets/OWDN6985.jpg';
// import  Link  from 'react-router-dom';

function App() {
  return (
    <>
      <div className = " bg-white h-screen w-screen">
        <nav className = "flex justify-between w-full px-7 py-4" >
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
              Log In
            </button>
            <button>
              Register For FREE
            </button>
          </div>
        </nav>
        <div className=' py-32 w-full mr-auto ml-auto grid'>
          <p className='text-center  text-3xl font-semibold'> See more of the world without breaking the bank by joining <br /> Our top home exchange community globally.</p>
          <div className='mr-auto ml-auto py-12 flex '>
            <input type="text" className=' w-[340px] border p-4 rounded-s-2xl ' placeholder= 'What destination interests you?' />
            <button className = 'border p-4 pr-7 rounded-e-2xl' > Search </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
 