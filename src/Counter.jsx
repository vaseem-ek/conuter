import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,addVal } from './redux/countSlice';

function Counter() {

  const [val,setVal]=useState(0)

  const {count}=useSelector((state)=>state.counterReduce)
  console.log(count);

  const dispatch=useDispatch()
  
  return (
    
    <>
    <div className='w-75 border rounded sahdow'>
        <h1 className='text-danger text-center mt-5'>Counter</h1>
        <h4 className='text-center text-light'>{count}</h4>
        <div className='d-flex justify-content-around my-5'>
            <button className='btn btn-success' onClick={()=>{dispatch(increment())}}>increase</button>
            <button className='btn btn-info' onClick={()=>{dispatch(reset())}}>reset</button>
            <button className='btn btn-danger' onClick={()=>{dispatch(decrement())}}>decrease</button>
        </div>
        <div className='my-3 d-flex p-1'>
          <input type="number" className='form-control mx-2'onChange={(e)=>{setVal(Number(e.target.value))}} />
          <button className='btn btn-success' onClick={()=>dispatch(addVal(val))}>send</button>


        </div>

    </div>
       
  
    
    </>
  )
}

export default Counter
