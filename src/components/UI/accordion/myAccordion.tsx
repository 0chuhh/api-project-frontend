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

const MyAccordion:FC<MyAccordionProps> = ({title, disabled, handleChange, expanded, children}) =>{
    return(
        <Accordion expanded={expanded === `panel${title}`} onChange={handleChange&& handleChange(`panel${title}`)}  disabled={disabled}>
            <AccordionSummary>
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
    
}
MyAccordion.defaultProps = defaultProps
export default MyAccordion


