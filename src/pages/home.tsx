import React, {useEffect, useState} from "react"
import api from '../services/api'
import firstSlide from '../assets/slide-1.jpg'
import secondSlide from '../assets/slide-2.jpg'
import thirdSlide from '../assets/slide-3.jpg'
import Slider from "../components/UI/slider"
import { getSessionId } from "../services/utils/session"
import { useAppSelector } from "../hooks/redux"

const HomePage = () => {
    const {categories} = useAppSelector(state=>state.categoryReducer)
    return(
        <div>
            <Slider items={[firstSlide,secondSlide,thirdSlide]}/>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', padding:'0 10% 0 10%'}}>
            {
                categories.map((category, index)=>
                        <div key={`category ${index}`} style={{position:'relative', display:'flex', justifyContent:'center'}}>
                            <div style={{position:'absolute', bottom:30, zIndex:'10', background:'#fff', width:'50%', height:'50px', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}}>{category.name}</div>
                            <img src={category.image} style={{ maxHeight:'250px', width:'370px', padding:'20px'}}/>
                        </div>
                    )
            }
            </div>
            
        </div>
    )
}
export default HomePage