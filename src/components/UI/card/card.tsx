import React, { FC, useState, PropsWithChildren } from "react"

interface CardProps extends PropsWithChildren {
    image?: string,
    title?: string,
    content?: string,
    price?: number,
    buttonName?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const Card: FC<CardProps> = ({ image, title, content, price, onClick, buttonName, children }) => {
    return (

        <div className="card" style={{ border: '1px solid #e6e6e6', position: 'relative', overflow: 'hidden' }}>
            <div style={{ backgroundImage: `url(${image})`, }} className="card-image">
            </div>
            <div>
                <h4 className="title">{title}</h4>
                <div className="content">{content}</div>
                {children}
            </div>
            {
                buttonName &&
                <div onClick={onClick} className="button"
                >
                    {buttonName}
                </div>
            }
        </div>
    )
}
export default Card