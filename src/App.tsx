import { FC } from 'react';
import { Button } from './components/Button';
import { Popup } from './components/Popup';

const App: FC = () => {
  return (
    <div>
      <Button>asdfads</Button>
      <p style={{ marginLeft: '600px', marginTop: '300px', width: '100px', backgroundColor: 'red' }} id='testid'>
        asd fasd fad{' '}
      </p>
      <Popup open placement='right-start' anchorId='testid' animated color='secondary'>
        I am a popup
      </Popup>
    </div>
  );
};

export default App;
