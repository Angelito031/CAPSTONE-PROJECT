import { Link, useParams } from "react-router-dom";
import { useAuthStore } from "../store/store";

const ProfileButtons = () => {
  const { currentUser } = useAuthStore();
  const params = useParams()

  return (
    <div className="space-x-3 flex justify-between mt-32 md:mt-0 md:justify-center">
      {params.userId === currentUser ? (
        <Link to={`/profile/edit/${currentUser}`} className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
        EDIT PROFILE
      </Link>
      ) : null}
      <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
        Resume
      </button>
      <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
        Message
      </button>
    </div>
  );
};

export default ProfileButtons;
