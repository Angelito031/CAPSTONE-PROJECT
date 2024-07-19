import Header from "./Header"
import Footer from "./Footer"
import CoverImage from "../components/CoverImage";
import EditInputField from "../components/EditInputField";
import EditSelectField from "../components/EditSelectField";

const ProfileEdit = () => {
  return (
    <div className='App'>
        <Header />
        <section className="py-10 my-auto">
            <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center bg-gray-50/40">
                <div>
                    <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif mb-2 text-black">Profile</h1>
                    <form>
                        <CoverImage />
                        <h2 className="text-center mt-1 font-semibold text-gray-800">Upload Profile and Edit Info</h2>
                        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                            <EditInputField type="text" id="firstName" placeholder="First Name" />
                            <EditInputField type="text" id="lastName" placeholder="Last Name" />
                            <EditInputField type="text" id="location" placeholder="Location" />
                        </div>
                        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                            <EditSelectField label="Sex" options={['Male', 'Female']} />
                            <EditInputField type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                            <button type="submit" className="w-full p-4">Submit</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default ProfileEdit