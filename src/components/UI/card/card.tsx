import React, {FC, useState} from "react"

interface CardProps{
    image?:string,
    title?:string,
    content?:string,
    price?:number
}

const Card:FC<CardProps> = ({image, title, content, price}) =>{
    const [isHoverBack, setIsHoverBack] = useState<boolean>(false)
    const [isHoverButton, setIsHoverButton] = useState<boolean>(false)

    const mouseEnterButton = () =>{
        setIsHoverButton(true)
    }

    const mouseLeaveButton = () =>{
        setIsHoverButton(false)
    }

    const mouseEnterBack = () =>{
        setIsHoverBack(true)
    }

    const mouseLeaveBack = () =>{
        setIsHoverBack(false)
    }
    return(
        <div style={{maxWidth:'269px', padding:'10px', width:'100%',  maxHeight:'500px', height:'500px'}}>
            <div onMouseEnter={mouseEnterBack} onMouseLeave={mouseLeaveBack} style={{position:'relative', overflow:'hidden', background:`url(${image})`, backgroundSize:'cover', maxWidth:'269px', maxHeight:'269px', width:'100%', height:'100%'}} className="image">
                <div onMouseEnter={mouseEnterButton} onMouseLeave={mouseLeaveButton} className="to-cart" 
                    style={{
                        position:"absolute",
                        display:'flex',
                        alignItems:'center',
                        padding:'10px 20px 10px 20px', 
                        borderRadius:'20px', 
                        background:isHoverButton?'red':'#000',
                        transition:'all 0.3s ease',
                        color:'#fff', 
                        cursor:'pointer', 
                        left:'30%',
                        bottom:isHoverBack? 30: -100
                    }}>
                    в корзину
                </div>
            </div>
            <h4 className="title">{title}</h4>
            <div className="content">{content}</div>
            <div className="price">₽{price}</div>
        </div>
    )
}
export default Card