import { TableItem } from '../TableItem';
import { TableAreaProps } from './types';
import * as C from './styles';

export const TableArea = ({ list }: TableAreaProps) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Date</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Category</C.TableHeadColumn>
                    <C.TableHeadColumn>Title</C.TableHeadColumn>
                    <C.TableHeadColumn width={100}>Value</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </C.Table>
    );
}