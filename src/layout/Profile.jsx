import ProfilePicture from '../components/ProfilePicture';
import ProfileInfo from '../components/ProfileInfo';
import ProfileDescription from '../components/ProfileDescription';
import ProfileButtons from '../components/ProfileButtons';
import Header from '../layout/Header';
import Footer from './Footer';
import univ from "../assets/univ.jpg";

const Profile = () => {
  return (
    <div className='App'>
        <Header />
        <main className="px-16">
            <div className="relative p-8 bg-gray-50 shadow-lg shadow-gray-400 mt-3">
            <div >
                <img src={univ} alt="Profile Background" className='w-full h-60'/>
            </div>
                <div className='flex lg:items-center flex-wrap'>
                    <ProfileButtons />
                    <ProfilePicture />
                </div>
                <ProfileInfo />
                <ProfileDescription />
            </div>
        </main>
        <Footer />
    </div>
  );
};

export default Profile;
