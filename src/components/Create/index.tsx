import React from 'react';
import { useState, KeyboardEvent } from 'react';
import * as C from  './styles';

type Props = {
  onEnter: (taskName: string) => void
}

export const Create = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent ) => {
    if(e.code === 'Enter' && inputText !== ''){
      onEnter(inputText);
      setInputText(''); //limpando a barra de adicionar
    }  

  }
  return(
        <C.Container>
          <div className="+">➕</div>
          <input 
          type="text"
          placeholder="Adicione uma nova tarefa..."
          value={inputText}
          onChange={e=>setInputText(e.target.value)}
          onKeyUp={handleKeyUp} 
         />
        </C.Container>
  );
}