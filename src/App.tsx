import { FC } from 'react';
import { Button } from './components/Button';
import { Popup } from './components/Popup';

const App: FC = () => {
  return (
    <div>
      <Button>asdfads</Button>
      <p id='testid'>asd fasd fad </p>
      <Popup open placement='bottom-end' anchorId='testid'>
        I am a popup
      </Popup>
    </div>
  );
};

export default App;
