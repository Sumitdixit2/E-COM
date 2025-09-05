import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";



function App() {
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
