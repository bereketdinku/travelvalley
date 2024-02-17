"use client"

import { ChevronsUpDown, Music, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

const NavMenu = () => {
    return ( <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button value="ghost" size='icon'>
<ChevronsUpDown/>
            </Button>
            

        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer flex gap-2 items-center">
                <Plus size={15}/> <span>Add music</span>
            </DropdownMenuItem>
<DropdownMenuItem className="cursor-pointer flex gap-2 items-center">
    <Music size={15}/> <span>Music=</span>

</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu> );
}
 
export default NavMenu;