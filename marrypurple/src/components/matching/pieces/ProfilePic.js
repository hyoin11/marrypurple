import React,{ useState,useRef,useEffect } from 'react';
import '../../../lib/styles/matching.scss';
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리
`;
const SliderContainer = styled.div`
    width: 100%;
    display: flex; //이미지들을 가로로 나열
    height: 420px;
`;
const IMG = styled.img`
    max-width: 420px;
    max-height: 420px;
`;
const Slide = ({ img }) => {
    return (
        <div style={{minWidth:'420px', textAlign:'center'}}>
            <div style={{margin:'auto'}}><IMG src={img} /></div>
        </div>
    );
}

const ProfilePic = ({pics}) => {
    const TOTAL_SLIDES = (pics.length - 1);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화
            // setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
        };
    const prevSlide = () => {
        if (currentSlide === 0) {
            // setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };
    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; 
    }, [currentSlide]);
    return(
        <Container>
            <SliderContainer ref={slideRef}>
                {pics.map(pic=><Slide img={pic}/>)}
            </SliderContainer>
            <input type="radio" onClick={prevSlide} id="slideLeft" />
            <label for="slideLeft" id="left" className="labelClass"></label>
            <input type="radio" onClick={nextSlide} id="slideRight" />
            <label for="slideRight" id="right" className="labelClass"></label>
        </Container>
    )
}

export default ProfilePic