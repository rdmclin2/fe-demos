import { button, buttonGroup, useControls, useStoreContext } from 'leva';

import useStyles from './style';

export default () => {
  const { styles } = useStyles();
  const store = useStoreContext();

  const presets = buttonGroup({
    label: 'Presets',
    opts: {
      '0.25x': () => store.set({ Size: 0.25 }, true),
      '0.5x': () => store.set({ Size: 0.5 }, true),
      '1x': () => store.set({ Size: 1 }, true),
      '2x': () => store.set({ Size: 2 }, true),
      '3x': () => store.set({ Size: 3 }, true),
    },
  });

  const { name, number, range, rgb, rgba, boolean, interval, select } = useControls(
    {
      Size: 1,
      boolean: true,
      buttonGroup: presets,
      foo: button((get) => alert(`Number value is ${get('number').toFixed(2)}`)),
      interval: {
        max: 10,
        min: 0,
        // initial value of 4, 5
        value: [4, 5],
      },
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
      select: {
        options: {
          'Hello World': 'helloWorld',
          'Leva is awesome!': 'leva',
        },
        value: 'helloWorld',
      },
    },
    { store },
  );

  return (
    <div className={styles.container}>
      <div>name: {name}</div>
      <div>number: {number}</div>
      <div>range: {range}</div>
      <div>rgb: {rgb}</div>
      <div>rgba: {JSON.stringify(rgba)}</div>
      <div>boolean: {boolean}</div>
      <div>interval: {JSON.stringify(interval)}</div>
      <div>options: {JSON.stringify(select)}</div>
    </div>
  );
};
