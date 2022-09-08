import {Component, useState, useEffect, useCallback} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }




const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    // function logging() {
    //     console.log('log!');
    // }

    // useEffect(() => {
    //     // console.log("effect");
    //     document.title = `Slide: ${slide}`;

    //     window.addEventListener('click', logging);

    //     return () => {
    //         window.removeEventListener('click', logging);
    //     }

    // }, [slide]);

    // const [state, setState] = useState({slide: 0, autoplay: false});

    const getSomeImages = useCallback(() => {
        console.log('fetching')
        return [
            'https://avatars.mds.yandex.net/i?id=ba2278c7e2a688a42b00fc6e1bfe46f5-3927965-images-thumbs&ref=rim&n=33&w=281&h=188',
            'https://gas-kvas.com/uploads/posts/2022-06/1655196624_12-gas-kvas-com-p-tyulen-foto-zhivotnogo-12.jpg'
        ]
    }, [slide]);

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }
  
    // function changeSlide(i) {
    //     setState(state => ({...state, slide: state.slide + i}));
    // }

    // function toggleAutoplay() {
    //     setState(state => ({...state, autoplay: !state.autoplay}));
    // }
  

    return (
        <Container>
            <div className="slider w-50 m-auto">
              
                {/* {
                    getSomeImages().map((url, i) => {
                        return (
                            <img className="d-block w-100" src={url}alt="slide" key={i}/>
  
                        )
                    })
                } */}

                <Slide getSomeImages={getSomeImages}/>

                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1
                    </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1
                    </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img className="d-block w-100" src={url}alt="slide" key={i}/>)}
        </>
    )
}


function App() {
    const [slider, setSlider] = useState(true);


    return (
        <>
            <button onClick={() => setSlider(false)}>Click</button>
            {slider ? <Slider/> : null}
        </>
            
    );
}

export default App;
