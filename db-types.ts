export interface Catalog {
  makers?: (MakersEntity)[] | null;
  lemonades?: (LemonadesEntity)[] | null;
  flavors?: (FlavorsEntity)[] | null;
  volumes?: (VolumesEntity)[] | null;
}
export interface MakersEntity {
  id: string;
  alias: string;
  name: string;
  image: string;
}
export interface LemonadesEntity {
  id: string;
  makerId: string;
  volumeId: string;
  flavorId: string;
  image: string;
}
export interface FlavorsEntity {
  id: string;
  name: string;
}
export interface VolumesEntity {
  id: string;
  value: string;
}
