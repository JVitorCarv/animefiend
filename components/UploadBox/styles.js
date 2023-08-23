import { styled } from "styled-components"

export const FormFileUpload = styled.form`
    width: 640px;
    height: 320px;
    max-width: 100%;
    text-align: center;
`

export const InputFileUpload = styled.input`
    display: none;
`

export const LabelFileUpload = styled.label`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 5px;
    font-size: 20px;
    border-radius: 25px;
    border-style: dashed;
    border-color: ${(props) => (props.$hashover ? "gray" : "#cbd5e1")};
    background-color: ${(props) => (props.$hashover ? " #d6d8ea" : "#f8fafc")};
    transition: 0.5s ease-in-out;

    &:hover{
        cursor: pointer;
    }
`

export const UploadButton = styled.button`
    cursor: pointer;
    padding: 0.25rem;
    font-size: 20px;
    border: none;
    color: red;
    background-color: transparent;
`
