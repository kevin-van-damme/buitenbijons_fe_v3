export interface Campings {
  data: Camping[];
}

export interface Camping {
  nid: number;
  uuid: string;
  vid: number;
  langcode: string;
  type: string;
  revision_timestamp: Date;
  revision_uid: number;
  status: boolean;
  uid: number;
  title: string;
  created: Date;
  changed: Date;
  promote: boolean;
  sticky: boolean;
  default_langcode: boolean;
  revision_translation_affected: boolean;
  path: Path;
  field_camping_checkinout: string;
  field_camping_city: EntityReference;
  field_camping_country: EntityReference;
  field_camping_description: TextField;
  field_camping_image: ImageField;
  field_camping_location: LocationField;
  field_camping_price: string;
  field_camping_rules: TextField;
  field_owner_id: EntityReference;
}

export interface Path {
  alias: string;
  pid: number;
  langcode: string;
}

export interface EntityReference {
  target_id: number;
  target_type: string;
  target_uuid: string;
  url: string;
}

export interface TextField {
  value: string;
  format: string;
  processed: string;
  summary: string;
}

export interface ImageField {
  target_id: number;
  alt: string;
  title: string;
  width: number;
  height: number;
  target_type: string;
  target_uuid: string;
  url: string;
}

export interface LocationField {
  value: string;
  geo_type: string;
  lat: number;
  lon: number;
  left: number;
  top: number;
  right: number;
  bottom: number;
  geohash: string;
  latlon: string;
}
