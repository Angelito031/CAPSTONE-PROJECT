import React from 'react'
import EditProfileImg from './EditProfileImg'
import univ from "../assets/univ.jpg";
import userdefaultimg from "../assets/user-default-icon.jpg";

const CoverImage = () => {
  return (
    <div className="w-full rounded-sm bg-cover bg-center bg-no-repeat p-4 bg-[url(univ.jpg)]" style={{ backgroundImage: `url(${univ})` }}>
        <EditProfileImg userdefaultimg={userdefaultimg} />
    </div>
  )
}

export default CoverImage