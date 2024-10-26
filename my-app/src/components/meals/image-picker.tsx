"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

interface ImageProps {
  label: string;
  name: string;
}
export default function ImagePicker({ label, name }: ImageProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const handlePickImage = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const dataUrl = fileReader.result as string;
      setPickedImage(dataUrl);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.control}>
          <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && <Image src={pickedImage} alt="Picked Image" fill />}
          </div>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png , image/jpeg"
            name={name}
            ref={imageInputRef}
            onChange={handleImageChange}
            required
          />
          <button
            className={classes.button}
            type="button"
            onClick={handlePickImage}
          >
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}
