import React, { useState } from 'react';
import { Child } from './Child';

export const Parent = () => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(30);

  return (
    <div>
      <h2>Parent</h2>
      <p>Nombre actual: {name}</p>
      <Child name={name} age={age} setName={setName} setAge={setAge} />
    </div>
  );
};
