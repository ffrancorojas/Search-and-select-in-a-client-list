import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter } from './character.vm';
import { CharacterComponent } from './character.component';
import { MyContext } from 'core/context/myContext';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<api.Character>(
    createEmptyCharacter()
  );
  const { id } = useParams();
  const handleLoadCharacter = (id: string) => {
    api.getCharacterById(id).then((character) => {
      setCharacter(character);
    });
  };

  React.useEffect(() => {
    handleLoadCharacter(id);
  }, []);

  return <CharacterComponent character={character} />;
};
