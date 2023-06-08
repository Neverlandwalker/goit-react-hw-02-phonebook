import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapp = styled(Form)`
    display: flex;
    align-items: center;
    flex-direction: column;

`;

export const Input = styled(Field)`
    font-size: 16px;
    width: 300px;
    height: 30px;
    margin-bottom: 15px;
    padding: 5px;
    border-radius: 5px;
    outline-color: #9582ee;
    border-color: #624ec1;
    font-weight: 700;
`;

export const Error = styled(ErrorMessage)`
    display: flex;
    width: 300px;
    text-align: center;
    color: red;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 16px;      
`;

export const Label = styled.label`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 5px;
    color: #9643d5;
`;

export const SubmitButton = styled.button`
    width: 150px;
    height: 40px;
    background-color: #ceaadb;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    outline-color: #533f63;
    `;