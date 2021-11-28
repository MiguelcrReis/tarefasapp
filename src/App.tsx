import React from 'react';
import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { List } from './components/List';
import { Create } from './components/Create';
const App = () => {

  const [list, seList] = useState<Item[]>([
    {id: 1, name: 'Fazer o trabalho de Desenvolvimento WEB', check: false},
    {id: 2, name: 'Falhar miseravelmente no trabalho de WEB', check: false},
    {id: 3, name: 'Tentar subornar a professora com 1L de Gasolina para me dar nota', check: false},
    {id: 4, name: 'Fazer o IFA DE WEB', check: false},
    {id: 5, name: 'Passar com louvor no IFA', check: false}
  ]);

  //Função para adicionar nova tarefa
  const addTask = (taskName: string) => {
    //clonando e atualizando lista
    let newList = [...list];
    newList.push({
      id: list.length +1, //gerando um id contando quatas taks tem e somando um
      name: taskName,
      check: false
    });
    seList(newList);
  }

  return (
    <C.Container>
      <C.Centro>
        <C.Header>
          TodoList
          <C.sub>
            Sua Lista de Tarefas online</C.sub>
        </C.Header>
        {/*Criar novas Tarefas*/}
        <Create onEnter={addTask} />
        {/*Listar Tarefas */}
        {list.map((item, index) => (
          <List key={index} item={item} />
        ))}
      </C.Centro>
    </C.Container>
  );
}

export default App;
