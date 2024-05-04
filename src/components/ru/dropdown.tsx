import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  export function LanguageDrop() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
         <Button><img src="/language.svg" width="25px"/></Button> 
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <a href="/"> <DropdownMenuItem>
              <span>English</span>
              <DropdownMenuShortcut>EN</DropdownMenuShortcut>
            </DropdownMenuItem> </a>
            <a href="/es"> <DropdownMenuItem>
              <span>Spanish</span>
              <DropdownMenuShortcut>ES</DropdownMenuShortcut>
            </DropdownMenuItem> </a>
            <a href="/ru"> <DropdownMenuItem>
              <span>Russian</span>
              <DropdownMenuShortcut>RU</DropdownMenuShortcut>
            </DropdownMenuItem> </a>
            <a href="/hi"> <DropdownMenuItem>
              <span>Hindi</span>
              <DropdownMenuShortcut>HI</DropdownMenuShortcut>
            </DropdownMenuItem> </a>
            <a href="/fr"> <DropdownMenuItem>
              <span>French</span>
              <DropdownMenuShortcut>FR</DropdownMenuShortcut>
            </DropdownMenuItem> </a>
            <a href="/it"> <DropdownMenuItem>
              <span>Italian</span>
              <DropdownMenuShortcut>IT</DropdownMenuShortcut>
            </DropdownMenuItem> </a>
            <a href="/pt"> <DropdownMenuItem>
              <span>Portuguese</span>
              <DropdownMenuShortcut>PT</DropdownMenuShortcut>
            </DropdownMenuItem> </a>
            <a href="/zh"> <DropdownMenuItem>
              <span>Chinese</span>
              <DropdownMenuShortcut>ZH</DropdownMenuShortcut>
            </DropdownMenuItem> </a>
            <a href="/ar"> <DropdownMenuItem>
              <span>Arabic</span>
              <DropdownMenuShortcut>AR</DropdownMenuShortcut>
            </DropdownMenuItem> </a>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  