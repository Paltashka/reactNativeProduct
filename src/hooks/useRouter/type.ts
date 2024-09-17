const routes = ['Products', 'Product', 'ModalForm'] as const;

export type RouterType = (typeof routes)[number];
export type RootStackParamList = {
  [K in RouterType]: undefined;
};
export interface NavigationParams {
  [key: string]: string | number | boolean;
}
