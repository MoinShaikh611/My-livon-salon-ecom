import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import $ from 'jquery';
import { LightgalleryItem, LightgalleryProvider, } from 'react-lightgallery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styleStudioTitle from '../assets/images/stylestudio-title.png';
import styleStudioFace from '../assets/images/stylestudio-face.png';

import hairType1 from '../assets/images/hair-type1.png';
import hairType2 from '../assets/images/hair-type2.png';
import hairType3 from '../assets/images/hair-type3.png';

import hairTexture1 from '../assets/images/hair-texture1.jpg';
import hairTexture2 from '../assets/images/hair-texture2.png';
import hairTexture3 from '../assets/images/hair-texture3.png';

import hairHeight1 from '../assets/images/hair-height1.png';
import hairHeight2 from '../assets/images/hair-height2.png';
import hairHeight3 from '../assets/images/hair-height3.png';

import face1 from '../assets/images/face1.jpg';
import face2 from '../assets/images/face2.jpg';
import face3 from '../assets/images/face3.jpg';
import face4 from '../assets/images/face4.jpg';
import face5 from '../assets/images/face5.jpg';
import face6 from '../assets/images/face6.jpg';

import styleStudioTitle2 from '../assets/images/stylestudio-title2.png';
import selfieModal from '../assets/images/selfie-modal.png';
import camera from '../assets/images/camera.png';
import browse from '../assets/images/browse.png';
import livonModel from '../assets/images/livon-model.png';
import { StepSlider } from '../common/stepSlider';


import recom1 from '../assets/images/recom1.png';
import recom2 from '../assets/images/recom2.png';
import recom3 from '../assets/images/recom3.png';

import headBandImg1 from '../assets/images/headband1.jpg';
import headBandImg2 from '../assets/images/headband2.jpg';
import headBandImg3 from '../assets/images/headband3.jpg';
import headBandImg4 from '../assets/images/headband4.jpg';
import headbandBraidsTitle from '../assets/images/headbandbraids-title.png';
import loveResult from '../assets/images/lovethe-result.png';
import loveResultTitle from '../assets/images/loveresults-title.png';

import sb1 from '../assets/images/sb1.png';
import sb2 from '../assets/images/sb2.png';
import sb3 from '../assets/images/sb3.png';

import { isNullUndefinedOrBlank, isEmptyObjectOrNullUndefiend } from '../utility/Helper';
import ImageCapture from '../common/ImageCapture';
import axios from 'axios';
import Slider from "react-slick";
import getCroppedImg from '../common/croppedImage';
import Cropper from 'react-easy-crop';
import Loader from './Loader';
import ScrollToTop from '../common/scrollTop';
import { NavLink } from 'react-router-dom';
import Round from "../assets/images/FaceShapes/Round.jpg";
import Long from "../assets/images/FaceShapes/Long.jpg";
import Oval from "../assets/images/FaceShapes/Oval.jpg";
import Heart from "../assets/images/FaceShapes/Heart.jpg";
import Diamond from "../assets/images/FaceShapes/Diamond.jpg";
import Square from "../assets/images/FaceShapes/Square.jpg"
import { useHistory } from "react-router-dom";
import Compressor from 'compressorjs';

const faceStructureSlider = {
    loop: true,
    // autoplay: false,
    // animateOut: 'fadeOut',
    items: 3,
    margin: 15,
    nav: false,
    dots: true,
    // responsiveRefreshRate: 0,
    // touchDrag: false,
    // mouseDrag: false
};
const recommendSlider = {
    loop: false,
    autoplay: false,
    items: 3.5,
    margin: 40,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 2.5,
        },
        1200: {
            items: 3.5,
        },
    }
};

// const looksVideoSliderOne = {
//     loop: false,
//     autoplay: false,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: true,
//     fade: true,
//     responsive: [
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//             }
//         }
//     ]
// };
const ModelImages = {
    Round: Round,
    Long: Long,
    Oval: Oval,
    Heart: Heart,
    Diamond: Diamond,
    Square: Square,
};

export const EnumForStyleStudiSteps = {
    WELCOMESTUDIO: "WelcomeStudio",
    HAIRTYPE: "HairType",
    HAIRTEXTURE: "HairTexture",
    HAIRSIZE: "HairSize",
    FACESTRUCTURE: "FaceStructure",
    LIVONMODEL: "LivonModel",
    YOURSRECOMMENDATIONS: "YoursRecommendations",
};
const EnumForHairType = {
    STRAIGHT: 'Straight',
    WAVY: 'Wavy',
    CURLY: 'Curly'
};
const EnumForHairTexture = {
    THICK: 'Thick',
    FINE: 'Fine',
    MEDIUM: 'Medium'
};
const EnumForHairSize = {
    LONG: 'Long',
    MEDIUM: 'Medium',
    SHORT: 'Short'
};
const EnumForFaceStructure = {
    SQUARE: 'Square',
    DIAMOND: 'Diamond',
    OVAL: 'Oval',
    LONG: 'Long',
    HEART: 'Heart',
    ROUND: 'Round'
};

export default function StyleStudio() {
    const [step, setStep] = React.useState(EnumForStyleStudiSteps.WELCOMESTUDIO);
    const [hairStyleIdsState, setHairStyleIdsState] = React.useState();
    const [hairType, setHairType] = React.useState();
    const [isHairTypeSelected, setIsHairTypeSelected] = React.useState();
    const [hairTexture, setHairTexture] = React.useState();
    const [isHairTextureSelected, setIsHairTextureSelected] = React.useState();
    const [hairSize, setHairSize] = React.useState();
    const [isHairSizeSelected, setIsHairSizeSelected] = React.useState();
    const [faceStructure, setFaceStructure] = React.useState();
    const [isFaceStructureSelected, setIsFaceStructureSelected] = React.useState();
    const [isConsentSelected, setIsConsentSelected] = React.useState(true);
    const [selectedImage, setSelectedImage] = React.useState();
    const [selFieImage, setSelfieImage] = React.useState();
    const [processedImage, setProcessedImage] = React.useState();
    const [userSpecs, setUserSpecs] = React.useState({});
    // USE STATE VARIABLES 
    const canvasRef = useRef();
    const [selectedHairStyle, setSelectedHairStyle] = useState();
    const [userRecommendations, setUserRecommendations] = useState([])
    const [recommendedHairStyles, setRecommendedHairStyles] = useState([])
    const [userImage, setUserImage1] = useState();
    const [userImageSpecs, setUserImageSpecs] = useState()
    // eslint-disable-next-line`
    const [subSet1, setSubSet1] = useState([])
    // eslint-disable-next-line`
    const [subSet2, setSubSet2] = useState([])
    // eslint-disable-next-line`
    const [finalSet, setfinalSet] = useState({
        set1: [],
        set2: []
    });

    const [loader, setLoader] = useState(false);
    const [isLoadMore, setIsLoadMore] = useState(false);

    const history = useHistory();
    const isInitialMount = useRef(true);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setzoom] = useState(1);
    const [newImageSize, setnewImageSize] = useState({});
    // eslint-disable-next-line

    const [rotation, setRotation] = useState();
    const [finalImage, setFinalImage] = useState();
    const onCropComplete = useCallback(
        (croppedArea, cropperAreaPixels) => {
            setnewImageSize(cropperAreaPixels);
        },
        []
    );

    const cropTheImage = useCallback(async () => {
        const resize = {
            width: 300,
            height: 400,
        };
        // console.log("crop the image");
        try {
            const croppedImage = await getCroppedImg(
                selectedImage,
                newImageSize,
                rotation,
                resize
            );

            const croppedImageLoaded = new Image();
            croppedImageLoaded.onload = function () {
                setFinalImage(croppedImage);
            };
            croppedImageLoaded.src = croppedImage;

        } catch (e) {
            console.log(e);
        }
        // eslint-disable-next-line
    }, [newImageSize, rotation]);

    const changeStep = (step) => {
        setStep(step);
    }
    const setUserImage = (userImage) => {
        console.log(userImage);
        setSelfieImage(userImage)

    };
    const onChangeImage = async (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        if (file) {
            const file = e.target.files[0]
            const imageDataUrl = await readFile(file)
            setSelectedImage(imageDataUrl);
            // reader.onloadend = () => {
            //     setSelectedImage(reader.result);
            //     // processImage();
            // };
            // reader.readAsDataURL(file);
        }
    }
    const readFile = useCallback(file => {
        return new Promise((resolve, reject) => {
            try {
                const reader = new FileReader()
                reader.onload = () => resolve(reader.result)
                getNormalizedFile(file)
                    .then(normalizedFile => reader.readAsDataURL(normalizedFile))
                    .catch(error => reject(error))
            } catch (error) {
                reject(error)
            }
        })
    }, [])
    const getNormalizedFile = file => {
        return new Promise((resolve, reject) => {
            new Compressor(file, {
                maxWidth: 1000,
                maxHeight: 1000,
                success(normalizedFile) {
                    resolve(normalizedFile)
                },
                error(error) {
                    reject(error)
                },
            })
        })
    }


    const resetQuiz = () => {
        setHairType("")
        setIsHairTypeSelected("")
        setHairTexture("")
        setIsHairTextureSelected("")
        setHairSize("")
        setIsHairSizeSelected("")
        setFaceStructure("")
        setIsFaceStructureSelected("")
        setIsConsentSelected(true)
        setSelfieImage("")
        setUserSpecs({});
        setSelectedImage(null);
        setFinalImage(null);

    }
    useEffect(() => {
        document.body.classList.add("body-stylestudio");
        return function cleanup() {
            document.body.classList.remove("body-stylestudio");
        };
    }, [])
    useEffect(() => {
        console.log(userSpecs);
        if (!isEmptyObjectOrNullUndefiend(userSpecs)) {

            setRecommendedHairStyles(userSpecs.hairstyles)
        }
    }, [userSpecs])
    useEffect(() => {
        if (!isEmptyObjectOrNullUndefiend(recommendedHairStyles)) {

            createSubsets();
        }
    }, [recommendedHairStyles])

    const processImage = () => {
        // changeStep(EnumForStyleStudiSteps.YOURSRECOMMENDATIONS);
        setfinalSet({
            set1: [],
            set2: []
        });
        const dataPrefix = finalImage ? finalImage.split(',')[0] : null
        setLoader(true);

        const obj = {
            "data": {
                "uid": 0,
                "tempid": "474747",
                "consent": true,
                "specs": {
                    "hair_type": hairType ? hairType : '',
                    "hair_length": hairSize ? hairSize : '',
                    "hair_texture": hairTexture ? hairTexture : '',
                    "face_shape": faceStructure ? faceStructure : ''
                },
                "image": finalImage ? finalImage.split(',')[1] : ""

            }
        }
        const header = {
            Accept: '*/*',
            "Content-Type": 'application/json',
            'Access-Control-Allow-Origin': 'https://recommendationenginedevgitlab-bwivq4k3ka-el.a.run.app',
            'Access-Control-Allow-Methods': 'GET, POST, PUT',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
        const API_ENDPOINT =
            'https://recommendationenginedevgitlab-bwivq4k3ka-el.a.run.app/api/v1/process'
        axios
            .post(API_ENDPOINT, obj, { headers: header })
            .then((res) => {
                console.log(res);
                setLoader(false);
                setUserSpecs(res.data.response);

                changeStep(EnumForStyleStudiSteps.YOURSRECOMMENDATIONS);
            })
            .catch((err) => {
                console.error(err)
                setLoader(false);
            })
    }

    const getAllHairStyles = (hairStyleIds) => {

        setHairStyleIdsState(hairStyleIds);
        setLoader(true);
        const payload = {
            data: {
                ids: hairStyleIds,
            },
        };
        axios
            .post(
                "https://recommendationenginedevgitlab-bwivq4k3ka-el.a.run.app/api/v1/hairstyle",
                JSON.stringify(payload),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                console.log(response);
                setLoader(false);
                let url = response.data.response[0].video_url.split('/');

                // url.push('embed');
                url = 'https://www.youtube.com/embed/' + url[url.length - 1];
                console.log(url);
                const selectedhairStyle = {
                    image: response.data.response[0].front_image,
                    back_image: response.data.response[0].back_image,
                    side_image: response.data.response[0].side_image,
                    hairStyleSpecs: response.data.response[0].image_params,
                    hairstyle_name: response.data.response[0].hairstyle_name,
                    video_url: url,
                    tag_line: response.data.response[0].tag_line
                };

                setSelectedHairStyle(selectedhairStyle);

                setUserRecommendations(response.data.response);
                if (!isEmptyObjectOrNullUndefiend(hairStyleIds) && !isNullUndefinedOrBlank(JSON.parse(sessionStorage.getItem('userSessionData')))) {
                    const obj = JSON.parse(sessionStorage.getItem('userSessionData'));
                    saveHairStyle(obj?.uid, hairStyleIds);
                }

            })
            .catch((error) => {
                console.log(error);
                setLoader(false);
            });
    };
    const getUserFaceData = (faceData) => {
        console.log(faceData);
        // eslint-disable-next-line
        const faceWidth =
            faceData.inner_bb.top_right.x_value - faceData.inner_bb.top_left.x_value;

        const faceHeight =
            faceData.inner_bb.bottom_left.y_value -
            faceData.inner_bb.top_left.y_value;
        // eslint-disable-next-line
        const x = faceData.inner_bb.top_left.x_value;
        const y = faceData.inner_bb.top_left.y_value;

        return [
            faceData.left_ear.x_value,
            y,
            faceData.right_ear.x_value - faceData.left_ear.x_value,
            faceHeight,
        ];
    };
    const updateFinalSet = () => {
        // if (finalSet.set1.length <= 3 && finalSet.set2.length <= 3) {

        //     if (subSet1.length) {
        //         const random = Math.floor(Math.random() * subSet1.length);
        //         if (finalSet.set1.includes(subSet1[random]))
        //             finalSet.set1.push(...subSet2.splice(random - 1, 1));
        //         else
        //             finalSet.set1.push(...subSet1.splice(random, 1));
        //     }
        //     if (subSet2.length) {
        //         for (let i = 0; i < 2; i++) {
        //             const random = Math.floor(Math.random() * subSet2.length);
        //             if (finalSet.set1.includes(subSet2[random]))
        //                 finalSet.set1.push(...subSet2.splice(random - 1, 1));
        //             else
        //                 finalSet.set1.push(...subSet2.splice(random, 1));
        //         }

        //         finalSet.set2.push(...subSet1, ...subSet2);
        //     }
        // }

        while (finalSet.set1.length < 1 && subSet1.length) {
            finalSet.set1.push(
                subSet1.splice(Math.floor(Math.random() * subSet1.length), 1)[0]
            );
        }

        while (finalSet.set1.length < 3 && subSet2.length) {
            finalSet.set1.push(
                subSet2.splice(Math.floor(Math.random() * subSet2.length), 1)[0]
            );
        }

        while (finalSet.set2.length < 1 && subSet1.length) {
            finalSet.set2.push(
                subSet1.splice(Math.floor(Math.random() * subSet1.length), 1)[0]
            );
        }

        while (finalSet.set2.length < 3 && subSet2.length) {
            finalSet.set2.push(
                subSet2.splice(Math.floor(Math.random() * subSet2.length), 1)[0]
            );
        }
        while (finalSet.set1.length < 3) {
            if (finalSet.set2.length > 0) {
                finalSet.set1.push(finalSet.set2.pop());
            } else {
                break;
            }
        }
        //   updateSelectedHairStyles();
        getAllHairStyles([...finalSet.set1, ...finalSet.set2]);
    }
    const createSubsets = () => {
        let primary = [...recommendedHairStyles["primary"]];
        let secondary = [...recommendedHairStyles["secondary"]];
        let tertiary = [...recommendedHairStyles["tertiary"]];
        let quaternery = [...recommendedHairStyles["quaternery"]];

        while (primary.length && subSet1.length < 2) {
            subSet1.push(
                primary.splice(Math.floor(Math.random() * primary.length), 1)[0]
            );
        }

        while (secondary.length && subSet1.length < 2) {
            subSet1.push(
                secondary.splice(Math.floor(Math.random() * secondary.length), 1)[0]
            );
        }

        while (tertiary.length && subSet2.length < 4) {
            subSet2.push(
                tertiary.splice(Math.floor(Math.random() * tertiary.length), 1)[0]
            );
        }

        while (quaternery.length && subSet2.length < 4) {
            subSet2.push(
                quaternery.splice(Math.floor(Math.random() * quaternery.length), 1)[0]
            );
        }

        // Object.keys(recommendedHairStyles).forEach((category, index) => {
        //     if (category === "primary" || category === "secondary") {
        //         if (recommendedHairStyles[category].length) {

        //             recommendedHairStyles[category].forEach((id) => {
        //                 if (subSet1.length < 2) {
        //                     const random = Math.floor(Math.random() * recommendedHairStyles[category].length);
        //                     subSet1.push(recommendedHairStyles[category][random]);
        //                 }
        //             });

        //         }
        //     } else {
        //         if (recommendedHairStyles[category].length) {
        //             recommendedHairStyles[category].forEach((id) => {
        //                 if (subSet2.length < 4) {
        //                     const random = Math.floor(Math.random() * recommendedHairStyles[category].length);
        //                     if (subSet2.includes(subSet2[random])) {
        //                         subSet2.push((recommendedHairStyles[category][random - 1] && !subSet2.includes(subSet2[random - 1])) ?
        //                             recommendedHairStyles[category][random - 1] :
        //                             !subSet2.includes(subSet2[random + 1]) ?
        //                                 recommendedHairStyles[category][random + 1] :
        //                                 recommendedHairStyles[category][random + 2]);
        //                     }
        //                     else
        //                         subSet2.push(recommendedHairStyles[category][random]);
        //                 }
        //             })

        //         }
        //     }


        // })

        updateFinalSet();


    }
    const drawOnCanvas = (selectedHairStyle) => {
        console.log(selectedHairStyle);
        const canvas = canvasRef.current
        // const context = canvas.getContext('2d')
        // context.clearRect(0, 0, canvas.width, canvas.height)
        // context.imageSmoothingEnabled = true
        // const userimage = new Image()
        // userimage.src = finalImage ? finalImage : 'https://www.mylivonmysalon.com/wp-content/plugins/try_on_hairstyle/app/static/media/Oval.caf4c2ee.jpg';

        // userimage.onload = () => {
        //     context.drawImage(userimage, 0, 0, 300, 400)
        // }





        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        const userimage = new Image();
        let modelImage = undefined;
        Object.keys(ModelImages).forEach((option) => {
            if (option === faceStructure) {
                console.log(faceStructure);
                console.log(option);
                console.log(ModelImages);
                console.log(ModelImages[option]);
                modelImage = ModelImages[option];
            }
        });
        userimage.src = finalImage ? finalImage : modelImage;




        const obj = {
            "inner_bb": {
                "bottom_left": {
                    "x_value": 70,
                    "y_value": 263,
                    "z_value": 0
                },
                "bottom_right": {
                    "x_value": 228,
                    "y_value": 263,
                    "z_value": 0
                },
                "top_left": {
                    "x_value": 70,
                    "y_value": 101,
                    "z_value": 0
                },
                "top_right": {
                    "x_value": 228,
                    "y_value": 101,
                    "z_value": 0
                }
            },
            "left_ear": {
                "x_value": 87.50694,
                "y_value": 182.7494,
                "z_value": 74.44351
            },
            "outer_bb": {
                "bottom_left": {
                    "x_value": 52,
                    "y_value": 282,
                    "z_value": 0
                },
                "bottom_right": {
                    "x_value": 247,
                    "y_value": 282,
                    "z_value": 0
                },
                "top_left": {
                    "x_value": 52,
                    "y_value": 56,
                    "z_value": 0
                },
                "top_right": {
                    "x_value": 247,
                    "y_value": 56,
                    "z_value": 0
                }
            },
            "right_ear": {
                "x_value": 212.14787,
                "y_value": 186.36147,
                "z_value": 72.782166
            }
        };
        console.log(userSpecs);
        console.log(!isEmptyObjectOrNullUndefiend(userSpecs));
        console.log(userSpecs.face_data !== 'Model Image');
        console.log(!isEmptyObjectOrNullUndefiend(userSpecs) && (userSpecs.face_data !== 'Model Image'));
        console.log((!isEmptyObjectOrNullUndefiend(userSpecs) && (userSpecs.face_data !== 'Model Image')) ? userSpecs.faceData : obj);
        const specs = (!isEmptyObjectOrNullUndefiend(userSpecs) && (userSpecs.face_data !== 'Model Image')) ? userSpecs.face_data : obj;
        console.log('SPECS', specs);
        // const [faceX, faceY, faceWidth, faceHeight] =
        //     getUserFaceData(specs);

        // let hairStyleFaceWidth = selectedHairStyle.hairStyleSpecs.face_width;
        // let hairStyleFaceHeight = selectedHairStyle.hairStyleSpecs.face_height;

        // const widthDiff = (faceWidth - hairStyleFaceWidth) * 2;
        // const heightDiff = (faceHeight - hairStyleFaceHeight) * 2;

        // console.log('widthDiff', widthDiff);
        // console.log('heightDiff', heightDiff);


        userimage.onload = () => {
            context.drawImage(userimage, 0, 0, 300, 400);

            const [faceX, faceY, faceWidth, faceHeight] =
                getUserFaceData(specs);
            const image = new Image();
            image.onload = () => {
                var spHeight = 0;
                var spWidth = 0;
                var widthFactor =
                    faceWidth / selectedHairStyle.hairStyleSpecs.face_width;
                var heightFactor =
                    faceHeight / selectedHairStyle.hairStyleSpecs.face_height;
                const spImageX =
                    faceX +
                    faceWidth / 2 -
                    selectedHairStyle.hairStyleSpecs.face_start_X * widthFactor;
                const spImageY =
                    faceY - selectedHairStyle.hairStyleSpecs.face_start_Y * heightFactor;
                spWidth =
                    selectedHairStyle.hairStyleSpecs.hairstyle_width * widthFactor;
                spHeight =
                    selectedHairStyle.hairStyleSpecs.hairstyle_height * heightFactor;
                context.drawImage(image, spImageX, spImageY, spWidth, spHeight);
            };

            image.src = selectedHairStyle.image;

            // const image = new Image();
            // image.src = selectedHairStyle.image;
            // image.onload = () => {
            //     const spImageX =
            //         faceX -
            //         selectedHairStyle.hairStyleSpecs.face_start_X +
            //         faceWidth / 2 -
            //         widthDiff / 2;
            //     const spImageY =
            //         faceY -
            //         selectedHairStyle.hairStyleSpecs.face_start_Y -
            //         heightDiff / 4;
            //     const spWidth = 300 + widthDiff;
            //     const spHeight = 400 + heightDiff;

            //     console.log('faceX', faceX);
            //     console.log('start', selectedHairStyle.hairStyleSpecs.face_start_X);
            //     console.log('faceWidth', faceWidth);
            //     console.log('widthDiff', widthDiff);



            //     const cWidth = ((faceX - spImageX) * 2) + faceWidth;
            //     const cHeight = faceHeight * (cWidth / faceWidth);

            //     // //(image);

            //     // if (spImageX < faceWidth) {
            //     //     context.drawImage(image, faceX, faceY, faceWidth, faceHeight);
            //     // }
            //     // else {
            //     //     context.drawImage(image, spImageX, spImageY, cWidth, cHeight);
            //     // }

            //     context.drawImage(image, spImageX, spImageY, cWidth, cHeight);
            //     context.beginPath();
            //     context.rect(faceX, faceY, faceWidth, faceHeight);
            //     context.stroke();
            //     context.strokeStyle = "green";

            //     context.rect(spImageX, spImageY, cWidth, cHeight);
            //     context.stroke();


            //     console.log('cWidth', cWidth);
            //     console.log('cHeight', cHeight);
            //     console.log('spImageX', spImageX);
            //     console.log('spImageY', spImageY);
            //     console.log('faceWidth', faceWidth);
            //     console.log('faceHeight', faceHeight);
            // };
        }
    }

    // React.useEffect(() => {
    // 	$('.stylestudio-facestru .owl-carousel .card-facestru').on('click', function (e) {
    //         e.preventDefault();
    // 		$('.stylestudio-facestru .owl-carousel .card-facestru').removeClass('card-active');
    // 		$('.stylestudio-facestru .owl-carousel .card-facestru').addClass('card-active');
    // 	});
    // }, []);

    // useEffect(() => {
    //     if (selectedHairStyle) {
    //         drawOnCanvas(selectedHairStyle);
    //     } else {
    //         createSubsets();
    //     }
    //     // eslint-disable-next-line
    // }, [selectedHairStyle]);

    useEffect(() => {
        if (!isNullUndefinedOrBlank(selectedHairStyle)) {
            drawOnCanvas(selectedHairStyle);
        } else {
            if (!isEmptyObjectOrNullUndefiend(recommendedHairStyles)) {

                createSubsets();
            }
        }
        // eslint-disable-next-line
    }, [selectedHairStyle]);



    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address.';
        }

        if (!values.password) {
            errors.password = 'Password is required.';
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required.';
        }

        // console.log("errors in errro");
        // console.log(errors);
        return errors;
    };

    const formikSignup = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate,
        onSubmit: values => {
            setLoader(true);
            if (values.password != values.confirmPassword) {
                // errors.confirmPassword = 'Password and confirm password not matched.';
                alert('Password and confirm password not matched.');
                return;
            }

            delete values.confirmPassword;
            values.phoneNumber = values.phoneNumber;
            values.phoneNumber = values.phoneNumber != '' ? parseInt(values.phoneNumber) : 0;
            // console.log("values");
            // console.log(values);

            const payload = {
                ...values,
                data: {
                    finalImage,
                    hairStyleIdsState
                }
            };
            axios
                .post(
                    "https://backend.livon-demo.in/api/user/auth/registration",
                    JSON.stringify(payload),
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    console.log("signup response");
                    console.log(response);
                    if (response.data.code != 200) {
                        alert(response.data.message);
                    } else {
                        history.push("/styleStudio");
                    }
                    console.log("hairStyleIdsState");
                    console.log(hairStyleIdsState);
                    setLoader(false);
                    // console.log("finalImage");
                    // console.log(finalImage);

                    sessionStorage.setItem("userSessionData", JSON.stringify(response.data.results));
                    $('#loginSignupModal').removeClass('show');
                    $('#loginSignupModal').hide();
                    $('.modal-backdrop').remove();
                    // $('.modal-backdrop').remove();
                    $('.modal-backdrop').removeClass('show');
                    $('body').removeClass('modal-open');

                })
                .catch((error) => {
                    console.log("sign up error");
                    console.log(error.response);
                    setLoader(false);
                    alert(error.response.data.message);
                });


        },
    });

    const saveHairStyle = (uId, hairStyles) => {
        const payload = {
            "uid": uId,
            data: {
                finalImage,
                hairStyleIdsState: hairStyles
            }
        };
        axios
            .post(
                "https://backend.livon-demo.in/api/user/quize/add",
                JSON.stringify(payload),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                // console.log("signup response");
                console.log(response);
                setLoader(false);
                // console.log("hairStyleIdsState");
                // console.log(hairStyleIdsState);
                // console.log("finalImage");
                // console.log(finalImage);


            })
            .catch((error) => {
                console.log("sign in error");
                console.log(error);
                setLoader(false);
                alert(error.response.data.message);
            });
    }

    // useEffect(() => {
    //     console.log(hairStyleIdsState);
    //     if (!isEmptyObjectOrNullUndefiend(hairStyleIdsState) && !isNullUndefinedOrBlank(JSON.parse(sessionStorage.getItem('userSessionData')))) {
    //         const obj = JSON.parse(sessionStorage.getItem('userSessionData'));
    //         saveHairStyle(obj?.uid);
    //     }
    // }, [hairStyleIdsState])

    const loginValidate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address.';
        }

        if (!values.password) {
            errors.password = 'Password is required.';
        }

        // console.log("errors in errro");
        // console.log(errors);
        return errors;
    };


    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        loginValidate,
        onSubmit: values => {
            setLoader(true);
            const payload = {
                ...values,
                data: {
                    finalImage,
                    hairStyleIdsState
                }
            };
            axios
                .post(
                    // "http://localhost:4000/api/user/auth/login",
                    "https://backend.livon-demo.in/api/user/auth/login",
                    // "http://ec2-3-109-3-35.ap-south-1.compute.amazonaws.com:3000/api/user/auth/registration",
                    JSON.stringify(payload),
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    // console.log("signup response");
                    // console.log(response);
                    if (response.data.code != 200) {
                        alert(response.data.message);
                    } else {
                        history.push("/styleStudio");
                    }
                    setLoader(false);
                    // console.log("hairStyleIdsState");
                    // console.log(hairStyleIdsState);
                    // console.log("finalImage");
                    // console.log(finalImage);

                    sessionStorage.setItem("userSessionData", JSON.stringify(response.data.results));
                    $('#loginSignupModal').removeClass('show');
                    $('.modal-backdrop').remove();
                    $('#loginSignupModal').hide();
                    // $('.modal-backdrop').remove();
                    $('.modal-backdrop').removeClass('show');
                    $('body').removeClass('modal-open');

                })
                .catch((error) => {
                    console.log("sign in error");
                    console.log(error);
                    setLoader(false);
                    alert(error.response.data.message);
                });


        },
    });
    useEffect(() => {
        console.log(step)
        /* settimeout make sure this run after components have rendered. This will help fixing bug for some views where scroll to top not working perfectly */
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    }, [step])
    return (
        <main>
            {loader && (<Loader loading={loader} />)}
            {(() => {
                switch (step) {
                    case EnumForStyleStudiSteps.WELCOMESTUDIO:
                        return (
                            <>
                                {/* Style Studio */}

                                <section className="style-studio">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="text-with-plus">
                                                    <p className="text-white">STYLE <span className="text-primary">STUDIO</span> <i
                                                        className="fa fa-plus ml-2" aria-hidden="true"></i></p>
                                                    {/* <h3>Welcome to</h3> */}
                                                </div>
                                            </div>
                                            {/* <div className="col-md-6 col-sm-12">
                                                <div className="stylestudio-button">
                                                    <button className="btn btn-primary">DISCOVER</button>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="stylestudio-content">
                                                    <div className="styletribe-title">
                                                        <img src={styleStudioTitle} alt="Livon" />
                                                    </div>
                                                    <p>Your next hairstyle is going to be fabulous!<br />Answer these questions and we’ll pick the best styles for you.</p>
                                                    {/* <p><b>Take the quiz</b>, tell us about your hair and the Studio
                                                        will pop out the best hairstyles for you. <b>Let's go!</b></p> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-5 col-sm-12">
                                                <label className="checkbox mb-4">I consent to the processing of my information by
                                                    Livon as set out in the <NavLink className="text-white border-pink" to="/termsCondition">Terms and Conditions</NavLink>
                                                    <input type="checkbox" checked={isConsentSelected === true} onChange={() => { setIsConsentSelected(!isConsentSelected) }} />
                                                    <span className="checkmark"></span>
                                                </label>
                                                {
                                                    isConsentSelected ?
                                                        <button className="btn btn-primary" onClick={() => { changeStep(EnumForStyleStudiSteps.HAIRTYPE) }}>SUBMIT</button>
                                                        : <button className="btn btn-primary" onClick={() => { changeStep(EnumForStyleStudiSteps.HAIRTYPE) }}>SKIP</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stylestudio-face">
                                        <img src={styleStudioFace} alt="Livon" />
                                    </div>
                                    <div className="stylestudio-stripe">

                                    </div>
                                </section>

                            </>
                        );
                    case EnumForStyleStudiSteps.HAIRTYPE:
                        return (
                            <>

                                {/* Hair Type */}
                                <section className="stylestudio-hairtype">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="text-with-plus">
                                                    <p className="mb-0">STYLE <span className="text-primary">STUDIO</span> <i
                                                        className="fa fa-plus ml-2" aria-hidden="true"></i></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-6 col-md-10 col-sm-12">
                                                <div className="main-title">
                                                    <h2 className="mb-0 text-center">What's your natural <span className="text-primary">Hair Type?</span></h2>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row outergrid">
                                            <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                <div className={`card-hairtype ${hairType === EnumForHairType.STRAIGHT ? 'card-active' : ''} `} onClick={() => { setHairType(EnumForHairType.STRAIGHT) }}>
                                                    <div className="card-image">
                                                        <img src={hairType1} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Straight</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                <div className={`card-hairtype ${hairType === EnumForHairType.WAVY ? 'card-active' : ''} `} onClick={() => { setHairType(EnumForHairType.WAVY) }}>
                                                    <div className="card-image">
                                                        <img src={hairType2} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Wavy</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                <div className={`card-hairtype ${hairType === EnumForHairType.CURLY ? 'card-active' : ''} `} onClick={() => { setHairType(EnumForHairType.CURLY) }}>
                                                    <div className="card-image">
                                                        <img src={hairType3} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Curly</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="page-navigation">
                                                    <button className="btn btn-black" onClick={() => { changeStep(EnumForStyleStudiSteps.WELCOMESTUDIO) }}>Previous</button>
                                                    <button className="btn btn-primary" onClick={() => { const flag = !isNullUndefinedOrBlank(hairType); if (flag) { changeStep(EnumForStyleStudiSteps.HAIRTEXTURE) }; setIsHairTypeSelected(flag) }}>Next</button>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            isNullUndefinedOrBlank(hairType) && isHairTypeSelected === false ?
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="stylestudio-errormsg">
                                                            <p className="text-danger mb-0">Uh-oh! Your fab hairstyles are almost here! But you'll have to complete all the questions in order to proceed.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                : ''
                                        }
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="stylestudio-stepslider">
                                                    <StepSlider step={25} label="Step 1 out of 5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        );
                    case EnumForStyleStudiSteps.HAIRTEXTURE:
                        return (
                            <>

                                {/* Hair Texture */}
                                <section className="stylestudio-texture">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="text-with-plus">
                                                    <p className="mb-0">STYLE <span className="text-primary">STUDIO</span> <i
                                                        className="fa fa-plus ml-2" aria-hidden="true"></i></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-6 col-md-10 col-sm-12">
                                                <div className="main-title">
                                                    <h2 className="mb-0 text-center">What's your <br /> <span className="text-primary">Hair Texture like?</span></h2>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row outergrid">

                                            <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                <div className={`card-texture ${hairTexture === EnumForHairTexture.FINE ? 'card-active' : ''} `} onClick={() => { setHairTexture(EnumForHairTexture.FINE) }}>
                                                    <div className="card-image">
                                                        <img src={hairTexture2} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">{EnumForHairTexture.FINE}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                <div className={`card-texture ${hairTexture === EnumForHairTexture.MEDIUM ? 'card-active' : ''} `} onClick={() => { setHairTexture(EnumForHairTexture.MEDIUM) }}>
                                                    <div className="card-image">
                                                        <img src={hairTexture1} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Medium</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                <div className={`card-texture ${hairTexture === EnumForHairTexture.THICK ? 'card-active' : ''} `} onClick={() => { setHairTexture(EnumForHairTexture.THICK) }}>
                                                    <div className="card-image">

                                                        <img src={hairTexture3} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Thick</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="dontknow-link">
                                                    <LightgalleryProvider plugins={["lg-video.js"]}>
                                                        <LightgalleryItem group="any" src="https://www.youtube.com/watch?v=o3Fg5tU9390">
                                                            <a key={`video`} data-lg-size="1280-720">Don't know your hair texture? Click here</a>
                                                        </LightgalleryItem>
                                                    </LightgalleryProvider>

                                                    {/* <a href="https://www.youtube.com/watch?v=o3Fg5tU9390">Don't know your hair texture? Click here</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="page-navigation">
                                                    <button className="btn btn-black" onClick={() => { changeStep(EnumForStyleStudiSteps.HAIRTYPE) }}>Previous</button>
                                                    <button className="btn btn-primary" onClick={() => { const flag = !isNullUndefinedOrBlank(hairTexture); if (flag) { changeStep(EnumForStyleStudiSteps.HAIRSIZE) }; setIsHairTextureSelected(flag) }}>Next</button>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            isNullUndefinedOrBlank(hairTexture) && isHairTextureSelected === false ?
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="stylestudio-errormsg">
                                                            <p className="text-danger mb-0">Uh-oh! Your fab hairstyles are almost here! But you"ll have to complete all the questions in order to proceed.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                : ''
                                        }
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="stylestudio-stepslider">
                                                    <StepSlider step={50} label="Step 2 out of 5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        );
                    case EnumForStyleStudiSteps.HAIRSIZE:
                        return (
                            <>

                                {/* Hair Height */}
                                <section className="stylestudio-hairheight">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="text-with-plus">
                                                    <p className="mb-0">STYLE <span className="text-primary">STUDIO</span> <i
                                                        className="fa fa-plus ml-2" aria-hidden="true"></i></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-6 col-md-10 col-sm-12">
                                                <div className="main-title">
                                                    <h2 className="mb-0 text-center">How long do you <br />prefer your <span className="text-primary">Hair?</span></h2>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row outergrid">
                                            <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                <div className={`card-hairheight ${hairSize === EnumForHairSize.SHORT ? 'card-active' : ''} `} onClick={() => { setHairSize(EnumForHairSize.SHORT) }}>
                                                    <div className="card-image">
                                                        <img src={hairHeight3} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Short</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                <div className={`card-hairheight ${hairSize === EnumForHairSize.MEDIUM ? 'card-active' : ''} `} onClick={() => { setHairSize(EnumForHairSize.MEDIUM) }}>
                                                    <div className="card-image">
                                                        <img src={hairHeight2} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Medium</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                <div className={`card-hairheight ${hairSize === EnumForHairSize.LONG ? 'card-active' : ''} `} onClick={() => { setHairSize(EnumForHairSize.LONG) }}>
                                                    <div className="card-image">
                                                        <img src={hairHeight1} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Long</h5>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="page-navigation">
                                                    <button className="btn btn-black" onClick={() => { changeStep(EnumForStyleStudiSteps.HAIRTEXTURE) }}>Previous</button>
                                                    <button className="btn btn-primary" onClick={() => { const flag = !isNullUndefinedOrBlank(hairSize); if (flag) { changeStep(EnumForStyleStudiSteps.FACESTRUCTURE) }; setIsHairSizeSelected(flag) }}>Next</button>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            isNullUndefinedOrBlank(hairSize) && isHairSizeSelected === false ?
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="stylestudio-errormsg">
                                                            <p className="text-danger mb-0">Uh-oh! Your fab hairstyles are almost here! But you"ll have to complete all the questions in order to proceed.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                : ''
                                        }
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="stylestudio-stepslider">
                                                    <StepSlider step={75} label="Step 3 out of 5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        );
                    case EnumForStyleStudiSteps.FACESTRUCTURE:
                        return (
                            <>

                                {/* Face Structure */}
                                <section className="stylestudio-facestru">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="text-with-plus">
                                                    <p className="mb-0">STYLE <span className="text-primary">STUDIO</span> <i
                                                        className="fa fa-plus ml-2" aria-hidden="true"></i></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-6 col-md-10 col-sm-12">
                                                <div className="main-title">
                                                    <h2 className="mb-0 text-center">What's your <br /><span className="text-primary">Face Shape?</span></h2>
                                                </div>
                                            </div>
                                        </div>


                                        {/* hide-mobile */}
                                        <div className="row outergrid facestru-grid justify-content-center">
                                            <div className="col">
                                                <div className={`card-facestru ${faceStructure === EnumForFaceStructure.SQUARE ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.SQUARE) }}>
                                                    <div className="card-image">
                                                        <img src={face1} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Square</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className={`card-facestru ${faceStructure === EnumForFaceStructure.DIAMOND ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.DIAMOND) }}>
                                                    <div className="card-image">
                                                        <img src={face2} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Diamond</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className={`card-facestru ${faceStructure === EnumForFaceStructure.OVAL ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.OVAL) }}>
                                                    <div className="card-image">
                                                        <img src={face3} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Oval</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className={`card-facestru ${faceStructure === EnumForFaceStructure.LONG ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.LONG) }}>
                                                    <div className="card-image">
                                                        <img src={face4} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Long</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className={`card-facestru ${faceStructure === EnumForFaceStructure.HEART ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.HEART) }}>
                                                    <div className="card-image">
                                                        <img src={face5} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Heart</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className={`card-facestru ${faceStructure === EnumForFaceStructure.ROUND ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.ROUND) }}>
                                                    <div className="card-image">
                                                        <img src={face6} alt="Livon" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5 className="font-redrock">Round</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Mobile */}
                                        <div className="row outergrid hide-desktop hide-tabletpro hide-tablet facestru-grid d-none">
                                            {/* <div className="col-md-12 col-sm-12">
                                                <OwlCarousel className='owl-theme kp-owl-dots' {...faceStructureSlider}>
                                                    <div className="item">
                                                        <div className={`card-facestru ${faceStructure === EnumForFaceStructure.SQUARE ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.SQUARE) }}>
                                                            <div className="card-image">
                                                                <img src={face1} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Square</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className={`card-facestru ${faceStructure === EnumForFaceStructure.DIAMOND ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.DIAMOND) }}>
                                                            <div className="card-image">
                                                                <img src={face2} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Diamond</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className={`card-facestru ${faceStructure === EnumForFaceStructure.OVAL ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.OVAL) }}>
                                                            <div className="card-image">
                                                                <img src={face3} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Oval</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className={`card-facestru ${faceStructure === EnumForFaceStructure.LONG ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.LONG) }}>
                                                            <div className="card-image">
                                                                <img src={face4} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Long</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className={`card-facestru ${faceStructure === EnumForFaceStructure.HEART ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.HEART) }}>
                                                            <div className="card-image">
                                                                <img src={face5} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Heart</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </OwlCarousel>
                                            </div> */}

                                            {/* <div className="col-md-12 col-sm-12">
                                                <Slider {...looksVideoSliderOne} className="kp-slick-dots">
                                                    <div className="slide-item">
                                                        <div className={`card-facestru ${faceStructure === EnumForFaceStructure.SQUARE ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.SQUARE) }}>
                                                            <div className="card-image">
                                                                <img src={face1} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Square</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slide-item">
                                                        <div className={`card-facestru ${faceStructure === EnumForFaceStructure.DIAMOND ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.DIAMOND) }}>
                                                            <div className="card-image">
                                                                <img src={face2} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Diamond</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slide-item">
                                                        <div className={`card-facestru ${faceStructure === EnumForFaceStructure.OVAL ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.OVAL) }}>
                                                            <div className="card-image">
                                                                <img src={face3} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Oval</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slide-item">
                                                        <div className={`card-facestru ${faceStructure === EnumForFaceStructure.LONG ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.LONG) }}>
                                                            <div className="card-image">
                                                                <img src={face4} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Long</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slide-item">
                                                        <div className={`card-facestru ${faceStructure === EnumForFaceStructure.HEART ? 'card-active' : ''} `} onClick={() => { setFaceStructure(EnumForFaceStructure.HEART) }}>
                                                            <div className="card-image">
                                                                <img src={face5} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Heart</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Slider>
                                            </div> */}
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="dontknow-link">
                                                    <LightgalleryProvider plugins={["lg-video.js"]}>
                                                        <LightgalleryItem group="any" src="https://www.youtube.com/watch?v=qYCcuXeYnSs">
                                                            <a key={`video`} data-lg-size="1280-720">Don't know your face shape? Click here</a>
                                                        </LightgalleryItem>
                                                    </LightgalleryProvider>

                                                    {/* <a href="#">Don't know the shape of your face? Click here</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="page-navigation">
                                                    <button className="btn btn-black" onClick={() => { changeStep(EnumForStyleStudiSteps.HAIRSIZE) }}>Previous</button>
                                                    <button className="btn btn-primary" onClick={() => { const flag = !isNullUndefinedOrBlank(faceStructure); if (flag) { changeStep(EnumForStyleStudiSteps.LIVONMODEL) }; setIsFaceStructureSelected(flag) }}>Next</button>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            isNullUndefinedOrBlank(faceStructure) && isFaceStructureSelected === false ?
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="stylestudio-errormsg">
                                                            <p className="text-danger mb-0">Uh-oh! Your fab hairstyles are almost here! But you"ll have to complete all the questions in order to proceed.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                : ''
                                        }
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="stylestudio-stepslider">
                                                    <StepSlider step={100} label="Step 4 out of 5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        );
                    case EnumForStyleStudiSteps.LIVONMODEL:
                        return (
                            <>

                                {/* Selfi Livon Model */}
                                <section className="stylestudio-selfi">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-12 col-5">
                                                <div className="selfi-model">
                                                    <div className="sm-img1">
                                                        <img src={styleStudioTitle2} alt="Livon" />
                                                    </div>
                                                    <div className="sm-img2">

                                                        <img src={selfieModal} alt="Livon" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-5 col-sm-12 col-7">
                                                <div className="text-with-plus">
                                                    <p className="mb-0 text-white text-right">STYLE <span className="text-primary">STUDIO</span> <i
                                                        className="fa fa-plus ml-2" aria-hidden="true"></i></p>
                                                </div>
                                                <div className="selfimodel-right">

                                                    <div className="main-title">
                                                        <h3 className="text-white">You’re almost there!</h3>
                                                        <h2 className="text-white f-45"><span className="text-primary">Take a glam shot</span> or
                                                            go for a Livon Model</h2>
                                                    </div>

                                                    <div className="selfiegrid">
                                                        <ul>
                                                            <li>
                                                                <div className="gridbox-inner" onClick={() => { setStep('Selfie') }} >

                                                                    <img src={camera} alt="Livon" />
                                                                    <p>Let me take a <span className="text-primary">selfie</span></p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="gridbox-inner">
                                                                    <img src={browse} alt="Livon" />
                                                                    <p>Pick a shot from my gallery</p>
                                                                    {/* capture="environment" multiple="multiple" */}
                                                                    <input type="file" accept="image/*" onChange={onChangeImage} />
                                                                </div>
                                                                {selectedImage ?
                                                                    <div className="gridbox-uploaded">

                                                                        <img src={selectedImage} alt="Livon" />
                                                                    </div>
                                                                    : ''}
                                                            </li>
                                                            <li onClick={() => { processImage(); }}>
                                                                <div className="gridbox-inner">
                                                                    <img src={livonModel} alt="Livon" />
                                                                    <p>Choose a <span className="text-primary">Livon model</span></p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {selectedImage ?

                                                        <div className="mt-4 text-center">
                                                            <button className="btn btn-primary" onClick={() => { changeStep("CROPPER"); }}>Submit</button>

                                                        </div>
                                                        : ''}

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </>
                        );
                    case "Selfie":
                        return (<>

                            <section className="stylestudiocamera">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        {!selectedImage ? <>
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <div className="stylestudio-camera text-center">
                                                    <div className="parent-title">
                                                        <h2>Click <span className="text-primary">selfie</span></h2>
                                                    </div>
                                                    <ImageCapture updateUserImage={setSelectedImage} specs={{
                                                        hair_texture: hairTexture,
                                                        hair_type: hairType,
                                                        hair_length: hairSize,
                                                        face_shape: faceStructure,
                                                    }} setLoader={setLoader} changeStep={changeStep} />
                                                </div>

                                            </div>
                                        </> : ""
                                        }
                                        {selectedImage ? <>
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <div className="stylestudio-upload text-center">
                                                    <div className="parent-title">
                                                        <h2>Upload <span className="text-primary">selfie</span></h2>
                                                    </div>
                                                    {selectedImage ? <img src={selectedImage} alt="Livon" /> : ''}
                                                    {selectedImage ?
                                                        <div className="mt-4 text-center">
                                                            <button className="btn btn-primary" onClick={() => { changeStep("CROPPER"); }}>Submit</button>
                                                        </div>
                                                        : ''}
                                                </div>
                                            </div>
                                        </> : ""
                                        }
                                    </div>
                                </div>
                            </section>
                        </>)
                    case "CROPPER":
                        return (<>


                            <section className='stylestudiocropper'>
                                <div className="container">
                                    <div className="row justify-content-center">

                                        <div className="col-lg-8 col-md-12 col-sm-12">
                                            {!finalImage ? <>
                                                <div className="ImageCropperConatiner">
                                                    <Cropper
                                                        image={selectedImage}
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
                                                    {/* <div className="ImageCropperGuide">
                                                        <div className="imageCropperFaceStructure" />
                                                    </div> */}
                                                </div>
                                                <div className="ImageCropperButton mt-4 text-center">

                                                    <button className="btn btn-primary" onClick={() => {
                                                        setSelectedImage(null);
                                                        setFinalImage(null);
                                                        setUserRecommendations([]);
                                                        setUserSpecs({});
                                                        changeStep(EnumForStyleStudiSteps.LIVONMODEL)
                                                    }}>Retake Photo/ reupload Photo</button>  <br />
                                                    <button onClick={() => cropTheImage()} className="btn btn-primary mt-3">
                                                        Crop Image
                                                    </button>
                                                </div>
                                            </>
                                                : ''}

                                            {finalImage ? <>
                                                <div className="ImageCropperConatiner">
                                                    {finalImage ? <img src={finalImage} alt="Livon" /> : ''}
                                                </div>
                                                <div className="ImageCropperButton mt-4 text-center">
                                                    {finalImage ?
                                                        <button onClick={() => processImage()} className="btn btn-primary">
                                                            Submit
                                                        </button>
                                                        : ''}

                                                    {!finalImage ? <>


                                                    </>
                                                        : ''}
                                                </div>
                                            </>
                                                : ''}
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </>)
                    case EnumForStyleStudiSteps.YOURSRECOMMENDATIONS:
                        return (
                            <>

                                <section className="what-recommend">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="text-with-plus">
                                                    <p className="mb-0 text-white">STYLE <span className="text-primary">STUDIO</span> <i
                                                        className="fa fa-plus ml-2" aria-hidden="true"></i></p>
                                                </div>
                                                <div className="main-title">
                                                    <h2>Flex these <br /><span className="text-primary">styles</span></h2>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="restartquiz">
                                                    <button className="btn btn-primary" onClick={() => { resetQuiz(); changeStep(EnumForStyleStudiSteps.WELCOMESTUDIO) }}>Restart Quiz</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="recommend-slider">
                                    <div className="container">
                                        {!isEmptyObjectOrNullUndefiend(userRecommendations) ?
                                            <div className='row'>

                                                {userRecommendations.map((hairStyle, index) => {
                                                    return (
                                                        <>
                                                            {index > 2 ? <>
                                                                {isLoadMore && (


                                                                    <div className="col-md-4 col-md-4 col-sm-4 col-4">
                                                                        <a href="#headband-results">
                                                                            <div className={`card-whatwe ${selectedHairStyle?.hairstyle_name === hairStyle.hairstyle_name ? 'card-active' : ''} `} onClick={() => {
                                                                                let url = hairStyle.video_url.split('/');

                                                                                url = 'https://www.youtube.com/embed/' + url[url.length - 1];
                                                                                console.log(url);
                                                                                const selectedHairStyle = {
                                                                                    image: hairStyle.front_image,
                                                                                    back_image: hairStyle.back_image,
                                                                                    side_image: hairStyle.side_image,
                                                                                    hairStyleSpecs: hairStyle.image_params,
                                                                                    video_url: url,
                                                                                    tag_line: hairStyle.tag_line,
                                                                                    hairstyle_name: hairStyle.hairstyle_name,
                                                                                };
                                                                                setSelectedHairStyle(selectedHairStyle);
                                                                            }}>
                                                                                <div className="card-image">
                                                                                    <img src={hairStyle.thumbnail_image} alt="Livon" />
                                                                                </div>
                                                                                <div className="card-footer">
                                                                                    <h5 className="font-redrock">{hairStyle.hairstyle_name}</h5>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                )}
                                                            </>
                                                                : <div className="col-md-4 col-md-4 col-sm-4 col-4">
                                                                    <a href="#headband-results">
                                                                        <div className={`card-whatwe ${selectedHairStyle?.hairstyle_name === hairStyle.hairstyle_name ? 'card-active' : ''} `} onClick={() => {
                                                                            let url = hairStyle.video_url.split('/');

                                                                            url = 'https://www.youtube.com/embed/' + url[url.length - 1];
                                                                            console.log(url);
                                                                            const selectedHairStyle = {
                                                                                image: hairStyle.front_image,
                                                                                back_image: hairStyle.back_image,
                                                                                side_image: hairStyle.side_image,
                                                                                hairStyleSpecs: hairStyle.image_params,
                                                                                video_url: url,
                                                                                tag_line: hairStyle.tag_line,
                                                                                hairstyle_name: hairStyle.hairstyle_name,
                                                                            };
                                                                            setSelectedHairStyle(selectedHairStyle);
                                                                        }}>
                                                                            <div className="card-image">
                                                                                <img src={hairStyle.thumbnail_image} alt="Livon" />
                                                                            </div>
                                                                            <div className="card-footer">
                                                                                <h5 className="font-redrock">{hairStyle.hairstyle_name}</h5>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            }
                                                        </>
                                                    )
                                                })}

                                                {userRecommendations.length > 3 && !isLoadMore && (
                                                    <div className="col-md-12 col-md-12 col-sm-12 mt-3 text-center" >
                                                        <button className="btn btn-primary" onClick={() => { setIsLoadMore(true) }}>Load More</button>
                                                    </div>
                                                )}
                                            </div>
                                            : ''}
                                    </div>

                                    <div className="recommend-inner d-none">
                                        {!isEmptyObjectOrNullUndefiend(userRecommendations) ?
                                            <OwlCarousel className='owl-theme kp-owl-dots' {...recommendSlider}>
                                                {userRecommendations.map((hairStyle, index) => {
                                                    return (
                                                        <div className="item">
                                                            <div className={`card-whatwe ${selectedHairStyle?.hairstyle_name === hairStyle.hairstyle_name ? 'card-active' : ''} `} onClick={() => {
                                                                let url = hairStyle.video_url.split('/');

                                                                // url.push('embed');
                                                                url = 'https://www.youtube.com/embed/' + url[url.length - 1];
                                                                console.log(url);
                                                                // const finalUrl =  
                                                                const selectedHairStyle = {
                                                                    image: hairStyle.front_image,
                                                                    back_image: hairStyle.back_image,
                                                                    side_image: hairStyle.side_image,
                                                                    hairStyleSpecs: hairStyle.image_params,
                                                                    video_url: url,
                                                                    tag_line: hairStyle.tag_line,
                                                                    hairstyle_name: hairStyle.hairstyle_name,
                                                                };
                                                                setSelectedHairStyle(selectedHairStyle);
                                                            }}>
                                                                <div className="card-image">
                                                                    <img src={hairStyle.thumbnail_image} alt="Livon" />

                                                                </div>
                                                                <div className="card-footer">
                                                                    <h5 className="font-redrock">{hairStyle.hairstyle_name}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </OwlCarousel>
                                            : ''}
                                    </div>
                                </section>


                                <section className="headband-braids" id="headband-results">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6 col-sm-12 headbandbox-grid">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="headbandbox-img">
                                                            {/* <div className="faceback-img">
                                                                <img src={selectedImage ? selectedImage : 'https://www.mylivonmysalon.com/wp-content/plugins/try_on_hairstyle/app/static/media/Oval.caf4c2ee.jpg'} alt="Livon" />
                                                            </div> */}
                                                            <canvas
                                                                width="300"
                                                                height="400"
                                                                className="UserPreview__processed"
                                                                ref={canvasRef}
                                                            />
                                                            {/* <div className="facefront-img">
                                                                <img src={selectedHairStyle?.image} alt="Livon" />
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-6">
                                                        <div className="headbandbox-img">
                                                            <img src={selectedHairStyle?.back_image} alt="Livon" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-6">
                                                        <div className="headbandbox-img">
                                                            <img src={selectedHairStyle?.side_image} alt="Livon" />
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-lg-6 col-md-6 col-sm-12 col-6">
                                                        <div className="headbandbox-img">
                                                            <img src={headBandImg4} alt="Livon" />
                                                        </div>
                                                    </div> */}
                                                </div>

                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="headbandbraids-content">
                                                    {/* <div className="headbandbraids-title">
                                                        <img src={headbandBraidsTitle} alt="Livon" />
                                                    </div> */}
                                                    <div className="headbandbraids-titletext">
                                                        <h2 className="font-redrock">{selectedHairStyle?.hairstyle_name}</h2>
                                                    </div>
                                                    <h3>{selectedHairStyle?.tag_line}</h3>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </section>

                                {
                                    selectedHairStyle?.video_url ?
                                        <section className="recommend-video">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="main-title mb-5 mt-5">
                                                            <h2 className="text-center"><span className="text-primary">Here’s</span> how you can pull it off.</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <iframe width="100%" src={selectedHairStyle?.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </section>
                                        : ''
                                }
                                <section className="retake-image">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="main-title mb-0">
                                                    <h2>Unsure about the recommendations? <a className="btn btn-primary ml-2" onClick={() => {
                                                        setSelectedImage(null);
                                                        setFinalImage(null);
                                                        changeStep(EnumForStyleStudiSteps.LIVONMODEL)
                                                    }}>
                                                        Retake image
                                                    </a></h2>
                                                    {/* <h2>Unsure about the recommendations? <a className="retakelink ml-2" onClick={() => {
                                                        setSelectedImage(null);
                                                        setFinalImage(null);
                                                        changeStep(EnumForStyleStudiSteps.LIVONMODEL)
                                                    }}>
                                                        Retake image
                                                    </a></h2> */}
                                                </div>
                                                {/* <a className="retakelink" onClick={() => {
                                                    setSelectedImage(null);
                                                    changeStep(EnumForStyleStudiSteps.LIVONMODEL)
                                                }}>
                                                    Retake image
                                                </a> */}
                                            </div>

                                        </div>
                                    </div>
                                </section>
                                <section className="loveresult-top">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-6 col-sm-12">
                                                <div className="loveresult-title">
                                                    <img src={loveResultTitle} alt="Livon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="love-result">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="lr-content">

                                                    <div className="main-title">
                                                        <h2 className="text-white">Sign up to save <br />
                                                            your style!
                                                        </h2>

                                                    </div>


                                                    {!isNullUndefinedOrBlank(JSON.parse(sessionStorage.getItem('userSessionData'))) ?
                                                        //  <NavLink className="btn btn-primary hide-temp" to="/dashboard">View Dashboard</NavLink> 
                                                        ''
                                                        :
                                                        <button className="btn btn-primary" data-toggle="modal" data-target="#loginSignupModal">Sign Up</button>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="loveresultimg">
                                        <img src={loveResult} alt="Livon" />
                                    </div>
                                </section>
                                {/* <section className="stylestudio-recommendations d-none">
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-lg-3 col-md-4 col-sm-12 recomsidebar">
                                                <div className="sub-title">
                                                    <h2>Your <span className="text-primary">recommendations</span></h2>
                                                </div>

                                                <button className="btn btn-primary" onClick={() => { resetQuiz(); changeStep(EnumForStyleStudiSteps.WELCOMESTUDIO) }}>Restart Quiz</button>
                                                
                                                <div className="row outergrid">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-4">
                                                        <div className="card-recom card-active">
                                                            <div className="card-image">
                                                                <img src={recom1} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Sparkling Braided Bun</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-4">
                                                        <div className="card-recom">
                                                            <div className="card-image">
                                                                <img src={recom2} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Fishtail Braid Hairstyle</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-4">
                                                        <div className="card-recom">
                                                            <div className="card-image">
                                                                <img src={recom3} alt="Livon" />
                                                            </div>
                                                            <div className="card-footer">
                                                                <h5 className="font-redrock">Fishtail Ponytail</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-9 col-md-8 col-sm-12">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="parent-title text-center">
                                                            <h2>Sizzle and dazzle with the <br /><span className="text-primary">sparkling braided bun</span></h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                        <div className="card-recombox">
                                                            <div className="card-image">
                                                                <img src={sb1} alt="Livon" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                        <div className="card-recombox">
                                                            <div className="card-image">
                                                                <img src={sb2} alt="Livon" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-4">
                                                        <div className="card-recombox">
                                                            <div className="card-image">
                                                                <img src={sb3} alt="Livon" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="recomvideo-outer">

                                                            <div className="parent-title text-center">
                                                                <h2>Learn how to create the perfect  <br /><span className="text-primary">sparkling braided bun</span></h2>
                                                            </div>
                                                            <div className="recom-video">
                                                                <iframe width="100%" height="500" src="https://www.youtube.com/embed/BonSJhXfD44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section> */}

                                <div className="modal fade loginsignupmodal" id="loginSignupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <i className="fa fa-times" aria-hidden="true"></i>

                                                </button>
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="false">Sign Up</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content" id="myTabContent">
                                                    <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                                        <form onSubmit={formikLogin.handleSubmit}>
                                                            <div className="row">
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group">
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <div className="input-group-text"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                                                            </div>
                                                                            <input onChange={formikLogin.handleChange} value={formikLogin.values.email} id="email" type="text" className="form-control" placeholder="Username / Email" />
                                                                        </div>
                                                                        {formikLogin.errors.email ? <p className="error-msg">{formikLogin.errors.email}</p> : null}
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group">
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <div className="input-group-text"><i className="fa fa-key" aria-hidden="true"></i></div>
                                                                            </div>
                                                                            <input onChange={formikLogin.handleChange} value={formikLogin.values.password} id="password" type="password" className="form-control" placeholder="Password" />
                                                                        </div>
                                                                        {formikLogin.errors.password ? <p className="error-msg">{formikLogin.errors.password}</p> : null}
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group d-flex justify-content-between mt-2">
                                                                        <label className="checkbox checkbox-primary">Remember me
                                                                            <input type="checkbox" checked />
                                                                            <span className="checkmark"></span>
                                                                        </label>

                                                                        <div>
                                                                            <a href="#" className="text-primary">Forgot Password?</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group mb-0 mt-2">
                                                                        <button type='submit' className="btn btn-primary btn-block">Sign In</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                                                        <form onSubmit={formikSignup.handleSubmit}>
                                                            <div className="row">
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group">
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <div className="input-group-text"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                                                                            </div>
                                                                            <input onChange={formikSignup.handleChange} value={formikSignup.values.email} id="email" type="email" className="form-control" placeholder="Email" />
                                                                        </div>
                                                                        {formikSignup.errors.email ? <p className="error-msg">{formikSignup.errors.email}</p> : null}
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group">
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <div className="input-group-text"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                                                            </div>
                                                                            <input onChange={formikSignup.handleChange} value={formikSignup.values.firstName} id="firstName" type="text" className="form-control" placeholder="First Name" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group">
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <div className="input-group-text"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                                                            </div>
                                                                            <input onChange={formikSignup.handleChange} value={formikSignup.values.lastName} id="lastName" type="text" className="form-control" placeholder="Last Name" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group">
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <div className="input-group-text"><i className="fa fa-key" aria-hidden="true"></i></div>
                                                                            </div>
                                                                            <input onChange={formikSignup.handleChange} value={formikSignup.values.password} id="password" type="password" className="form-control" placeholder="Password" />
                                                                        </div>
                                                                        {formikSignup.errors.password ? <p className="error-msg">{formikSignup.errors.password}</p> : null}
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group">
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend" for="pwd">
                                                                                <div className="input-group-text"><i className="fa fa-key" aria-hidden="true"></i></div>
                                                                            </div>
                                                                            <input onChange={formikSignup.handleChange} value={formikSignup.values.confirmPassword} id="confirmPassword" type="password" className="form-control" placeholder="Confirm Password" />
                                                                        </div>
                                                                        {formikSignup.errors.confirmPassword ? <p className="error-msg">{formikSignup.errors.confirmPassword}</p> : null}
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group">
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend">
                                                                                <div className="input-group-text"><i className="fa fa-phone" aria-hidden="true"></i></div>
                                                                            </div>
                                                                            <input onChange={formikSignup.handleChange} value={formikSignup.values.phoneNumber} id="phoneNumber" type="text" className="form-control" placeholder="Phone" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group mt-2">
                                                                        <label className="checkbox checkbox-primary"> Terms of Service and Privacy Policy
                                                                            <input type="checkbox" checked />
                                                                            <span className="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 col-sm-12">
                                                                    <div className="form-group mb-0 mt-2">
                                                                        <button type='submit' className="btn btn-primary btn-block">Sign Up</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    default:
                        return null;
                }
            })()}



        </main >
    )
}
