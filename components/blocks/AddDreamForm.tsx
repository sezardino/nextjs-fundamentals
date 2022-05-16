import { FormEvent, useState } from "react";

import { ImageInput } from "@/components";
import { Button, Input } from "../UI";
import { ImagesPreview } from "./ImagesPreview";

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const AddDreamForm: React.FC<Props> = (props) => {
  const [images, setImages] = useState<string[]>([]);
  const [dreamString, setDreamString] = useState("");

  const addImage = (image: string) => {
    setImages((arr) => [...arr, image]);
  };

  const deleteFirstImage = () => {
    setImages(images.slice(1));
  };

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();

    if (dreamString.length < 140) {
      return;
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow p-6 ${props.className}`}>
      <div className="flex w-full">
        <div className="flex-shrink-0 mr-5">
          <div className="cursor-pointer font-bold w-12 h-12 bg-gray-300 flex items-center justify-center rounded-full">
            <span className="uppercase text-gray-700">CU</span>
          </div>
        </div>
        <form className="flex-1" onSubmit={submitHandler}>
          <Input
            isTextarea={true}
            rows={3}
            placeholder="Type Something Nice..."
            value={dreamString}
            className={"mb-2"}
            onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDreamString(evt.target.value)
            }
          />
          {images.length > 0 ? (
            <ImagesPreview images={images} deleteHandler={deleteFirstImage} />
          ) : null}

          <div className="flex justify-between items-center">
            <ImageInput addImage={addImage} />
            <div className="flex gap-2 items-center">
              {dreamString.length > 0 && (
                <span
                  className={`${
                    dreamString.length < 50
                      ? "text-green-600"
                      : dreamString.length < 100
                      ? "text-yellow-600"
                      : "text-red-500"
                  }`}
                >
                  {dreamString.length}
                </span>
              )}
              <Button type="button">Add</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
