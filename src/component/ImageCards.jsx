import { IMAGE_URL } from "../config/config";

const ImageCards = ({image, title}) => {

    // console.log(image);
    
  return (
    <>
      <div class="relative my-4 w-64 h-40 rounded overflow-hidden shadow-lg">
        <img
          src={IMAGE_URL + image}
          alt="Image Title"
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/65 to-transparent bg-opacity-50 text-white text-center p-2">
          <h3 class="text-lg flex justify-end pr-2 font-medium">{title}</h3>
        </div>
      </div>
    </>
  );
};


export default ImageCards;