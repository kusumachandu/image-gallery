/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { images } from "@/utils/images";

export default function SearchImage() {

  const [searchQuery, setSearchQuery] = useState<string | undefined>("");
  const [filteredImages, setFilteredImages] = useState<any>(images);

  function handleSearch(e: any) {
    const query = e.target.value;
    setSearchQuery(query);

    const filter = images.filter((image) => {
      return image.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredImages(filter);

  };

  return (
    <>
      <div className="py-4 text-center flex justify-center items-center">
        <input 
          type="text"
          value={searchQuery}
          placeholder="Search Imagen By Name"
          onChange={handleSearch}
          className="text-black px-4 outline-none focus:outline-none rounded-md py-1"
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {filteredImages.map((image: string, index: number) => (
          <div
            key={index}
            className="relative aspect-h-1 aspect-w-1 h-[200px] rounded-lg"
          >
            <img
              className="inset-0 w-full h-full object-cover rounded-lg"
              src={image}
              alt="images"
            />
          </div>
        ))}
      </div>
    </>
  )
}