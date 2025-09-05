import { Loader2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

function Loader() {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center">
    <Button size="sm" variant="black">
      <Loader2Icon className="animate-spin" />
      Please wait...
    </Button>
    </div>
  )
}


export default Loader