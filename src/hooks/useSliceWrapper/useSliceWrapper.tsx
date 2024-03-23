// useSliceWrapper.ts
import { Slice as RTKSlice, Selector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

export type TrimSelectFromSelector<K> = K extends `select${infer U}` ? U : K;

type WrappedSliceMethods<Slice extends RTKSlice> = {
  [ActionName in keyof Slice['actions']]: (...args: Parameters<Slice['actions'][ActionName]>) => void;
};

type OmitFirstArg<F> = F extends (x: any, ...args: infer P) => infer R ? (...args: P) => R : never;

type WrappedSliceShortenedSelectors<T> = {
  [K in keyof T as K extends `select${infer U}` ? `use${U}Selector` : never]: OmitFirstArg<T[K]>;
};

export const useSliceWrapper = <Slice extends RTKSlice, SelectorsMap extends { [key: string]: Selector }>(
  slice: Slice,
  extraSelectors: SelectorsMap
): {
  actions: WrappedSliceMethods<Slice>;
  selectors: WrappedSliceShortenedSelectors<SelectorsMap>;
  select: typeof useSelector;
} => {
  const dispatch = useDispatch<any>();

  const { actions } = slice;
  const methods = Object.keys(actions).reduce((acc, k) => {
    const key = k as keyof typeof actions;
    type Method = Slice['actions'][typeof key];

    if (actions[key]) {
      return {
        ...acc,
        [key]: (input: Parameters<Method>) => {
          dispatch(actions[key](input));
        },
      };
    }
    return acc;
  }, {} as WrappedSliceMethods<Slice>);

  const selectors = Object.entries(extraSelectors).reduce((acc, [_key, _selectorFn]) => {
    const key = _key as keyof typeof extraSelectors;
    if (extraSelectors[key]) {
      return {
        ...acc,
        [`use${_key.replace('select', '')}Selector`]: (...args: any) => {
          return useSelector((state) => _selectorFn(state, ...args));
        },
      };
    }
    return acc;
  }, {} as WrappedSliceShortenedSelectors<SelectorsMap>);

  return { actions: methods, selectors, select: useSelector };
};
