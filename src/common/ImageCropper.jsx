import React, { FC, useEffect, useRef } from "react";
// import { UserImage } from '../../Models/Props'
import Cropper from "react-easy-crop";
import { useState } from "react";
import { useCallback } from "react";
import getCroppedImg from "./croppedImage";
import axios from "axios";
import { UserImageData } from "../../Models/Props";

const ImageCropper = ({
  image,
  updateUserImage,
  updateUserCroppedImage,
  updateUserImageSpecs,
}) => {
  const isInitialMount = useRef(true);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setzoom] = useState(1);
  const [newImageSize, setnewImageSize] = useState({});
  // eslint-disable-next-line
  const [rotation, setRotation] = useState(0);
  const onCropComplete = useCallback(
    (croppedArea, cropperAreaPixels) => {
      setnewImageSize(cropperAreaPixels);
    },
    []
  );
  const [userSpecs, setUserSpecs] = useState({});

  const cropTheImage = useCallback(async () => {
    const resize = {
      width: 300,
      height: 400,
    };
    // console.log("crop the image");
    try {
      const croppedImage = await getCroppedImg(
        image,
        newImageSize,
        rotation,
        resize
      );

      const croppedImageLoaded = new Image();
      croppedImageLoaded.onload = function () {
        updateUserCroppedImage(croppedImage);
      };
      croppedImageLoaded.src = croppedImage;

      // console.log(croppedImage);
      const imageData = croppedImage.split(",")[1];
      // console.log(imageData);

      const payload = {
        data: {
          uid: "11",
          consent: true,
          specs: {
            hair_texture: "Medium",
            hair_type: "Curly",
            hair_length: "Short",
            face_shape: "Heart",
          },
          image: imageData,
        },
      };
      // console.log(JSON.stringify(payload));
      axios
        .post(
          "https://recommendationenginedevgitlab-bwivq4k3ka-el.a.run.app/api/v1/process",
          JSON.stringify(payload),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          // handle success
          // console.log(response.data.response.face_data);
          setUserSpecs(response.data.response);
          // updateUserImageSpecs(response.data.response)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
    // eslint-disable-next-line
  }, [newImageSize, rotation]);


  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      updateUserImageSpecs(userSpecs);
    }
    // eslint-disable-next-line`
  }, [userSpecs]);
  return (
    <>
      <div className="ImageCropperConatiner">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          cropSize={{ width: 300, height: 400 }}
          aspect={3 / 4}
          onCropChange={setCrop}
          onZoomChange={setzoom}
          onCropComplete={onCropComplete}
          zoomWithScroll
          objectFit="vertical-cover"
          showGrid={false}
        />
        <div className="ImageCropperGuide">
          <div className="imageCropperFaceStructure" />
        </div>
      </div>
      <div className="cropControls">
        <button className="retakeButton">Retake Photo/ reupload Photo</button>
        <button onClick={() => cropTheImage()} className="cropImageButton">
          Crop Image
        </button>
      </div>
    </>
  );
};

export default ImageCropper;
