import * as C from './styles'
import { currentMonthProps } from './types';
import { formatCurrentMonth } from '../../data/helpers/dateFilter';
import { ResumeItems } from './ResumeItems';

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: currentMonthProps) => {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={() => handlePrevMonth()}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={() => handleNextMonth()}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItems title="Revenue" value={income} />
                <ResumeItems title="Expenses" value={expense} />
                <ResumeItems color={(income - expense) < 0 ? '#ab0033' : '#00ab0b'} title="Balance" value={income - expense} />
            </C.ResumeArea>
        </C.Container>
    );
}