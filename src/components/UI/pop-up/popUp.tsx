import React, { FC, PropsWithChildren } from "react";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Badge, Popper } from "@mui/material";

interface PopUpProps extends PropsWithChildren {
    anchorEl: Element | null | undefined,
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    badge?: number | false
    iconSrc: string
}

export const PopUp: FC<PopUpProps> = ({ anchorEl, setAnchorEl, badge = false, iconSrc, onClick, children }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;




    return (
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
            <div>
                <Badge badgeContent={badge && badge} color='primary'>
                    <div style={{ cursor: 'pointer' }} onClick={onClick}  >
                        <img src={iconSrc} alt="" style={{ maxHeight: '50px' }} />
                    </div>
                </Badge>
                <Popper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    placement={'bottom-end'}

                >{children}</Popper>
            </div>
        </ClickAwayListener>

    )
}