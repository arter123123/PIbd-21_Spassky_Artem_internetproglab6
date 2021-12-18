import React from 'react';
import Button from './Button';
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
    return (
        <div>
            <div>Значение счётчика: {count}.</div>
            <Button text='Прибавить step' onClick={handleIncrease}/>
        </div>
    );
};
export default Counter;