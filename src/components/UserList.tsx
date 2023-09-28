import { useEffect, useState } from "react"
import { User } from "../components"
import { sortUsers, useUserContext } from "../utils"
import type { UserType } from "../utils/types"
import { AiOutlinePlus } from "react-icons/ai"
import { AddOrEditUserModal } from "./Modals/AddUserModal"

export const UserList = () => {
  const { users, setUsers, userFilter } = useUserContext()
  const [openAddUserModal, setOpenAddUserModal] = useState<boolean>(false)

  useEffect(() => {
    const getAllUsers = async () => {
      let allUsers: UserType[] = await fetch("https://api.github.com/users").then(response =>
        response.json(),
      )
      allUsers = sortUsers(allUsers)
      setUsers(allUsers)
    }

    getAllUsers()
  }, [])

  let filteredUsers = users.filter(user =>
    user?.login.toLowerCase().includes(userFilter.toLowerCase()),
  )
  filteredUsers = sortUsers(filteredUsers)

  return (
    <>
      <div className="max-w-[70rem] w-full gap-4 mx-auto grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] p-8">
        {filteredUsers?.map(user => (
          <User key={user.login} user={user} />
        ))}
        <div
          className="h-14 w-14 rounded-full text-white text-4xl bg-cyan-500 fixed bottom-4 right-4 flex justify-center items-center"
          onClick={() => setOpenAddUserModal(true)}
        >
          <AiOutlinePlus className="pointer-events-none" />
        </div>
      </div>
      {openAddUserModal && <AddOrEditUserModal hideModal={() => setOpenAddUserModal(false)} />}
    </>
  )
}
