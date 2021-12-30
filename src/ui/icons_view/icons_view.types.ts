import { IconPack } from '@fortawesome/fontawesome-common-types';

export enum PackType {
  Solid = 'fas',
  Regular = 'far',
  Brand = 'fab',
}

export type Collection = {
  type: PackType;
  icons: IconPack;
};
