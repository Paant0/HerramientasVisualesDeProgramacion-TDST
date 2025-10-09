import React, { useEffect, useState } from 'react';

interface Props {
  name: string;
  setName: (name: string) => void;
}

export const Grandchild = ({ name, setName }: Props) => {
  const [changeName, setChangeName] = useState(false)
  const handleClick = () => {
    if (changeName) {
      setName('John');
    } else {
      setName('Mike');
    }
    setChangeName(!changeName);
  };

  return (
    <div>
      <h4>Grandchild</h4>
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Cambiar nombre
      </button>
      <p>{name}</p>

    </div>
  );
};
