import * as C from './styles';
import { InputAreaProps } from './types';
import { categories } from '../../data/categories/categories';
import { useState } from 'react';
import { ItemType } from '../../data/items/types';

export const InputArea = ({ onAdd }: InputAreaProps) => {

    const [inputArea, setInputArea] = useState<ItemType>({
        date: new Date(),
        category: '',
        title: '',
        value: 0,
    });
    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = (name: string, value: string | number | Date) => {
        let errors: string[] = [];
        if (!value) {
            errors.push(`Field ${name} cannot be empty`)
        }
        if (name === 'date') {
            value = new Date(value);
            value.setMonth(value.getMonth() + 1);
            if (isNaN(new Date(value).getTime())) {
                errors.push('Invalid Date!');
            }
        }
        if (errors.length === 0) {
            setInputArea((prevState) => ({ ...prevState, [name]: value }));
        }
    }

    const addInfo = () => {
        console.log(inputArea);
        onAdd(inputArea);
    }

    return (
        <C.Container>
            <C.InputContainer>
                <C.Title>Date</C.Title>
                <C.Input type="date" onChange={(e) => handleAddEvent('date', e.target.value)} />
            </C.InputContainer>
            <C.InputContainer>
                <C.Title>Category</C.Title>
                <C.Select onChange={(e) => handleAddEvent('category', e.target.value)}>
                    <>
                        <option></option>
                        {categoryKeys.map((key, index) => (
                            <option key={index} value={key}>{categories[key].title}</option>
                        ))}
                    </>
                </C.Select>
            </C.InputContainer>
            <C.InputContainer>
                <C.Title>Title</C.Title>
                <C.Input type="text" onChange={(e) => handleAddEvent('title', e.target.value)} />
            </C.InputContainer>
            <C.InputContainer>
                <C.Title>Value</C.Title>
                <C.Input type="text" onChange={(e) => handleAddEvent('value', parseInt(e.target.value))} />
            </C.InputContainer>
            <C.InputContainer>
                <C.Button onClick={addInfo}>Adicionar</C.Button>
            </C.InputContainer>
        </C.Container>
    );
}