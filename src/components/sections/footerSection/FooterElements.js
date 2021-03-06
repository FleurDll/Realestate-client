import styled, { css } from "styled-components";
import { COLORS } from "../../../constantsStyles";
import { BiCopyright } from "react-icons/bi";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

export const FooterContainer = styled.div`
    background: #0076b3;
    color: #fff;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px) {
        padding: 48px 10px;
    }
`;

export const FooterTitle = styled.h1`
    margin: 20px;

    @media screen and (max-width: 480px) {
        font-size: 22px;
    }
`;

export const FooterContactInfo = styled.h3`
    width: 100%;
    text-align: center;
    color: #F0F0F0;
    margin: 5px 0;
    font-size: 18px;

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`;

export const FooterCopyright = styled.a`
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;

    &:hover{
        color: ${COLORS.darkBlue}
    }
`;

export const FooterSocialMedia = styled.div`
    margin: 20px;
`;

export const CopyrightIcon = styled(BiCopyright)`
`;

const socialMediaIcon = css`
    color: #fff;
    font-size: 25px;
    margin: 10px;
    cursor: pointer;

    &:hover{
        color: #FF6584;
    }
`;

export const FacebookIcon = styled(IoLogoFacebook)`
    ${socialMediaIcon}
`;
export const InstagramIcon = styled(IoLogoInstagram)`
    ${socialMediaIcon}
`;