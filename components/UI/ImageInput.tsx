import ImageIcon from "@/assets/icons/image.svg";

interface Props extends React.HTMLProps<HTMLInputElement> {
  addImage: (image: string) => void;
}

export const ImageInput: React.FC<Props> = (props) => {
  const { addImage } = props;

  const onFilesChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const inputFiles = evt.target.files;

    if (!inputFiles) {
      return;
    }

    const filesLength = inputFiles.length;
    for (let i = 0; i < filesLength; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (!e.target || !e.target.result) {
          return;
        }
        addImage(e.target.result as string);
      };

      reader.readAsDataURL(inputFiles[i]);
    }
  };

  return (
    <label className="-ml-2 cursor-pointer inine-flex justify-between items-center focus:outline-none p-2 rounded-full text-gray-500 bg-white hover:bg-gray-200">
      <ImageIcon className="h-6 w-6 text-gray-500" />
      <input
        multiple
        name="photo"
        accept="image/*"
        type="file"
        className="hidden"
        onChange={onFilesChange}
      />
    </label>
  );
};
