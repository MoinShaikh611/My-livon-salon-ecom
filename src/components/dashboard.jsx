import * as React from 'react';
import axios from 'axios';
import Loader from './Loader';
import { isEmptyObjectOrNullUndefiend } from '../utility/Helper';
import moment from 'moment';

const Dashboard = () => {

    const [allQuiz, setAllQuiz] = React.useState([]);
    const [loader, setLoader] = React.useState(false);

    const [step, setStep] = React.useState("QUIZLIST")
    const [userSpecs, setUserSpecs] = React.useState({});
    const canvasRef = React.useRef();
    const [selectedHairStyle, setSelectedHairStyle] = React.useState();
    const [userRecommendations, setUserRecommendations] = React.useState([])
    const [selectedImage, setSelectedImage] = React.useState();
    const [finalImage, setFinalImage] = React.useState();
    const getAllQuiz = () => {
        console.log(JSON.parse(sessionStorage.getItem('userSessionData')));
        const userObj = JSON.parse(sessionStorage.getItem('userSessionData'));
        setLoader(true);
        const obj = {
            "uid": userObj.uid
        }

        const API_ENDPOINT =
            'https://backend.livon-demo.in/api/user/quize'
        axios
            .post(API_ENDPOINT, obj)
            .then((res) => {
                console.log(res);
                setLoader(false);
                setAllQuiz(res.data.results);

            })
            .catch((err) => {
                console.error(err)
                setLoader(false);
            })
    }
    React.useEffect(() => {

        getAllQuiz();

    }, [])
    React.useEffect(() => {

        if (selectedHairStyle) {
            drawOnCanvas(selectedHairStyle)
        }

    }, [selectedHairStyle])
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
        userimage.src = finalImage ? finalImage : 'https://www.mylivonmysalon.com/wp-content/plugins/try_on_hairstyle/app/static/media/Oval.caf4c2ee.jpg';




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
    const getAllHairStyles = (hairStyleIds) => {

        // setHairStyleIdsState(hairStyleIds);
        console.log(hairStyleIds);
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
                setStep("QUIZDETAILS")

            })
            .catch((error) => {
                console.log(error);
                setLoader(false);
            });
    };

    React.useEffect(() => {
        console.log(step)
        /* settimeout make sure this run after components have rendered. This will help fixing bug for some views where scroll to top not working perfectly */
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    }, [step])

    return (
        <main className="pagemain">
            {loader && (<Loader loading={loader} />)}


            {(() => {
                switch (step) {
                    case "QUIZLIST":
                        return (
                            <>
                                <section className="custom-pageheader">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="pageheader-content">
                                                    <h2>Dashboard</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="th-dashboard tabs-with-collapse">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                                <div className="sidecontent-outer">
                                                    <div id="accordion">
                                                        {!isEmptyObjectOrNullUndefiend(allQuiz) && allQuiz.map((val, index) => {
                                                            return (
                                                                <div className="card" id="tab1">
                                                                    <div className="card-header" id="heading1" data-toggle="collapse" data-target="#collapse1"
                                                                        aria-expanded="true" aria-controls="collapse1">
                                                                        {`Quiz ${index + 1}`}
                                                                    </div>

                                                                    <div id="collapse1" className="collapse show" aria-labelledby="heading1"
                                                                        data-parent="#accordion">
                                                                        <div className="card-body">
                                                                            {/* <h4 className="tab-ques">What's your current Hair Type?</h4> */}
                                                                            <ul className="tab-anslist">
                                                                                <li><span>Date : </span>{val.data.createdAt
                                                                                    ? moment(val.data.createdAt).format(
                                                                                        "DD-MM-YYYY"
                                                                                    )
                                                                                    : "-"}</li>

                                                                                <li><span>Time : </span>{val.data.createdAt
                                                                                    ? moment(val.data.createdAt).format(
                                                                                        "hh:mm:ss A"
                                                                                    )
                                                                                    : "-"}</li>
                                                                                <li className="tab-btn" onClick={() => { setFinalImage(val.data.finalImage); getAllHairStyles(val.data.hairStyleIdsState) }}><button className="btn btn-primary">Display</button></li>
                                                                            </ul>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        )}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>

                        )
                    case "QUIZDETAILS":
                        return (<>

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
                                                <button className="btn btn-primary" onClick={() => {
                                                    setFinalImage("");
                                                    setUserSpecs({});
                                                    setFinalImage(null);
                                                    setSelectedHairStyle(null);
                                                    setStep("QUIZLIST");
                                                }}>Back To Quiz List</button>
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
                                                    <div className="col-md-4 col-md-4 col-sm-4 col-4">
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
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        : ''}
                                </div>

                            </section>
                            <section className="headband-braids">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-sm-12 headbandbox-grid">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="headbandbox-img">

                                                        <canvas
                                                            width="300"
                                                            height="400"
                                                            className="UserPreview__processed"
                                                            ref={canvasRef}
                                                        />
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
                                                <div className="headbandbraids-titletext">
                                                    <h2 className="font-redrock">{selectedHairStyle?.hairstyle_name}</h2>
                                                </div>
                                                <h3>{selectedHairStyle?.tag_line}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {selectedHairStyle?.video_url ?
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
                                : ''}
                        </>
                        )
                }

            })()}
        </main>
    )
}

export default Dashboard;