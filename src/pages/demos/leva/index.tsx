import { useControls } from 'leva';

import useStyles from './style';

export default () => {
  const { styles } = useStyles();
  const { name, number, range, rgb, rgba, boolean } = useControls({
    boolean: true,
    name: 'World',
    number: 0,
    range: {
      max: 10,
      min: 0,
      step: 1,
      value: 4,
    },
    rgb: '#fff',
    rgba: { a: 0.4, b: 125, g: 106, r: 200 },
  });

  return (
    <div className={styles.container}>
      <div>name: {name}</div>
      <div>number: {number}</div>
      <div>range: {range}</div>
      <div>rgb: {rgb}</div>
      <div>rgba: {JSON.stringify(rgba)}</div>
      <div>boolean: {boolean}</div>
    </div>
  );
};
