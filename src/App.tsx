import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import LoginFirst from "./components/Pages/LoginFirst/LoginFirst";
import Loader from "./components/loader/Loader";


function App() {
const {isSignedIn,user,isLoaded} = useUser();

if(!isLoaded) return <Loader/>
if(!isSignedIn) return <LoginFirst/>


  return (
    <>
      <div className="border-b border-solid border-b-[#f0f2f5] px-10 py-3 md:block flex justify-center items-center">
        <NavBar />
      </div>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App;
