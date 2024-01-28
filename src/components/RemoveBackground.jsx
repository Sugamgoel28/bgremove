import React, { useState } from 'react'
import dummy from "../../public/testimage.png"
import dummybgremove from "../../public/testimagebgremove.png"

export default function RemoveBackground() {
  const [image, setImage] = useState(null);
  const [bgRemove, setBgRemove] = useState(null);

  const handleRemoveBackground = async () => {
    const apiKey = 'y7ZMwrefK6DGjhtj7HeHz2Tx';
    const apiUrl = 'https://api.remove.bg/v1.0/removebg'

    const formData = new FormData();
    formData.append('image_file', image, image.name);
    formData.append('size', 'auto');

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'X-api-key': apiKey
        },
        body: formData
      })

      const data = await res.blob();

      const reader = new FileReader();
      reader.onloadend = () => setBgRemove(reader.result);
      reader.readAsDataURL(data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='flex justify-center'>
        <div className="">
          <div className="flex flex-row items-center input">
            <div className="px-2 py-2 border border-gray-700 rounded-l-lg input bg-gray-950">
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="text-sm text-gray-500 file:mr-5 file:py-1 file:px-3  file:text-xs file:font-medium file:border-0 file:rounded-md file:bg-gray-800 file:text-gray-500 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700 lg:w-[40em]"
              />
            </div>

            {/* Remove Background Button  */}
              <button
                type="button"
                onClick={handleRemoveBackground}
                className="px-5 py-3 text-sm font-medium text-center text-black rounded-r-lg bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200"
              >Remove
              </button>
          </div>

          {/* Output  */}
          <div className="flex gap-1 m-5 ">
            {<div className="flex justify-center w-40 p-2 border-2 border-gray-500 border-dashed rounded-l-lg lg:w-80">
              <img className="w-90 h-90" src={image ? URL.createObjectURL(image) : dummy } alt="img" />
            </div>}
            

            {<div className="flex justify-center w-40 p-2 border-2 border-gray-500 border-dashed rounded-r-lg lg:w-80">
            <img className="w-90 h-90" src={bgRemove ? bgRemove : dummybgremove} alt="img" />
            </div>}
          </div>

          {/* Download button  */}
          {bgRemove && <div className="flex justify-center">
            <a className='w-full' href={bgRemove} download={'save.png'}>
              <button className='w-full px-3 py-2 text-white bg-gray-800 border border-gray-600 rounded-lg '>
                Download
              </button>
            </a>
          </div>}

        </div>

      </div>
    </div>
  )
}