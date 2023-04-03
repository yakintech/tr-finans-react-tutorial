import React from 'react'
import Child2Comp from './Child2Comp'
import Child3Comp from './Child3Comp';
import ChildComp from './ChildComp'
import DefaultPropSample from './DefaultPropSample';

function ParentComp() {

    let name = 'Çağatay';
    let age = 18;

    let product = {
        name: 'Iphone',
        price: 4500,
        brand: 'Apple'
    }


    let webUser = {
        name: 'Mert',
        surname: 'Alptekin',
        countries: ['Türkiye', 'Almanya', 'İran', 'Fransa']
    }

    return (<>
        <DefaultPropSample title='Hello Türkiye Finans!!'/>
        <hr></hr>

        <div>This is Parent COMPONENT! </div>
        <hr></hr>
        <ChildComp name={name} age={age} />

        <hr></hr>
        <Child2Comp product={product} />

        <hr></hr>
        <Child3Comp webUser={webUser} />


    </>
    )
}

export default ParentComp