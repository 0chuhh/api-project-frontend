
import React,{ChangeEvent, FC} from 'react'

interface ImagePickerProps{
    setImage: React.Dispatch<React.SetStateAction<File|undefined>>
}

const ImagePicker:FC<ImagePickerProps> = ({ setImage})=>{
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setImage(e.target.files[0]);
        }
      };
     return(
        <input type="file"  onChange={handleFileChange}/>
     )
}
export default ImagePicker