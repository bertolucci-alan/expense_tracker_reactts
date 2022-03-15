import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { items } from './data/items/items';
import { ItemType } from './data/items/types';
import { categories } from './data/categories/categories';
import { getCurrentMonth, filterListByMonth } from './data/helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {

  const [list, setList] = useState(items);
  const [filterList, setFilterList] = useState<ItemType[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filterList) {
      if (categories[filterList[i].category].expense) {
        expenseCount += filterList[i].value;
      } else {
        incomeCount += filterList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filterList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: ItemType) => {
    console.log(item);
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  useEffect(() => {
    setFilterList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Expense Tracker</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* INFO */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        {/* INSERT */}
        <InputArea onAdd={handleAddItem} />

        {/* LIST */}
        <TableArea list={filterList} />
      </C.Body>
    </C.Container>
  );
}

export default App;