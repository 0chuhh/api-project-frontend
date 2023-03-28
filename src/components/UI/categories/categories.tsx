import React,{FC} from "react"
import { Link } from "react-router-dom";
import { ICategory } from "../../../models/ICategory";

interface CategoriesProps{
    items: ICategory[]
}
const Categories:FC<CategoriesProps> = ({items}) =>{
    return(
        <div style={{maxHeight:'250px',height:'100%', maxWidth:'250px'}}>
            <h3 className="title">
                Категории
            </h3>
            <div className="categories" style={{display:"flex", flexDirection:'column', justifyContent:'space-around', alignItems:'stretch',maxHeight:'250px',height:'100%'}}>
                <Link to={`/menu`} key={`category all`} className="category" style={{ textDecoration: 'none', color: '#000' }}>
                    Все
                </Link>
                {
                    items.map((item, index)=>
                        <Link to={`/menu/${item.id}`} key={`category ${index}`} className="category" style={{ textDecoration: 'none', color: '#000' }}>
                            {item.name}
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
export default Categories