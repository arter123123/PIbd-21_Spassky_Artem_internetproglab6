import React from 'react';
import Button from './Button';
import ButtonReset from './ButtonReset';
import { useState } from 'react'; // Подключаем ссылку на useState.
interface CounterProps {
    start: number;
    step: number;
}
var Counter = (props: CounterProps) => {
    
    var [ count, setCount ] = useState(props.start); // И используем. Значение по умолчанию - 0.
    var handleIncrease = () => {
        setCount(count + props.step);
    };
    var ResetCount = () => {
        setCount(count = props.start);
    };
    return (
        <div>
            <div>Значение счётчика: {count}.</div>
            <Button text='Прибавить step' onClick={handleIncrease}/>
            {/*Доп задание кнопка сбрасывает значение до начального*/}
            <ButtonReset text="Сбросить до start" onClick={ResetCount}/>
        </div>
    );
};
export default Counter;