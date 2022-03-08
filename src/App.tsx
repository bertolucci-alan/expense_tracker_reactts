import { useState } from 'react';
import * as C from './App.styles';
import { items } from './data/items/items';
import { categories } from './data/categories/categories';
import { getCurrentMonth } from './data/helpers/dateFilter';

const App = () => {

  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Expense Tracker</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* INFO */}

        {/* INSERT */}

        {/* LIST */}
        ...
      </C.Body>
    </C.Container>
  );
}

export default App;