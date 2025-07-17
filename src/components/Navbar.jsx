import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="bg-indigo-900 p-4 text-2xl text-white flex justify-between">
      <Link to="/" className="font-bold text-2xl">
        Movie Search
      </Link>
      <Link to="/favorites" className=" font-semibold hover:underline ">
        Favorites
      </Link>
    </nav>
  );
};

export default Navbar;
