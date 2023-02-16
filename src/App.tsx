import React from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { splitValue, stringRoundValue } from "./features/helpers";
import { useAppDispatch, useAppSelector } from "./features/hooks";
import { createJson } from "./features/initJson/jsonSlice";
import './App.scss'

export function App() {
    const [autoPrice, setAutoPrice] = React.useState('3 300 000')
    const [initialFee, setInitialFee] = React.useState('420 000')
    const [leasingTerm, setLeasingTerm] = React.useState('60')

    const { buttonDisabled } = useAppSelector(state => state.jsonReducer)
    const dispatch = useAppDispatch()

    const monthlyPayment = React.useMemo(() => {
        return (
            Number(splitValue(autoPrice)) -
            Number(splitValue(initialFee))) *
            (0.05 * Math.pow((1 + 0.05), Number(splitValue(leasingTerm))) /
                (Math.pow((1 + 0.05), Number(splitValue(leasingTerm))) - 1)
            )
    }, [autoPrice, initialFee, leasingTerm])

    const leasingAmount = React.useMemo(() => {
        return (
            Number(splitValue(initialFee)) +
            Number(splitValue(leasingTerm)) * monthlyPayment
        )
    }, [autoPrice, initialFee, leasingTerm])

    return (
        <div className="app">
            <div className="app__content">
                <h1 className="app__label">Рассчитайте стоимость автомобиля в лизинг</h1>
                <div className="app__parent-element">
                    <Input
                        label="Стоимость автомобиля"
                        min={1500000}
                        max={10000000}
                        value={autoPrice}
                        onChange={setAutoPrice}
                    >
                        <h2 className="app__car-price-input">₽</h2>
                    </Input>
                    <Input
                        label="Первоначальный взнос"
                        min={splitValue(autoPrice) * 0.1}
                        max={splitValue(autoPrice) * 0.6}
                        value={stringRoundValue(splitValue(initialFee))}
                        onChange={setInitialFee}
                    >
                        <div className="app__initial-fee-input">
                            <h3>
                                {Math.ceil(100 / (splitValue(autoPrice) / splitValue(initialFee)))}%
                            </h3>
                        </div>
                    </Input>
                    <Input
                        label="Срок лизинга"
                        min={6}
                        max={120}
                        value={leasingTerm}
                        onChange={setLeasingTerm}
                    >
                        <h2 className="app__leasing-term-input">мес.</h2>
                    </Input>
                    <div className="app__amount-element">
                        <div className="app__amount-column">
                            <p className="app__amount-column-label">
                                Сумма договора лизинга
                            </p>
                            <h1 className="app__amount">
                                {stringRoundValue(leasingAmount)
                                    .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} ₽
                            </h1>
                        </div>
                        <div className="app__amount-column">
                            <p className="app__amount-column-label">
                                Ежемесячный платеж от
                            </p>
                            <h1 className="app__amount">
                                {stringRoundValue(monthlyPayment)
                                    .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} ₽
                            </h1>
                        </div>
                    </div>
                    <div className="app__amount-column app__button">
                        <Button
                            disabled={buttonDisabled}
                            onClick={() => dispatch(createJson({
                                autoPrice,
                                initialFee,
                                leasingTerm,
                                leasingAmount: stringRoundValue(leasingAmount),
                                monthlyPayment: stringRoundValue(monthlyPayment)
                            }))}
                        >
                            Оставить заявку
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}