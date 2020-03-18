import React from "react";
import {dark} from "../themes";


const Context = React.createContext({
  theme: dark,
  list:[],
})

Context.displayName = 'Contexto de mi APP';

export {Context};