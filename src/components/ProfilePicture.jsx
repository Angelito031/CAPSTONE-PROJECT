import userdefaultimg from "../assets/user-default-icon.jpg";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../store/store";

const ProfilePicture = () => {
  const { currentUser } = useAuthStore();
  const params = useParams()
  const defaultImage = userdefaultimg;


  return (
    <div className={`${params.userId === currentUser ? "ml-22 lg:ml-36"
    : "ml-56"}
    } bg-indigo-100 w-28 h-28 lg:w-48 lg:h-48 mx-auto rounded-full shadow-2xl -mt-40 lg:-mt-24 items-center justify-center flex text-indigo-500`}>
      <img src={defaultImage} alt="Profile Picture" className="rounded-full h-5/6"/>
    </div>
  );

};
export default ProfilePicture;
