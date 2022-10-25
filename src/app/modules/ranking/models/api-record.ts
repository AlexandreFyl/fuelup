export interface Parameters {
  dataset: string;
  rows: number;
  start: number;
  sort: string[];
  format: string;
  timezone: string;
}

export interface Fields {
  ville: string;
  pop: string;
  reg_name: string;
  com_arm_code: string;
  dep_name: string;
  prix_nom: string;
  com_code: string;
  epci_name: string;
  dep_code: string;
  prix_id: string;
  services_service: string;
  horaires_automate_24_24: string;
  com_arm_name: string;
  prix_maj: Date;
  id: string;
  reg_code: string;
  adresse: string;
  geom: number[];
  epci_code: string;
  cp: string;
  prix_valeur: number;
  com_name: string;
}


export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Record {
  datasetid: string;
  recordid: string;
  fields: Fields;
  geometry: Geometry;
}

export interface ApiRecord {
  nhits: number;
  parameters: Parameters;
  records: Record[];
}
