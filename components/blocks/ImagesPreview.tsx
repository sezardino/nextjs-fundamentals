import CrossIcon from "@/assets/icons/cross.svg";

interface Props {
  images: string[];
  deleteHandler: () => void;
}

export const ImagesPreview: React.FC<Props> = (props) => {
  const { deleteHandler, images } = props;

  return (
    <div className="w-auto mb-2 border rounded-lg relative bg-gray-100 lg:mb-4 shadow-inset overflow-hidden">
      <div>
        <div className="m-0">
          {images.map((image, index) => (
            <img key={index} src={image} alt="included file" />
          ))}
        </div>
      </div>

      <button
        className="shadow cursor-pointer absolute top-0 right-0 p-2 mr-2 mt-2 rounded-full bg-gray-600"
        onClick={deleteHandler}
      >
        <CrossIcon className="h-6 w-6 text-gray-100" />
      </button>
    </div>
  );
};
