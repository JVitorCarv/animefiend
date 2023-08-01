import { styled } from "styled-components"

export const FormFileUpload = styled.form`
    height: 16rem;
    width: 28rem;
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
    border-radius: 1rem;
    border-style: dashed;
    border-color: ${(props) => (props.hasHover ? "gray" : "#cbd5e1")};
    background-color: ${(props) => (props.hasHover ? " #d6d8ea" : "#f8fafc")};
    transition: 0.5s ease-in-out;

    &:hover{
        cursor: pointer;
    }
`

export const UploadButton = styled.button`
    cursor: pointer;
    padding: 0.25rem;
    font-size: 1rem;
    border: none;
    color: red;
    background-color: transparent;
`

export const DragFileElement = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`