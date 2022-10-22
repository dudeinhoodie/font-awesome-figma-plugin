export enum PackType {
  Solid = 'fas',
  Regular = 'far',
  Brand = 'fab',
}

export type Category = {
  name: string;
  value: PackType;
  isActive: boolean;
};
