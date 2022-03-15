import {ItemType} from '../items/types';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: ItemType[], date: string): ItemType[] => {
    let newList: ItemType[] = [];
    let [year, month] = date.split('-');
    //filtrando pelo mesmo ano e mesmo mês
    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            list[i].date.getMonth() === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }
    return newList;
}

export const formatDate = (date: Date): string => {
    let newDate = `${addZeroToDate(date.getDate())}/${addZeroToDate(date.getMonth())}/${date.getFullYear()}`;
    return newDate;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let months = ['January', 'Februay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[parseInt(month) - 1]} ${year}`;
}