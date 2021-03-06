import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import * as classes from './character-card.styles';
import { CharacterApi } from '../api';
import { MyContext } from 'core/context/myContext';

interface Props {
  character: CharacterApi;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const { setIsViewPage } = React.useContext(MyContext);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/characters/${character.id}`);
    setIsViewPage(false);
  };

  return (
    <Card onClick={handleNavigate} className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.image}</Avatar>}
        title={character.name}
        subheader={character.origin.name}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.status}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
