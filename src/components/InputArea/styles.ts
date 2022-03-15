import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    align-items: center;
`;

export const InputContainer = styled.div`
    flex: 1;
    margin: 10px;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #b068f7;
    border-radius: 5px;
    outline: none;
`;

export const Select = styled.select`
    width: 100%;
    height: 32px;
    padding: 0 5px;
    border: 1px solid #b068f7;
    border-radius: 5px;
    outline: none;
`;

export const Title = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Button = styled.div`
    border: none;
    background-color: #b874fc;
    border-radius: 5px;
    color: #fff;
    width: 100%;
    height: 30px;
    margin-top: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #943bed;
        transition: all 0.3s;
    }
`;