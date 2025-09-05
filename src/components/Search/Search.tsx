import {
Command,
CommandInput,
} from "@/components/ui/command"

type SeachProps =  React.ComponentProps<typeof CommandInput>

function Search({className , ...props}:SeachProps) {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-40 md:max-w-64">
      <CommandInput placeholder="Search" className={`${className}`} {...props}/>
    </Command>
  )
}


export default Search