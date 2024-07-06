import { useAuthStore } from "../store/store";
import { useSearchStore } from "../store/store";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import TopRecommendation from "../components/TopRecommendation";

const Home = () => {
  const { isAuth } = useAuthStore();
  const { searchQuery, setSearchQuery, search } = useSearchStore();
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useState(false);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await search(searchQuery);
    if (response.status === 204) {
      navigate("/not-found");
    } else if (response.status === 200) {
      navigate(`/job/${searchQuery}`);
    }
    setIsLoading(false);
  };

  return isAuth ? (
    <div className="App">
      <Header />
      <main>
        <section className="text-gray-600">
          <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
            <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
              <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                Universidad de Manila OJT
              </h1>
              <p className="mb-8 mt-2 w-full text-sm text-gray-500">
                The On-the-Job Training (OJT) program at Universidad de Manila
                provides students with practical experience and professional
                skills in their chosen fields. This hands-on training bridges
                academic learning with real-world application, enhancing resumes
                and building connections with potential employers. Universidad
                de Manila&apos;s OJT ensures graduates are well-prepared for the
                job market.
              </p>
              <div className="flex w-full items-end justify-center md:justify-start">
                <div className="relative mr-4 w-2/4 md:w-full lg:w-full xl:w-1/2">
                  <label
                    htmlFor="home-field"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Search A Job
                  </label>
                  <input
                    type="text"
                    id="home-field"
                    name="search"
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
                <button
                  onSubmit={handleSubmit}
                  disabled={isLoading}
                  className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                >
                  {isLoading ? "Searching..." : "Search"}
                </button>
              </div>
            </div>
            <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
              <img
                className="rounded object-cover object-center"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
          </div>
        </section>
        <TopRecommendation />
      </main>
      <Footer />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
