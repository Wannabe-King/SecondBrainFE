import { useRef, useState } from "react";
import { CloseIcon } from "../assets/closeIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

interface CustomModalProp {
  isOpen: Boolean;
  onClose: () => void;
}

export const CreateContentModal = (props: CustomModalProp) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const modelRef: any = useRef(null);
  const [contentType, setContentType] = useState(ContentType.Youtube);

  const closeModal = (e: any) => {
    if (modelRef.current === e.target) {
      props.onClose();
    }
  };

  async function addContent() {
    try {
      const title = titleRef.current?.value;
      const link = linkRef.current?.value;
      const respose = await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          link,
          title,
          type: contentType,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (respose.status == 200) {
        alert(respose.data.message);
      }
    } catch (e) {
      alert("Some Error Occured");
    }
  }
  return (
    <div>
      {props.isOpen && (
        <div
          ref={modelRef}
          onClick={closeModal}
          className="fixed inset-0 backdrop-blur-sm flex flex-col justify-center items-center"
        >
          <div>
            <div
              className="place-self-end text-black cursor-pointer"
              onClick={props.onClose}
            >
              <CloseIcon />
            </div>
            <div className="bg-stone-100 w-80 h-80 p-5 rounded-xl mt-2 flex flex-col items-center justify-center">
              <div className="p-4">
                <p className="text-black text-2xl font-bold">Add Content</p>
              </div>
              <div className="flex flex-col gap-2 text-xl ">
                <Input placeholder="title" ref={titleRef} />
                <Input placeholder="link" ref={linkRef} />
                <div className="flex flex-col gap-2 justify-center items-center">
                  <div className=" font-semibold text-black">Type</div>
                  <div className="flex gap-2 justify-center">
                    <Button
                      variant={
                        contentType === ContentType.Youtube
                          ? "primary"
                          : "secondary"
                      }
                      size="sm"
                      text="Youtube"
                      onClick={() => {
                        setContentType(ContentType.Youtube);
                      }}
                    />
                    <Button
                      variant={
                        contentType === ContentType.Twitter
                          ? "primary"
                          : "secondary"
                      }
                      size="sm"
                      text="Twitter"
                      onClick={() => {
                        setContentType(ContentType.Twitter);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full mt-2 flex justify-center cursor-pointer">
                  <Button
                    variant="primary"
                    size="lg"
                    text="Submit"
                    onClick={addContent}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
