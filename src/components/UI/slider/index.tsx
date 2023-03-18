import React, {FC, useEffect, useState} from "react"
import SliderItem from "./sliderItem"
import nextIcon from '../../../assets/next.png'
import prevIcon from '../../../assets/prev.png'
interface SliderProps {
    items: Array<any>,
}
const Slider: FC<SliderProps> = ({items}) => {
    const [selected, setSelected] = useState(items[0])
    useEffect(()=>{
        setSelected(items[0])
    },[items])


    const next = () => {
        let i = items.indexOf(selected)
        if(i>=0 && i<items.length-1){
            setSelected(items[i+1])
        }else if(i === items.length-1){
            setSelected(items[0])
        }
    }


    const prev = () => {
        let i = items.indexOf(selected)
        if(i>0){
            setSelected(items[i-1])
        }else if(i === 0){
            setSelected(items[items.length-1])
        }
    }


    return(
        <div className="slider-wrap" style={{width:'100%', height:'560px', position:'relative'}}>
            <div className="prev" onClick={prev} >
                <img src={prevIcon} alt="" />
            </div>
            <SliderItem item={selected}/>
            <div className="next" onClick={next}>
                <img src={nextIcon} alt=""  />
            </div>

        </div>
    )
}
export default Slider