import { createContext } from "react";

const MyContext=createContext({ name: "digikala", address: "tehran-iran" })
export const  Myprovider=MyContext.Provider
export const Myconsumer=MyContext.Consumer