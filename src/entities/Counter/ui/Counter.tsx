import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = (): void => {
    dispatch(CounterActions.increment());
  };
  const decrement = (): void => {
    dispatch(CounterActions.decrement());
  };
  return (
      <div >
          <h1 data-testid = "value-title">{counterValue}</h1>
          <Button
              onClick={increment}
              data-testid = "increment-btn"
              >{t('increment')}</Button>
          <Button
              data-testid = "decrement-btn"
              onClick={decrement}
          >{t('Decrement')}</Button>
      </div>
  );
};
