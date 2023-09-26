import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// import reducer from "./reducers/reducer";
import { actionCreators } from './state';

const Shop = () => {
    const dispatch = useDispatch();
    const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div className='container my-5'>
        <h2>ATM</h2>
        {/* <button className="btn btn-primary mx-2" onClick={()=>dispatch(actionCreators.withdrawMoney(10))}>-</button>
        Add this item to cart
        <button className="btn btn-primary mx-2" onClick={()=>dispatch(actionCreators.depositMoney(10))}>+</button> */}



        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(10)}}>-</button>
        Add this item to cart
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(10)}}>+</button>
    </div>
  )
}

export default Shop