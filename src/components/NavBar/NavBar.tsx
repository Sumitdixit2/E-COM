import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "../Logo/Logo";
import Search from "@/components/Search/Search";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router";
import SignUp from "../Pages/SignUp/SignUp";

//   const navItems = [ // creating an array of objects containing the details of different pages.

//   { name: 'Home', slug: '/', active: true },
//   { name: 'Login', slug: '/login', active: !authStatus },
//   { name: 'Signup', slug: '/signup', active: !authStatus },
//   { name: 'All Posts', slug: '/all-posts', active: authStatus },
//   { name: 'Write', slug: '/add-post', active: authStatus },
// ];

function NavBar() {
  return (
    <div className="flex">
      <div className="md:w-2/3">
        <NavigationMenu className="gap-4">
          <NavigationMenuList className="md:flex-row flex-col">
            <NavigationMenuItem className="px-4">
              <NavigationMenuLink
                className="hover:bg-white ml-3"
                href="http://localhost:5173/"
              >
                <Logo />
              </NavigationMenuLink>
              </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:w-1/3 flex justify-start items-center">
        <div>
          <Search />
        </div>
          
        <Link to={`/wishList`}>
        <div className="p-3 ml-10 hover:bg-accent hover:text-accent-foreground border-0 rounded-2xl">
          <FaRegHeart className=" border-[0px] fill-blue-950 " size={20} />
        </div>
        </Link>  

       <Link to={`/Cart`}>
        <div className="ml-10 p-3 hover:bg-accent hover:text-accent-foreground border-0 rounded-2xl">
          <MdOutlineShoppingCart size={20} className="fill-blue-950" />
        </div>
       </Link>

        <div className="ml-10 p-3 hover:bg-accent hover:text-accent-foreground border-0 rounded-2xl">
          <SignUp/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
