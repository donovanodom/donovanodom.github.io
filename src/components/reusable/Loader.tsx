import { MoonLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='fixed top-1/2 left-1/2'>
      <MoonLoader size={30}/> 
    </div>
  )
}

export default Loader