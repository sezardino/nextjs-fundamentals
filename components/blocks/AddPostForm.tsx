import { FormEvent, useState } from "react";

import { ImageInput, Button, Input, ImagesPreview } from "@/components";
import { CreatePostDto } from "@/types";
import { useUser } from "@/context";
import { Avatar } from "../UI";

interface Props extends React.HTMLProps<HTMLDivElement> {
  handler: (data: CreatePostDto) => void;
}

export const AddPostForm: React.FC<Props> = (props) => {
  const { handler } = props;
  const { user } = useUser();
  const [images, setImages] = useState<string[]>([]);
  const [body, setBody] = useState("");

  const addImage = (image: string) => {
    setImages((arr) => [...arr, image]);
  };

  const deleteFirstImage = () => {
    setImages(images.slice(1));
  };

  const resetFormData = () => {
    setImages([]);
    setBody("");
  };

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    console.log(1);

    if (!body || !images.length) {
      return;
    }

    if (body.length > 140 || images.length > 4) {
      return;
    }

    const formData: CreatePostDto = {};

    if (images.length) {
      formData.images = images;
    }

    if (body) {
      formData.body = body;
    }

    handler(formData);
    resetFormData();
  };

  return (
    <div className={`bg-white rounded-lg shadow p-6 ${props.className}`}>
      <div className="flex w-full">
        <Avatar
          href="/profile"
          name={user.name}
          userId={user.id}
          className="flex-shrink-0 mr-5"
        />
        <form className="flex-1" onSubmit={submitHandler}>
          <Input
            isTextarea={true}
            rows={3}
            placeholder="Type Something Nice..."
            value={body}
            className={"mb-2"}
            onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) =>
              setBody(evt.target.value)
            }
          />
          {images.length > 0 ? (
            <ImagesPreview images={images} deleteHandler={deleteFirstImage} />
          ) : null}

          <div className="flex justify-between items-center">
            <ImageInput addImage={addImage} />
            <div className="flex gap-2 items-center">
              {body.length > 0 && (
                <span
                  className={`${
                    body.length < 50
                      ? "text-green-600"
                      : body.length < 100
                      ? "text-yellow-600"
                      : "text-red-500"
                  }`}
                >
                  {body.length}
                </span>
              )}
              <Button type="submit">Add</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
