"use client";

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

type ImagePickerProps = {
  name: string;
  label: string;
};

export default function ImagePicker({ name, label }: ImagePickerProps) {
  const imageInput = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handlePickClick = () => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setSelectedImage(null);
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {selectedImage && (
            <Image src={selectedImage} alt="Selected Meal" fill />
          )}
          {!selectedImage && <p>No image chosen yet!</p>}
        </div>
        <input
          className={styles.input}
          type="file"
          name={name}
          id={name}
          ref={imageInput}
          accept="image/jpeg image/png"
          onChange={handleImageChange}
        />
      </div>
      <button type="button" className={styles.button} onClick={handlePickClick}>
        Pick an Image
      </button>
    </div>
  );
}
