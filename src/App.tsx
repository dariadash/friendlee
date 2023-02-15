import React from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { splitValue, stringRoundValue } from "./features/helpers";
import './App.scss'

export function App() {
    const [autoPrice, setAutoPrice] = React.useState('3 300 000')
    const [initialFee, setInitialFee] = React.useState('420 000')
    const [leasingTerm, setLeasingTerm] = React.useState('60')

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
        <div className="app_wrapper">
            <div className="content">
                <h1 className="label">Рассчитайте стоимость автомобиля в лизинг</h1>
                <div className="row_wrapper">
                    <div>
                        <Input
                            label="Стоимость автомобиля"
                            min={1500000}
                            max={10000000}
                            value={splitValue(autoPrice)}
                            onChange={setAutoPrice}
                        >
                            <h2 className="car_price_input">₽</h2>
                        </Input>
                    </div>
                    <div>
                        <Input
                            label="Первоначальный взнос"
                            min={splitValue(autoPrice) * 0.1}
                            max={splitValue(autoPrice) * 0.6}
                            value={stringRoundValue(splitValue(initialFee))}
                            onChange={setInitialFee}
                        >
                            <div className="initial_fee_input">
                                <h3>
                                    {Math.ceil(100 / (splitValue(autoPrice) / splitValue(initialFee)))}%
                                </h3>
                            </div>
                        </Input>
                    </div>
                    <div>
                        <Input
                            label="Срок лизинга"
                            min={6}
                            max={120}
                            value={splitValue(leasingTerm)}
                            onChange={setLeasingTerm}
                        >
                            <h2 className="leasing_term">мес.</h2>
                        </Input>
                    </div>
                </div>
                <div className="row_wrapper">
                    <div className="sum_wrapper">
                        <div className="column_wrapper">
                            <p className="column_label">
                                Сумма договора лизинга
                            </p>
                            <h1 className="sum_label">
                                {stringRoundValue(leasingAmount)
                                    .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} ₽
                            </h1>
                        </div>
                        <div className="column_wrapper">
                            <p className="column_label">
                                Ежемесячный платеж от
                            </p>
                            <h1 className="sum_label">
                                {stringRoundValue(monthlyPayment)
                                    .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} ₽
                            </h1>
                        </div>
                    </div>
                    <div className="column_wrapper">
                        <Button>Оставить заявку</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}