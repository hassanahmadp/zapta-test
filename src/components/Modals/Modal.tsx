import React from "react"
import ReactDOM from 'react-dom'

type Props = {
  children: React.ReactNode,
  hideModal: () => void,
  level: 1 | 2
}

export const Modal = ({ children,hideModal, level=1 }: Props) => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center p-6">
      <div className="absolute top-0 left-0 h-full backdrop-blur-3xl w-full bg-black opacity-80" onClick={hideModal}/>
      <div className=" relative w-full max-w-[40rem] bg-gray-700 rounded-xl overflow-hidden">{children}</div>
    </div>
    ,
    document.getElementById(`rootModal-level-${level}`)
  )
}
