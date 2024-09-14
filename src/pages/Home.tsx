import { Link } from "react-router-dom";

export default function Home() {

  return (<div className="flex flex-col justify-evenly items-center space-y-2">

    <h1 className="text-blue-50">Hello Home</h1>
    <Link to='/about'> About page </Link>
    <Link to='/not_found'> 404 page </Link>
  </div>)
}
