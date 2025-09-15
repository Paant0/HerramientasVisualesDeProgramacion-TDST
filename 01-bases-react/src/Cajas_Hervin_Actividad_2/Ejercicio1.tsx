import React, { useEffect, useState } from 'react'

export const Ejercicio1 = () => {

  const [Count, SetCount] = useState(0);

  useEffect(() => {
    console.log(`El valor del contador es: ${Count}`);
  }, [Count]);

  return (
    <>
      <h3>Ejercicio1-ContadorDeClicks</h3>

      <button onClick={() => {
        SetCount(Count + 1);

      }
      }


      >Contador de clicks</button>

      <div>
        los clicks actuales son {Count}

      </div>
    </>
  )
}
