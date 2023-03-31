import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, {FC, PropsWithChildren} from 'react'

interface MyAccordionProps extends PropsWithChildren{
    title?:string,
    disabled?:boolean,
    expanded?:string | false,
    handleChange?: ((panel:string)=>(event: React.SyntheticEvent<Element, Event>, expanded: boolean) => void) | undefined
}

const defaultProps: MyAccordionProps = {
    title: '',
    disabled: false,
    expanded:false,
}

const MyAccordion:FC<MyAccordionProps> = ({title='', disabled=false, handleChange, expanded=false, children}) =>{
    return(
        <Accordion expanded={expanded === `panel${title}`} onChange={()=>handleChange&&(`panel${title}`)}  disabled={disabled}>
            <AccordionSummary>
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}

export default MyAccordion