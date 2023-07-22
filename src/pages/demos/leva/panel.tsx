import { Button } from 'antd';
import { button, buttonGroup, folder, useControls, useStoreContext } from 'leva';

import useStyles from './style';

export default () => {
  const { styles } = useStyles();
  const store = useStoreContext();

  const presets = buttonGroup({
    label: 'Presets',
    opts: {
      '0.25': () => store.set({ number: 0.25 }, true),
      '0.5': () => store.set({ number: 0.5 }, true),
      '1': () => store.set({ number: 1 }, true),
      '2': () => store.set({ number: 2 }, true),
      '3': () => store.set({ number: 3 }, true),
    },
  });

  const { name, number, range, rgb, rgba, boolean, interval, select, vector } = useControls(
    {
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
      向量: folder({
        boxSize: [10, 20, 30],
        second: folder({ number: 0 }, { collapsed: true, order: 1 }),
        vector: { x: 0, y: 0 },
      }),
    },
    { store },
  );

  const [values, set, get] = useControls(() => ({
    color: { label: '颜色', render: (get) => get('showColor'), value: '#f00' },
    counter: { step: 1, value: 0 },
    opacity: { label: '透明度', value: 0.5 },
    showColor: { label: '显示颜色', value: true },
    size: { label: '尺寸', value: { height: 300, width: 200 } },
    string: { label: 'My string', value: 'hello' },
    username: 'Mario',
  }));

  return (
    <div className={styles.container}>
      <div>name: {name}</div>
      <div>values: {JSON.stringify(values)}</div>
      <div>number: {number}</div>
      <div>range: {range}</div>
      <div>rgb: {rgb}</div>
      <div>rgba: {JSON.stringify(rgba)}</div>
      <div>boolean: {boolean}</div>
      <div>interval: {JSON.stringify(interval)}</div>
      <div>options: {JSON.stringify(select)}</div>
      <div>vector: {JSON.stringify(vector)}</div>
      <Button
        onClick={() => {
          set({ counter: get('counter') + 1 });
        }}
      >
        添加1
      </Button>
    </div>
  );
};
