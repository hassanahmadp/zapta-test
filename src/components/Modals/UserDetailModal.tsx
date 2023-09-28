import React, { useEffect, useState } from "react"
import { Modal } from "./Modal"
import { UserDataType } from "../../utils/types"

type Props = {
  hideModal: () => void
  url: string
}

export const UserDetailModal = ({ url, hideModal }: Props) => {
  const [userData, setUserData] = useState<UserDataType | undefined>(undefined)

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch(url).then(resp => resp.json())

      setUserData(data)
    }

    fetchUser()
  }, [])

  return (
    <Modal level={1} hideModal={hideModal}>
      <div className="flex flex-col sm:flex-row text-cyan-500 h-full items-stretch gap-5">
        <div className="h-36 sm:h-full sm:w-1/3">
          {userData?.avatar_url && <img src={userData?.avatar_url} alt="user" className="h-full w-full object-cover" />}
        </div>

        <div className="flex flex-col flex-1 p-4 text-md">
          <div className="flex">
            <span className="flex-1">Name: </span>
            <span className="flex-1">{userData?.name}</span>
          </div>
          <div className="flex">
            <span className="flex-1">company: </span>
            <span className="flex-1">{userData?.company}</span>
          </div>
          <div className="flex">
            <span className="flex-1">location: </span>
            <span className="flex-1">{userData?.location}</span>
          </div>
          <div className="flex">
            <span className="flex-1">Repos: </span>
            <span className="flex-1">{userData?.public_repos}</span>
          </div>
          <div className="flex">
            <span className="flex-1">Gists: </span>
            <span className="flex-1">{userData?.public_gists}</span>
          </div>
          <div className="flex">
            <span className="flex-1">Followers: </span>
            <span className="flex-1">{userData?.followers}</span>
          </div>
          <div className="flex">
            <span className="flex-1">Following: </span>
            <span className="flex-1">{userData?.following}</span>
          </div>
        </div>
      </div>
    </Modal>
  )
}
