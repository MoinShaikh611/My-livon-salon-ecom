import React from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import ImageGallery from 'react-image-gallery';

// const images = [
//     'https://placekitten.com/1500/500',
//     'https://placekitten.com/4000/3000',
//     'https://placekitten.com/800/1200',
//     'https://placekitten.com/1500/1500',
//   ];

  const images = [
  
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

class lightGallery extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }
      
    render(){
        const { photoIndex, isOpen } = this.state;

        return (
      <main className="mt-150 mb-150">
        {/* <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )} */}
        <ImageGallery items={images} thumbnailPosition='left' showPlayButton='false' infinite='false'/>
      </main>
    );
    }
}

export default lightGallery
