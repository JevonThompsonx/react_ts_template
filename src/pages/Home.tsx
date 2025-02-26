import { Nav } from "../components"
export default function Home() {

  return (
    <>
      <Nav />
      <div className="flex flex-col justify-evenly items-center h-screen w-screen">
        <h1 className="text-blue-50">Hello Home</h1>

      </div>
    </>
  );
}
