import { Link } from "lucide-react"
import SignUp from "../SignUp/SignUp"

function LoginFirst() {
  return (
     <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="w-full" style={{height: "100px"}}></div>
            <h2 className="text-[#111418] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Welcome to ShopOnline</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              We use Clerk for secure authentication. Click the button below to log in or sign up.
            </p>
            <div className="flex px-4 py-3 justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3e99f4] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                <span className="truncate">{<SignUp/>}</span>
              </button>
            </div>
            <div className="w-full" style={{height: "100px"}}></div>
          </div>
        </div>
  )
}

export default LoginFirst