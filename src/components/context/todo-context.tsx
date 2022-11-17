import React
, { useState } from "react";
type ContextProps={
    todoList : string[],
    setTodoList :  React.Dispatch<React.SetStateAction<string[]>>
}

type ContextProviderProps = {
    children : React.ReactNode;
}
const TodoContext = React.createContext({} as ContextProps);

export const TodoContextProvider = (props:ContextProviderProps) =>{
    const [todoList, setTodoList] = useState([] as string[])
    return <TodoContext.Provider value={{todoList, setTodoList}}>
        {props.children}
    </TodoContext.Provider>
}

export default TodoContext;