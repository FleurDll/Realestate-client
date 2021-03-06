import styled from "styled-components";
import { SECTION, COLORS, SIZE } from "../../../constantsStyles";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: ${COLORS.backgroundWhite};
    color: #fff;
    padding: 0 30px;
    position: relative;
    z-index: ${SECTION.zIndex};

    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0) 100%
            ),
            linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, transparent 100%);
            z-index: 2;
    }
`;

export const HeroBackground = styled.div`
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    padding: 8px 24px;
    position: absolute;
    z-index: 3; 
`;

export const HeroTitle = styled.div`
    color: #fff;
    font-size: ${SIZE.heading};
    text-align: center;
    padding-top: 30px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: ${SIZE.heading480};
    }
`;

export const HeroContactWrapper = styled.div`
    margin-top: 32px;
`;

////////////////////// NO DATA

export const NoDataContainer = styled.div`
    background : #0076b3;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NoDataMessage = styled.p`
    font-size: 1.5rem;
    line-height: 2;
    transition: 0.2s ease-in-out;
    color: #fff;
    margin: 200px 0;
`;