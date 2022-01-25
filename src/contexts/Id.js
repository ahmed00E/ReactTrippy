import { createContext, useState } from "react"

const IdContext = createContext({})

const IdContextProvider = props => {
  const [Id, setId] = useState()

  const value = {
    Id,
    setId
  }

  return (
    <IdContext.Provider value={value}>
      {props.children}
    </IdContext.Provider>
  )
}

export {
  IdContextProvider,
  IdContext
}