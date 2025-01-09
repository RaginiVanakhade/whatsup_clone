import React from 'react'
import whatsupLogo from '../assets/whatsupLogo.jpg'
import { Link } from 'react-router-dom'
import { FaDownload} from 'react-icons/fa'

const Login = () => {
    function DownloadWhatsup() {
        console.log("download wp");
    }
  return (
   <>
   <div className='bg-amber-50 h-screen '>
    <div className='flex justify-end'>
        <button className='bg-green-400 p-4 m-6 rounded-3xl border-black border-solid flex gap-6' onClick={DownloadWhatsup}> Download
            <div className=''> <FaDownload/></div>
        </button>
    </div>
    <div className=' flex justify-center items-center'>
        <div className='bg-white shadow-2xl'>
             <div className='bg-green-200 md:m-10 sm:m-10 m-6 shadow-2xl p-2 h-96 w-96 text-center rounded-xl'>
                <div className='flex justify-center gap-2 m-2'>
                     <img src={whatsupLogo} alt="whatsupLogo" className='rounded-full' />
                </div><br />
        <Link to="/wphomepage">
        <button className='bg-green-400 w-20 hover:bg-green-600 p-2 rounded-xl text-white'>Login</button>
        </Link>
        <div>
            <h2 className='text-2xl m-6'>Login into whatsup web</h2>
        </div>
             </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Login