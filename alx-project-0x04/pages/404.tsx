import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center items-center text-white">
      {/* Main Heading */}
      <h1 className="text-6x1 font-bold mb-4">Oops! 😱</h1>
      
      <p className="text-2xl mb-8">
        We can't seem to find the page you're looking for.
      </p>

      {/* Funny Message */}
      <Link
        href="/"
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        <FaHome size={20} />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
};

export default Custom404;