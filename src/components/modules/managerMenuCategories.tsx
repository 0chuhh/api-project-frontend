import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import ImagePicker from "components/UI/image-picker/imagePicker";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { postCategory } from "store/reducers/category/ActionCategory";

const ManagerMenuCategories = () => {
    const [title, setTitle] = useState<string>('')
    const [image, setImage] = useState<File>()
    
    const dispatch = useAppDispatch()
    const addCategory = () =>{
        if(title && image){
            dispatch(postCategory(title, image))
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h5 style={{marginBottom:0}}>Добавить кагегорию</h5>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
            <ImagePicker setImage={setImage}/>
            <div onClick={addCategory} style={{ alignItems: 'start' }} className="button">Добавить <AddIcon /></div>
        </div>
    )
}
export default ManagerMenuCategories