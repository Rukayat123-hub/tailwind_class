import React from 'react';
import Button from './Button';

function App() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Library Button</h1>

      <div>
        <Button variant="primary" size="medium">Primary</Button>
        <Button variant="secondary" size="medium">Secondary</Button>
        <Button variant="danger" size="medium">Danger</Button>
        <Button variant="success" size="medium">Success</Button>
      </div>

      <div>
        <Button variant="primary" size="large">Large Button</Button>
        <Button variant="primary" size="small">Small Button</Button>
      </div>
    </div>
  );
}

export default App;
