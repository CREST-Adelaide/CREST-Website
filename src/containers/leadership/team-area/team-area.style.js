import styled, { css } from "styled-components";
import { device } from '../../../theme'

export const TeamWrapper = styled.section`
    padding-top: 90px;
    padding-bottom: 65px;
    @media ${device.medium}{
        padding-top: 72px;
        padding-bottom: 41px;  
    }
    @media ${device.small}{
        padding-top: 52px;
        padding-bottom: 20px;  
    }
`;

export const Avator = styled.div`
    width: 200px;

`;
export const JobList = styled.div``;

export const JobItem = styled.div`
    border-radius: 5px;
    padding: 33px 50px 36px;
    @media ${device.small}{
        padding: 20px 30px 20px;
    }
    ${props => !props.isEven && css`
        background: #f6f2ed;
    `}
`;

export const JobTitle = styled.h6`
    padding-bottom: 15px;
`;

export const JobType = styled.p`
    font-size: 18px;
    margin-top: 12px;
    display: block;
    @media ${device.medium}{
        margin-bottom: 10px;
    }
`;

export const JobDesc = styled.p``;

export const TeamMemberInner = styled.div`
    margin-left: auto;
    margin-right: auto;
    @media ${device.small}{
        .gatsby-image-wrapper {
            max-width: 100% !important;
        }
    }
`;

export const TeamMemberImage = styled.div`
    position: relative;
    justify-content: center;
    text-align: center;
`;

export const TeamMemberImageAndName = styled.div`
    text-align: center;
    justify-content: center;
`;

export const TeamMemberSocialWrap = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    padding: 11px 0;
    opacity: 0;
    visibility: hidden;
    text-align: center;
    background-color: #002FA6;
    transition: ${props => props.theme.transition};
`;

export const TeamMemberInfo = styled.div`
    margin-top: 20px;
    text-align: ${props => props.textalign};
`;

export const TeamMemberName = styled.h5`
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
`;

export const TeamMemberDesignation = styled.p``;

export const TeamMemberWrap = styled.div`
    ${props => props.layout === 1 && css`
        ${TeamMemberInner}{
            max-width: 310px;
        }
    `}
    ${TeamMemberInner}{
        margin-bottom: ${props => props.mb};
        ${props => props.responsive && css`
            ${props => props.responsive.small && css`
                @media ${device.small}{
                    margin-bottom: ${props => props.responsive.small.mb};
                }
            `}
        `}
    }
    &:hover{
        ${TeamMemberSocialWrap}{
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
    }
`;

export const IconsWrap = styled.div`
    margin-bottom: 60px;
    @media ${device.medium}{
        margin-bottom: 50px;
    }
`;