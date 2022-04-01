import React, { useEffect, useState, FC } from 'react';
// @ts-ignore
import styles from './Converter.module.scss';
import { Button } from "react-bootstrap";

interface Props {
  val: number;
  cur: string;
}

const Converter: FC<Props> = ({val, cur}: Props) => {

  const [amountIn, setAmountIn] = useState<number>(1);
  const [amountTo, setAmountTo] = useState('');

  useEffect(() => {
    setAmountTo((1 / val).toFixed(3))
    setAmountIn(1)
  }, [val])


  const onExChange = () => {
    setAmountTo((amountIn / val).toFixed(3));
    console.log(val);
  }

  return (
    <div className={styles.container}>
      <input type="number"
             value={amountIn}
             onChange={(e) => setAmountIn(e.target.valueAsNumber)}/>
      <label>UAH</label>
      &rArr;
      <input value={amountTo}
             onChange={() => setAmountTo(`${val}`)}
             placeholder={(1 / val).toFixed(3)}
      />
      <label>{cur}</label>
      <Button variant="outline-dark" onClick={onExChange}>Exchange</Button>
    </div>
  );
};

export default Converter;