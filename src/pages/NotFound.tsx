import { Link } from "react-router-dom";
export default function NotFound() {

  return (<div className="flex flex-col justify-evenly items-center space-y-2">
    <h1>Sorry page not found</h1>
    <Link to='/'> Home page </Link>
    <Link to='/about'> About page </Link>
  </div>)
}
