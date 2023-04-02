import { useAppDispatch, useAppSelector } from "hooks/redux"
import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import ImagePicker from "components/UI/image-picker/imagePicker";
import { postProducts } from "store/reducers/product/ActionProduct";
const ManagerMenuProducts = () => {
    const [category, setCategory] = useState<number>(12)
    const { categories } = useAppSelector(state => state.categoryReducer)
    const [title, setTitle] = useState<string>('ggg')
    const [price, setPrice] = useState<number>(10)
    const [description, setDescription] = useState<string>('jh')
    const [image, setImage] = useState<File>()
    const [open, setOpen] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const addProduct =()=>{
        dispatch(postProducts(title,description,category,price.toString(),image))
    }
    return (
        <div  style={{
            background: '#fff',
            border: 'solid black 1px',
            padding: '10px',
            boxSizing: 'border-box',
            borderRadius: '10px',
            width: '80%',
            maxHeight: open?'350px':'40px',
            position: 'fixed',
            bottom: '0',
            left: '10%',
            margin: '0 auto',
            zIndex: '200',
            transition:'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>
            <h5 onClick={()=>setOpen(!open)} style={{marginTop:'0', textAlign:'center', cursor:'pointer'}}>Добавить продукт</h5>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="название" />
            <select value={category} onChange={(e) => setCategory(Number(e.target.value))}>
                {
                    categories.map((category, index) =>
                        <option key={'cat' + index} value={category.id}>{category.name}</option>
                    )
                }
            </select>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="описание" />
            <ImagePicker setImage={setImage} />
            <input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number" placeholder="стоимость" />
            
            <div onClick={addProduct} style={{ alignItems: 'start' }} className="button">Добавить <AddIcon /></div>
        </div>
    )
}
export default ManagerMenuProducts