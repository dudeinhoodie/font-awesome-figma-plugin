export enum PackType {
  Solid = 'fas',
  Regular = 'far',
  Brand = 'fab',
}

export type Category = {
  name: keyof PackType;
  isActive: boolean;
};
