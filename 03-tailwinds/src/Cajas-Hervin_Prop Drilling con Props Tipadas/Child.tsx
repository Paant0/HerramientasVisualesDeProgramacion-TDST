import React from 'react';
import { Grandchild } from './Grandchild';

interface Props {
  name: string;
  age: number;
  setName: (name: string) => void;
  setAge: (age: number) => void;
}

export const Child = ({ name, age, setName, setAge }: Props) => {
  return (
    <div>
      <h3>Child</h3>
      <p>Age: {age}</p>
      <Grandchild name={name} setName={setName} />
    </div>
  );
};
