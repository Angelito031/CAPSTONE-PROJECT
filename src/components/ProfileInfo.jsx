import { useAuthStore } from "../store/store";

const ProfileInfo = () => {
  const {user} = useAuthStore();
  const name = user?.firstname + " " + user?.lastname
  console.log(user)

  return (
    <div className="mt-8 text-center border-b pb-12">
      <h1 className="text-4xl font-medium text-gray-700">
        {name}
      </h1>
      <p className="font-light text-gray-600 mt-3">{user.location}</p>
      <p className="mt-5 text-gray-500">
        {user.department}
      </p>
      <p className="mt-2 text-gray-500">Universidad De Manila</p>
    </div>
  );
};

export default ProfileInfo;
