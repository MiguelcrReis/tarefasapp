import React from 'react';
import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { List } from './components/List'

const App = () => {

  const [list, seList] = useState<Item[]>([
    {id: 1, name: 'Fazer o trabalho de Desenvolvimento WEB', check: false},
    {id: 2, name: 'Falhar miseravelmente no trabalho de WEB', check: false},
    {id: 3, name: 'Tentar subornar a professora com 1L de Gasolina para me dar nota', check: false},
    {id: 4, name: 'Fazer o IFA DE WEB', check: false},
    {id: 5, name: 'Passar com louvor no IFA', check: false}
  ]);

  return (
    <C.Container>
      <C.Centro>
        <C.Header>
          TodoList
          <C.sub>
            Sua Lista de Tarefas online</C.sub> 
          {/*Create New task */}
        </C.Header>
        {list.map((item, index) => (
          <List key={index} item={item} />
        ))}
      </C.Centro>
    </C.Container>
  );
}

export default App;
