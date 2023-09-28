import { createContext, useContext, useState } from "react"
import type { UserType } from '../types'

type UserContextValue = {
  users: UserType[]
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>,
  userFilter: string
  setUserFilter: React.Dispatch<React.SetStateAction<string>>
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<UserType[]>([])
  const [userFilter, setUserFilter] = useState<string>('')

  const userContextValue: UserContextValue = { users, setUsers, userFilter, setUserFilter }

  return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>
}

export const useUserContext = (): UserContextValue => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider")
  }
  return context
}
