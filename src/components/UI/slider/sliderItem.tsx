import React, {FC} from "react"
interface SliderItemProps{
    item:string
}
const SliderItem:FC<SliderItemProps> = ({item}) =>{
    return(
        <div className="slide" style={{background:`url(${item})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',  width:'100%', height:'100%'}}/>
    )
}
export default SliderItem