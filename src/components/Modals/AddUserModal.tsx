import {  useRef } from "react"
import { Modal } from "./Modal"
import { UserType } from "../../utils/types"
import { sortUsers, useUserContext } from "../../utils"

type Props = {
  hideModal: () => void
}

const initialUserData: UserType = {
  login: "",
  id: Math.floor(Math.random() * 99999999999),
  node_id: "",
  avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  gravatar_id: "",
  url: "#",
  html_url: "#",
  followers_url: "#",
  following_url: "#",
  gists_url: "#",
  starred_url: "#",
  subscriptions_url: "#",
  organizations_url: "#",
  repos_url: "#",
  events_url: "#",
  received_events_url: "#",
  type: "",
  site_admin: false,
}

export const AddOrEditUserModal = ({ hideModal }: Props) => {
  const {setUsers}= useUserContext()
  const nameRef = useRef(null)
  const companyRef = useRef(null)
  const locationRef = useRef(null)

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    setUsers(prev => {
      let newUsers = [...prev, {...initialUserData, login: nameRef.current.value, company: companyRef.current.value , locaion: locationRef.current.value}]
      newUsers = sortUsers(newUsers)
      return newUsers
    })

    hideModal()
    
  }

  return (
    <Modal level={2} hideModal={hideModal}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-gray-300 p-5 h-full items-stretch gap-4 w-full"
      >
        <div className="w-full ">
          <label className="" htmlFor="name">
            Name
          </label>
          <br />
          <input
            type="text"
            ref={nameRef}
            required
            id="name"
            name="name"
            placeholder="Enter Name"
            className="bg-gray-500 rounded-md p-1.5 w-full focus:outline-none mt-2"
          />
        </div>
        <div className="w-full ">
          <label className="" htmlFor="Company">
            Company
          </label>
          <br />
          <input
            ref={companyRef}
            type="text"
            required
            id="Company"
            name="Company"
            placeholder="Enter Company"
            className="bg-gray-500 rounded-md p-1.5 w-full focus:outline-none mt-2"
          />
        </div>
        <div className="w-full ">
          <label className="" htmlFor="Location">
            Location
          </label>
          <br />
          <input
            ref={locationRef}
            type="text"
            id="Location"
            required
            name="Location"
            placeholder="Enter Location"
            className="bg-gray-500 rounded-md p-1.5 w-full focus:outline-none mt-2"
          />
        </div>

        <button type="submit" className="px-4 py-2.5 bg-cyan-500 text-gray-700 rounded-lg">
          Add User
        </button>
      </form>
    </Modal>
  )
}
