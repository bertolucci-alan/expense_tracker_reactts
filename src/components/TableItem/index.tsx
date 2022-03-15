import * as C from './styles';
import { TableItemProps } from './types';
import { formatDate } from '../../data/helpers/dateFilter';
import { categories } from '../../data/categories/categories';

export const TableItem = ({ item }: TableItemProps) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn><C.Category color={categories[item.category].color}>{categories[item.category].title}</C.Category></C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? '#bd021e' : '#008216'}>R${item.value}</C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}