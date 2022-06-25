import axios from 'axios'
import React, { FC, useRef, useState } from 'react'
// eslint-disable-next-line
import { Navigate } from 'react-router'
import Webcam from 'react-webcam'
import faceMask from '../assets/images/facemask.svg'
import { EnumForStyleStudiSteps } from '../components/StyleStudio'

const ImageCapture = ({ updateUserImage, specs, setLoader, changeStep }) => {
    const videoConstraints = {
        facingMode: "user"
      };
  
    const image = useRef(null)
    let dataPrefix = ''
    const [webcamReady, setWebcamReady] = useState(false)
    const captureImage = () => {
        let imageData = image.current.getScreenshot()
        // dataPrefix = imageData.split(',')[0]
        // imageData = imageData.split(',')[1]

        // updateUserImage(imageData)
        // setImagePath(image.current.getScreenshot());
        updateUserImage(imageData);
        // setLoader(true);
        // dataPrefix = imageData.split(',')[0]
        // imageData = imageData.split(',')[1]
        // let payload = {

        //     "data": {
        //         "uid": 3094,
        //         "tempid": 384842,
        //         "consent": true,
        //         "specs": specs,
        //         "image": imageData
        //     }
        // }

        // axios

        //     .post(
        //         'https://recommendationenginedevgitlab-bwivq4k3ka-el.a.run.app/api/v1/correct',
        //         JSON.stringify(payload),
        //         {
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         }
        //     )
        //     .then(function (response) {
        //         // handle success
        //         // console.log(response.data.angles);
        //         setLoader(false);
        //         updateUserImage(dataPrefix + ',' + response.data.data);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //         setLoader(false);

        //     })
    }

    const getCameraReady = () => {
        setWebcamReady(true)
    }
    return (
        <div className='imageCaptureConatiner'>
            <div className='cameraContainer'>
                {/* <h3>Please align your face inside the marker and tie your hair ! </h3> */}
                <Webcam
                    ref={image}
                    mirrored={true}
                    screenshotQuality={1}
                    forceScreenshotSourceSize={true}
                    screenshotFormat='image/jpeg'
                    onUserMedia={() => getCameraReady()}
                    width={window.innerWidth < 1000 ? window.innerWidth : undefined}
                    videoConstraints={videoConstraints}
                />

                {webcamReady && (
                    <div className="ImageCaptureGuide">
                        <div className="imageCaptureFaceStructure" />
                        <img src={faceMask} alt="Livon" className="facemask-img" />
                    </div>
                )}
            </div>
            {webcamReady && (
                <div className="mt-4">

                    <button
                        className="btn btn-primary"
                        onClick={() => captureImage()}
                    >
                        Capture</button>

                    <button
                        className="btn btn-white ml-2" onClick={() => {changeStep(EnumForStyleStudiSteps.LIVONMODEL)}}>
                        Cancel</button>
                </div>
            )}
        </div>
    )
}

export default ImageCapture


