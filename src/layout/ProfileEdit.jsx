import Header from "./Header";
import Footer from "./Footer";
import CoverImage from "../components/CoverImage";
import EditInputField from "../components/EditInputField";
import EditSelectField from "../components/EditSelectField";
import EditTextArea from "../components/EditTextArea";
import { useState, useEffect } from "react";
import { useUserStore, useAuthStore } from "../store/store";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const { user, setUser } = useAuthStore();
  const { updateUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    location: "",
    department: "",
    description: "",
    sex: "",
    contactno: "",
  });

  useEffect(() => {
    setCredentials({
      firstname: user.firstname || "",
      lastname: user.lastname || "",
      email: user.email || "",
      location: user.location || "",
      department: user.department || "",
      description: user.description || "",
      sex: user.sex || "",
      contactno: user.contactno || "",
    });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const capitalizedValue = (name === 'firstname' || name === 'lastname' || name === "location")
      ? value.charAt(0).toUpperCase() + value.slice(1)
      : value;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: capitalizedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await updateUser(credentials);
    await setUser({uid: user.uid, role: user.role, ...credentials});
    setIsLoading(false);
    navigate(`/profile/${user.uid}`);
  };

  return (
    <div className='App'>
      <Header />
      <section className="py-10 my-auto">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center bg-gray-50/40">
            <div>
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif mb-2 text-black">Profile Edit</h1>
              <form onSubmit={handleSubmit}>
                <CoverImage />
                <h2 className="text-center mt-1 font-semibold text-gray-800">Upload Profile and Edit Info</h2>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <EditInputField
                    type="text"
                    name="firstname"
                    id="firstName"
                    value={credentials.firstname}
                    placeholder="First Name"
                    handleInputChange={handleInputChange}
                  />
                  <EditInputField
                    type="text"
                    name="lastname"
                    id="lastName"
                    value={credentials.lastname}
                    placeholder="Last Name"
                    handleInputChange={handleInputChange}
                  />
                  <EditInputField
                    type="text"
                    name="location"
                    id="location"
                    value={credentials.location}
                    placeholder="Location"
                    handleInputChange={handleInputChange}
                  />
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <EditSelectField
                    label="Sex"
                    name="sex"
                    id="sex"
                    options={['Male', 'Female']}
                    value={credentials.sex}
                    handleInputChange={handleInputChange}
                  />
                  <EditInputField
                    type="number"
                    name="contactno"
                    id="contactno"
                    value={credentials.contactno}
                    placeholder="CP Number"
                    handleInputChange={handleInputChange}
                  />
                </div>
                <EditTextArea
                  name="description"
                  value={credentials.description}
                  handleInputChange={handleInputChange}
                />
                <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                  <button type="submit" className="w-full p-4">
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProfileEdit;
