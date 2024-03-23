import { FC, createContext, useContext } from 'react';

export type SkeletonContextType = { loading: boolean; dark?: boolean };
export type SkeletonProviderPropType = { loading?: boolean; children: any; dark?: boolean };

export const SkeletonContext = createContext<{ loading?: boolean; dark?: boolean }>({ loading: false, dark: false });
export const SkeletonProvider: FC<SkeletonProviderPropType> = ({ loading, children, dark }) => (
  <SkeletonContext.Provider value={{ loading, dark }}>{children}</SkeletonContext.Provider>
);

export const useSkeleton = () => useContext(SkeletonContext);
