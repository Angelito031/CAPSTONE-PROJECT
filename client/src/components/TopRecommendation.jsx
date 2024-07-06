import { Link } from "react-router-dom";

const TopRecommendation = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-col">
          <div className="h-1 overflow-hidden rounded bg-gray-200">
            <div className="h-full w-24 bg-indigo-500"></div>
          </div>
          <div className="mb-12 flex flex-col flex-wrap py-6 sm:flex-row">
            <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:mb-0 sm:w-2/5">
              Top 3 Recommended Jobs
            </h1>
            <Link
              to={"/recommendation"}
              className="pl-0 text-right text-base leading-relaxed text-blue-400 hover:underline sm:w-3/5 sm:pl-10"
            >
              View More
            </Link>
          </div>
        </div>
        <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap sm:-m-4">
          <div className="mb-6 p-4 sm:mb-0 md:w-1/3">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="h-full w-full object-cover object-center"
                src="https://dummyimage.com/1203x503"
              />
            </div>
            <h2 className="title-font mt-5 text-xl font-medium text-gray-900">
              Shooting Stars
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <a className="mt-3 inline-flex items-center text-indigo-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="mb-6 p-4 sm:mb-0 md:w-1/3">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="h-full w-full object-cover object-center"
                src="https://dummyimage.com/1204x504"
              />
            </div>
            <h2 className="title-font mt-5 text-xl font-medium text-gray-900">
              The Catalyzer
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <a className="mt-3 inline-flex items-center text-indigo-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="mb-6 p-4 sm:mb-0 md:w-1/3">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="h-full w-full object-cover object-center"
                src="https://dummyimage.com/1205x505"
              />
            </div>
            <h2 className="title-font mt-5 text-xl font-medium text-gray-900">
              The 400 Blows
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <a className="mt-3 inline-flex items-center text-indigo-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRecommendation;
