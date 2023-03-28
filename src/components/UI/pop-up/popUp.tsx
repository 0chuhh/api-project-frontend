import React, { FC, PropsWithChildren } from "react";
import Popover from '@mui/material/Popover';
import { Popper } from "@mui/material";

interface PopUpProps extends PropsWithChildren {
    anchorEl: Element | null | undefined,
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}

export const PopUp: FC<PopUpProps> = ({ anchorEl, setAnchorEl, children }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    

    return (
         <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement={'bottom-end'}
            
        >{children}</Popper>
    )
}