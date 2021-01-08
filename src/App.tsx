import React, {useState} from 'react';
import './App.css';

import { OnOff } from './components/OnOff/OnOff';
import {raitingValueType, Rating} from "./components/Raiting/Raiting";
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRaiting";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function hello() {
    alert('HELLO IT-KAMASUTRA')
}



function App() {
    console.log('App rendering')

    let [ratingValue, setratingValue] = useState<raitingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<OnOff on={switchOn} onChange={(on) => {setSwitchOn(on)}}/>*/}

            {/*<UncontrolledOnOff on={true}/>*/}
            {/*<UncontrolledOnOff on={false}/>*/}
            {/*<PageTitle title={'This is App component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            <UncontrolledAccordion titleValue={'Меню'} />
            {/*<Accordion titleValue={'Меню2'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            {/*Article 2*/}
            {/*<UncontrolledRating  />*/}
            <Rating value={ratingValue} onClick={setratingValue} />
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}
type PageTitle = {
    title: string
}
function PageTitle(props: PageTitle) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
