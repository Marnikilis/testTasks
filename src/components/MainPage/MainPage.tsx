import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { getCurUSD, getCurEUR, getCurPLN } from "../../redux/actions/actions";
// @ts-ignore
import styles from './MainPage.module.scss';

const MainPage = () => {
  const {usd, eur, pln} = useSelector<number[]>(state => state.reducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getCurUSD())
      dispatch(getCurEUR())
      dispatch(getCurPLN())
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <div className={styles.container}>
      {loading
        ? <Loader/>
        : <>
          <div className={styles.card}>
            <h4>USD</h4>
            <p>{usd}</p>
          </div>

          <div className={styles.card}>
            <h4>EUR</h4>
            <p>{eur}</p>
          </div>

          <div className={styles.card}>
            <h4>PLN</h4>
            <p>{pln}</p>
          </div>
        </>}
    </div>
  )
};

export default MainPage;