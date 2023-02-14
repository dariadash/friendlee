import React from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import './App.scss'

export function App() {
    const [autoPrice, setAutoPrice] = React.useState('3300000')
    const [initialFee, setInitialFee] = React.useState('420000')
    const [leasingTerm, setLeasingTerm] = React.useState('60')

    const calc = React.useMemo(() => {
        return (Number(autoPrice) - Number(initialFee)) * (0.05 * Math.pow((1 + 0.05), Number(leasingTerm)) / (Math.pow((1 + 0.05), Number(leasingTerm)) - 1))
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
                            value={autoPrice}
                            onChange={setAutoPrice}
                        >
                            <h2 className="car_price_input">₽</h2>
                        </Input>
                    </div>
                    <div>
                        <Input
                            label="Первоначальный взнос"
                            min={Number(autoPrice) * 0.1}
                            max={Number(autoPrice) * 0.6}
                            value={String(Math.ceil(Number(initialFee)))}
                            onChange={setInitialFee}
                        // percent={Math.ceil(100 / (Number(autoPrice) / Math.ceil(Number(initialFee))))}
                        >
                            <div className="initial_fee_input">
                                <h3>
                                    {Math.ceil(100 / (Number(autoPrice) / Math.ceil(Number(initialFee))))}%
                                </h3>
                            </div>
                        </Input>
                    </div>
                    <div>
                        <Input
                            label="Срок лизинга"
                            min={6}
                            max={120}
                            value={leasingTerm}
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
                                {String(Math.ceil(Number(initialFee) + Number(leasingTerm) * calc))
                                    .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} ₽
                            </h1>
                        </div>
                        <div className="column_wrapper">
                            <p className="column_label">
                                Ежемесячный платеж от
                            </p>
                            <h1 className="sum_label">
                                {String(Math.ceil(calc))
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