import { ItemType } from '../../data/items/types';

export interface InputAreaProps {
    onAdd: (item: ItemType) => void;
}