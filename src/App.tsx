import React from "react";
import { useAppDispatch, useAppSelector } from "./features/hooks";
import { decrement, increment } from "./features/calculator/initSlice";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

export function App() {
    const count = useAppSelector((state) => state.initReducer.value)
    const dispatch = useAppDispatch()
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '50px', height: '850px', padding: '48px' }}>
            <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '32px' }}>
                <div style={{ width: '426px' }}>
                    <p style={{ paddingBottom: '24px' }}>Стоимость автомобиля</p>
                    <Input value="3 300 000" onChange={() => { }} />
                </div>
                <div style={{ width: '426px' }}>
                    <p style={{ paddingBottom: '24px' }}>Первоначальный взнос</p>
                    <Input value="420 000 ₽" onChange={() => { }} />
                </div>
                <div style={{ width: '426px' }}>
                    <p style={{ paddingBottom: '24px' }}>Срок лизинга</p>
                    <Input value="60" onChange={() => { }} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '32px' }}>
                <div style={{ width: '426px' }}>
                    <p style={{ paddingBottom: '8px' }}>
                        Сумма договора лизинга
                    </p>
                    <h1>4 467 313 ₽</h1>
                </div>
                <div style={{ width: '426px' }}>
                    <p style={{ paddingBottom: '8px' }}>
                        Ежемесячный платеж от
                    </p>
                    <h1>114 455 ₽</h1>
                </div>
                <div style={{ width: '426px' }}>
                    <Button>Оставить заявку</Button>
                </div>
            </div>

            {/* <div>{count}</div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button> */}
        </div>
    );
}