import styled from 'styled-components';

const StyledRightSection = styled.div`
    //background: yellow;
    width: 300px;
    max-width: 400px;
    margin: 12px 25px 12px 4px;
`;

export const StyledCreatePost = styled.div`
    padding: 10px 14px;
    border: 1px solid ${({ theme }) => theme.grey};
    border-radius: 4px;
    > p {
        font-family: OpenSans;
        font-size: 14px;
        color: ${({ theme }) => theme.home.post_content_color};
    }
`;

export const StyledCreatePostBtn = styled.div`
    font-family: Nunito;
    padding: 5px;
    background-color: blue;
    color: white;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
`;

export default StyledRightSection;