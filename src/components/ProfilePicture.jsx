import userdefaultimg from "../assets/user-default-icon.jpg";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../store/store";

const ProfilePicture = () => {
  const { currentUser } = useAuthStore();
  const params = useParams()
  const defaultImage = userdefaultimg;


  return (
    <div className={`${params.userId === currentUser ? "ml-24"
    : "ml-56"}
    } bg-indigo-100 w-48 h-48 mx-auto rounded-full shadow-2xl inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500`}>
      <img src={defaultImage} alt="" className="rounded-full h-5/6"/>
    </div>
  );

};
export default ProfilePicture;
