import { Link } from "react-router-dom";
export default function About() {
  return (<div className="flex flex-col justify-evenly items-center space-y-2">
    <h1 className="text-emerald-50">Hello About</h1>
    <Link to='/'> Home page </Link>
    <Link to='/not_found'> 404 page </Link>
  </div>)
}
