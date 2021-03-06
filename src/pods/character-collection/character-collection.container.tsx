import * as React from 'react';
import TextField from '@material-ui/core/TextField';

import * as classes from './character-collection.styles';
import { MyContext } from 'core/context/myContext';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { CharacterListComponent } from './character-list.component';

export const CharacterCollectionContainer: React.FC = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const { page, selection } = React.useContext(MyContext);
  const [searched, setSearched] = React.useState('');

  React.useEffect(() => {
    loadCharacterCollection(page, searched);
  }, [page, searched]);

  return (
    <>
      <div className={classes.search}>
        <TextField
          id="filled-search"
          value={searched}
          label="Search Character"
          type="search"
          variant="filled"
          onChange={(e) => setSearched(e.target.value)}
        />
      </div>
      {selection !== 'List Characters' ? (
        <CharacterCollectionComponent
          characterCollection={characterCollection}
        />
      ) : (
        <CharacterListComponent characterCollection={characterCollection} />
      )}
    </>
  );
};
