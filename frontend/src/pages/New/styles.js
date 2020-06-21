import styled from 'styled-components';

export const Thumbnail = styled.label`
    margin-bottom: 20px;
    border: ${(props) => !props.hasPreview ? '1px dashed #ddd' : 0};
    background-size: cover;
    cursor: pointer;
    height: 160px;
    display: flex;
    justify-content:center;
    align-items:center;
`;

export const Input = styled.input`
    display: none;
`;

export const Image = styled.img``;
