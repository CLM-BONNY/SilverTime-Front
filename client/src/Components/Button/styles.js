import styled from "styled-components";

export const CloseButton = styled.div`
    margin-left: auto;
    border: none;
    color: #141414;
    font-weight: 700;
    font-size: 26px;
    background-color: transparent;
`;

export const FloatingButton = styled.div`
    position: fixed;
    width: 100%;
    max-width: 480px;
    top: 800px;
    left: 960px;
    @media only screen and (max-width: 480px) {
        top: 750px;
        left: 360px;
    }
`;

export const FullButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    background: #FF7F00;
    border-radius: 10px;
    padding: 20px;
    color: ${(props) => props.color || "black"};
    font-weight: 700;
    font-size: ${(props) => props.fontSize || "20px"};
    text-align: center;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    > img {
        width: 50%;
        height: 50%;
        margin-right: 20px;
    }
`;

export const OrangeFullButton = styled.div`
    width: 120px;
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    background: #FF9900;
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;

export const YellowFullButton = styled.div`
    width: 100%;
    height: ${(props) => props.height};
    margin-top: 15px;
    background: #FFB800;
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;

export const StrokeButton = styled.div`
    height: ${(props) => props.height};
    background: #ffffff;
    border: 2px solid #FF7F00;
    border-radius: 10px;
    padding: 10px;
    color: #141414;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;

export const OrangeStrokeButton = styled.div`
    width: 120px;
    height: ${(props) => props.height};
    background: #ffffff;
    border: 2px solid #FF9900;
    border-radius: 10px;
    padding: 10px;
    color: #141414;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;