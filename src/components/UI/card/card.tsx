import React, { FC, useState } from "react"

interface CardProps {
    image?: string,
    title?: string,
    content?: string,
    price?: number,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const Card: FC<CardProps> = ({ image, title, content, price , onClick}) => {
    const [isHoverBack, setIsHoverBack] = useState<boolean>(false)

    const mouseEnterBack = () => {
        setIsHoverBack(true)
    }

    const mouseLeaveBack = () => {
        setIsHoverBack(false)
    }
    return (
  
        <div onMouseEnter={mouseEnterBack} onMouseLeave={mouseLeaveBack} className="card" style={{border: '1px solid #e6e6e6', position:'relative', overflow:'hidden'}}>
            <div  style={{ backgroundImage: `url(${image})`, }} className="card-image">
                <div onClick={onClick} className="button"
                    style={{
                        position: "absolute",
                        left: '30%',
                        bottom: isHoverBack ? 30 : -100
                    }}>
                    в корзину
                </div>
            </div>
            <div>
                <h4 className="title">{title}</h4>
                <div className="content">{content}</div>
                <div className="price">₽{price}</div>
            </div>
        </div>
    )
}
export default Card