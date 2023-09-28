import React, { useState } from "react"
import { UserType } from "../utils/types"
import { FaTrashAlt } from "react-icons/fa"
import { useUserContext } from "../utils"
import { UserDetailModal } from "./Modals"

type Props = { user: UserType }

export const User = ({ user }: Props) => {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const { setUsers } = useUserContext()

  const handleDeleteUser = () => {
    setUsers(prev => {
      return prev.filter(u => u.login !== user.login)
    })
  }

  // const handleEditUser = () => {}

  return (
    <React.Fragment>
      <div className="rounded-xl py-5 justify-center items-center [&:hover_img]:scale-110 overflow-hidden flex flex-col hover:shadow-[0_0_2rem_rgba(103,232,249,0.2)] shadow-cyan-300 bg-gray-900">
        <div className="h-[10rem] w-[10rem] border-4 relative overflow-hidden rounded-full ">
          <img
            src={user.avatar_url}
            alt="user"
            className="transition-all pointer-events-none duration-300 delay-150 left-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex gap-4 mt-4 flex-col px-5 w-full items-center ">
          <a
            className="inline hover:underline text-cyan-500  font-bold text-xl"
            href={user.html_url}
            target="_blank"
          >
            #{user.login}
          </a>

          <div className="flex w-full">
            <button
              className="bg-cyan-500 border-cyan-500 border-2 hover:bg-transparent transition-all hover:text-cyan-500 text-sm px-2 py-1"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
            <button
              className="bg-red-500 ml-auto border-red-500 border-2 text-sm px-2 py-1"
              onClick={handleDeleteUser}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </div>
      {showDetails && <UserDetailModal url={user.url} hideModal={() => setShowDetails(false)} />}
    </React.Fragment>
  )
}
