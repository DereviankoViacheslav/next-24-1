export interface Catalog {
  maker?: (MakerEntity)[] | null;
  lemonade?: (LemonadeEntity)[] | null;
  flavor?: (FlavorEntity)[] | null;
  volume?: (VolumeEntity)[] | null;
}
export interface MakerEntity {
  id: string;
  alias: string;
  name: string;
  image: string;
  flavorId?: (string)[] | null;
}
export interface LemonadeEntity {
  id: string;
  makerId: string;
  volumeId?: (string)[] | null;
  flavorId: string;
  image: string;
}
export interface FlavorEntity {
  id: string;
  name: string;
}
export interface VolumeEntity {
  id: string;
  value: string;
}
