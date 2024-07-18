import React from 'react';
import ProfilePicture from '../components/ProfilePicture';
import ProfileInfo from '../components/ProfileInfo';
import ProfileDescription from '../components/ProfileDescription';
import ProfileButtons from '../components/ProfileButtons';
import Header from '../layout/Header';
import Footer from './Footer';


const Profile = () => {
  return (
    <div className='App'>
        <Header />
        <div className="px-16">
            <div className="p-8 bg-gray-50 shadow-lg shadow-gray-400 mt-24">
                <div className='flex items-center '>
                    <ProfileButtons />
                    <ProfilePicture />
                </div>
                <ProfileInfo />
                <ProfileDescription />
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Profile;
