import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()
  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
      <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
      <h2 className="mt-6 text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-3 text-lg text-gray-500 max-w-md">
        Sorry, the page you are looking for might have been moved or does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-2xl bg-gray-900 px-6 py-3 text-white font-medium shadow-md hover:bg-gray-700 transition"
      >
        Back to Home
      </Link>
      <button 
      onClick={() => navigate(-1)}
        className="mt-8 inline-block rounded-2xl bg-gray-900 px-6 py-3 text-white font-medium shadow-md hover:bg-gray-700 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default memo(NotFound);