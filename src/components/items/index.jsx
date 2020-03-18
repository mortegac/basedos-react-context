import React from 'react'
import {Context} from '../../components/context.js';

const Items = () =>{
    console.log('<Context.Consumer>', Context)
    return(
        <Context.Consumer>
            {data => (
                data.list.map((items,i) => (
                    <li key={i}>{items}</li>
                ))

            )}
        </Context.Consumer>

)}

export default Items;

