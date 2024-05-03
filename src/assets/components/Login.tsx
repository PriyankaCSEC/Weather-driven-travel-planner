
import { Link } from 'react-router-dom'



const Login = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col gap-4 items-center justify-center m-44 bg-slate-400 h-[300px] rounded-xl '>
        <h1 className='text-4xl font-bold'> LOGIN</h1>
      <p className='flex flex-row gap-1'>Username:
      <input type="text" className='bg-gray-300' /></p>
      <p className='flex flex-row gap-1'>Password:
      <input type="text" className='bg-gray-300' /></p>
      <button className='bg-orange-400 py-2 px-9 font-bold rounded-lg flex items-center'><Link to="/LandingPage" >Login</Link></button>
      </div>
    </div>
  )
}

export default Login
