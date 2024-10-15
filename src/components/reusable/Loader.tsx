import { MoonLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='fixed top-[calc(50%-15px)] left-[calc(50%-15px)]'>
      <MoonLoader size={30}/> 
    </div>
  )
}

export default Loader