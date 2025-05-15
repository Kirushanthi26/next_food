"use client";

import { useRef } from "react";
import styles from "./image-picker.module.css";

type ImagePickerProps = {
  name: string;
  label: string;
};

export default function ImagePicker({ name, label }: ImagePickerProps) {
  const imageInput = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          name={name}
          id={name}
          ref={imageInput}
          accept="image/jpeg image/png"
        />
      </div>
      <button type="button" className={styles.button} onClick={handlePickClick}>
        Pick an Image
      </button>
    </div>
  );
}
