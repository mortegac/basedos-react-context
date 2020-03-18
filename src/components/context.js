import React from "react";
import {dark} from "../themes";


export const Context = React.createContext({
  theme: dark,
  list:[],
})