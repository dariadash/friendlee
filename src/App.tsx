import React from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

export function App() {
    const [autoPrice, setAutoPrice] = React.useState('3300000')
    const [initialFee, setInitialFee] = React.useState('420000')
    const [leasingTerm, setLeasingTerm] = React.useState('60')

    const calc = React.useMemo(() => {
        return (Number(autoPrice) - Number(initialFee)) * (0.05 * Math.pow((1 + 0.05), Number(leasingTerm)) / (Math.pow((1 + 0.05), Number(leasingTerm)) - 1))
    }, [autoPrice, initialFee, leasingTerm])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '50px',
                    height: '850px',
                    padding: '48px',
                    maxWidth: '1440px'
                }}>
                <h1 style={{ width: '60%' }}>Рассчитайте стоимость автомобиля в лизинг</h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '32px'
                    }}>

                    <div>
                        <p style={{ paddingBottom: '24px' }}>Стоимость автомобиля</p>
                        <Input
                            min={1500000}
                            max={10000000}
                            value={String(autoPrice)}
                            onChange={setAutoPrice}
                        />
                    </div>
                    <div>
                        <p style={{ paddingBottom: '24px' }}>Первоначальный взнос</p>
                        <Input
                            min={Number(autoPrice) * 0.1}
                            max={Number(autoPrice) * 0.6}
                            value={String(Math.ceil(Number(initialFee)))}
                            onChange={setInitialFee} />
                    </div>
                    <div>
                        <p style={{ paddingBottom: '24px' }}>Срок лизинга</p>
                        <Input
                            min={6}
                            max={120}
                            value={leasingTerm}
                            onChange={setLeasingTerm}
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '32px'
                    }}>
                    <div
                        style={{ width: '426px' }}
                    >
                        <p style={{ paddingBottom: '8px' }}>
                            Сумма договора лизинга
                        </p>
                        <h1>{Math.ceil(Number(initialFee) + Number(leasingTerm) * calc)}₽</h1>
                    </div>
                    <div
                        style={{ width: '426px' }}
                    >
                        <p style={{ paddingBottom: '8px' }}>
                            Ежемесячный платеж от
                        </p>
                        <h1>{Math.ceil(calc)} ₽</h1>
                    </div>
                    <div
                        style={{ width: '426px' }}
                    >
                        <Button>Оставить заявку</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}