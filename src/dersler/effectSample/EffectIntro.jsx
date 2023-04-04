import React, { useEffect, useState } from 'react'

function EffectIntro() {

    console.log('Hello');

    const [counter, setcounter] = useState(0)

    const increase = () => {
        setcounter(counter + 1);
    }

    //bu bölgede fonksiyon çağırmak çok tehlikeli!!
    //fonksiyonlarımızı useeffect içerisinde çağırabiliriz.

    //boş bir array bağımlığına sahip useEffect SADECE BİR KERE ÇALIŞIR!!!
    useEffect(() => {
        console.log('Hello-2');
    }, [])


  return (<>
    <h1>{counter}</h1>
    <button onClick={() => increase()}>Increase</button>
  </>
  )
}

export default EffectIntro

//props, state, effect