import React, { Component } from 'react'
import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";

const Count = ({ count, increase, decrease, changeValue, id }) => {
	return (
		<div className='count'>
			<div className='count__box'>
				<input onChange={(e)=>{changeValue(id, +e.target.value)}} type='number' className='count__input' min='1' max='100' value={count} />
			</div>
			<div className='count__controls'>
				<button type='button' className='count__up' onClick={()=>{increase(id)}}>
					<CgMathPlus/>
				</button>
				<button type='button' className='count__down' onClick={()=>{decrease(id)}}>
					<CgMathMinus/>
				</button>
			</div>
		</div>
	);
};

export default Count;