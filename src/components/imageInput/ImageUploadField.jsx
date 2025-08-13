import { useFormikContext } from 'formik';
import React from 'react'

export const ImageUploadField = () => {
    const {setFieldValue} = useFormikContext();
    
        const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file){
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () =>{
            setFieldValue('image', reader.result);
          }
        }
      }
  return (
      <>
      <label
        className="font-medium text-primary dark:text-gray-50 text-txt16 lg:text-txt18"
        htmlFor="imageUpload"
      >
        Upload Image:
      </label>
      <input
        name="image"
        type="file"
        accept="image/*"
        className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        onChange={handleFileChange}
      />
    </>
  )
}
