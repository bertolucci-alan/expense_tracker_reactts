import * as C from './styles';
import { ResumeItemsProps } from './types';

export const ResumeItems = ({ title, value, color }: ResumeItemsProps) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>R${value.toFixed(2)}</C.Info>
        </C.Container>
    );
}