import React, { useState } from 'react'

function SayacSample() {

    //counter state içerindeki değişkenimi ifade eder.
    //setCounter state içerisindeki değişkeni DEĞİŞTİRECEK FONKSİYON!!!!
    //useState içerisindeki 0 ise default VALUE!
    const [counter, setCounter] = useState(0);

    const increase = () => {

        //setcounter içerisine gönderdiğim DEĞER ile counter değişkenini değiştirip FONKSİYONU yeniden çalıştırıyorum. RENDER YAPIYORUZ!
        //counter değişkeninin durumu(state) değiştiği an fonksiyon yeniden çalışıyor ve yeni değişken ekranda gözüküyor!!
        setCounter(counter + 1)
    }

    return (<>
        <h1>Counter: {counter}</h1>
        <button onClick={increase}>Increase</button>
    </>)
}

export default SayacSample

//useState HOOK
//Yukarıya useState hook import ediyorum
//değişken ve değişkeni değiştirecek fonksiyonu tanımlıyorum.
