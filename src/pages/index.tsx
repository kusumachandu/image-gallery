/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { images } from "../utils/images";

export default function Home() {
  const [selectedImage, setSeclectedImage] = useState<
    null | string | undefined
  >(null);

  function handleSeletImage(image: string) {
    setSeclectedImage(image);
  }

  function closeSelectedImage() {
    setSeclectedImage(null);
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1 className="uppercase text-6xl pb-10">Image-Gallery</h1>
      <div className="grid grid-cols-3 gap-5">
        {images.map((image: string, index: number) => {
          return (
            <div onClick={() => handleSeletImage(image)} key={index} className="relative aspect-h-1 aspect-w-1 h-[200px] rounded-lg">
              <img className="inset-0 w-full h-full object-cover rounded-lg transition-all cursor-pointer hover:scale-105 duration-300" src={image} alt="images" />
            </div>
          );
        })}
      </div>

      <div className="transition-all duration-300 delay-150"
        style={{ opacity: selectedImage ? 1 : 0, transition: "opacity 0.5s"}}
      >
        {
          selectedImage && (
            <div className={`w-full h-screen p-2 flex inset-0.5 fixed items-center justify-center bg-slate-900 `} onClick={closeSelectedImage}>
              <button className="absolute z-50 top-24 right-32 rounded-xl bg-blue-500 text-slate-200 px-4 py-2 hover:bg-blue-700 hover:scale-105 duration-200">close</button>
              <div className="w-[85%] h-[85%] relative overflow-hidden"
                style={{ transition: "transform 0.3s", transform: selectedImage ? "scale(1)" : "scale(0.9)" }}
              >
                <img
                  onClick={closeSelectedImage} 
                  src={selectedImage}
                  alt='selected-image'
                  className="w-full h-full object-cover rounded-xl"
                  style={{ transition: "opacity 0.3s", opacity: selectedImage ? 1 : 0 }}
                />
              </div>
            </div>
          )
        }
      </div>
    </main>

  );
}
