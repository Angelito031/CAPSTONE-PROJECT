import { useAuthStore } from "../store/store"

const ResumeTop = () => {
  const {user} = useAuthStore()
  const resume = user?.resume
  return (
    <div className="flex rounded-t-lg bg-gray-700 sm:px-2 w-full text-white">
      <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
        <img 
          src="https://media.licdn.com/dms/image/C4D03AQH8qidO0nb_Ng/profile-displayphoto-shrink_800_800/0/1615696897070?e=2147483647&v=beta&t=ia3wfE2J7kVLdBy9ttkgUDAA_ul29fymykhQo0lABDo" 
          alt="Profile"
        />
      </div>
      <div className="w-2/3 sm:text-center mt-10 text-start flex pl-8 items-center">
        <p className="font-poppins font-bold text-7xl sm:text-4xl">
          {resume?.firstname} {resume?.lastname}
        </p>
      </div>
    </div>
  )
}

export default ResumeTop