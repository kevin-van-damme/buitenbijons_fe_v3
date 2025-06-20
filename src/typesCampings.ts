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

export interface CampingFromBackend {
  nid: { value: number }[];
  uuid: { value: string }[];
  vid: { value: number }[];
  langcode: { value: string }[];
  type: { target_id: string; target_type: string; target_uuid: string }[];
  revision_uid: { target_id: number; target_type: string; target_uuid: string }[];
  status: { value: boolean }[];
  uid: { target_id: number; target_type: string; target_uuid: string }[];
  title: { value: string }[];
  field_camping_image: {
    target_id: number;
    alt: string;
    title: string;
    width: number;
    height: number;
    target_type: string;
    target_uuid: string;
    url: string;
  }[];
  field_camping_location: {
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
  }[];
  field_camping_price: { value: string }[];
  field_camping_rules: {
    value: string;
    format: string;
    processed: string;
    summary: string;
  }[];
  field_camping_checkinout: { value: string }[];
  field_owner_id: {
    target_id: number | null;
    target_type: string;
    target_uuid: string;
    url: string;
  }[];
  sticky: { value: boolean }[];
  promote: { value: boolean }[];
  default_langcode: { value: boolean }[];
  revision_translation_affected: { value: boolean }[];
  path: { alias: string; pid: number; langcode: string }[];
  field_camping_city: {
    target_id: number | null;
    target_type: string;
    target_uuid: string;
    url: string;
  }[];
  field_camping_country: {
    target_id: number | null;
    target_type: string;
    target_uuid: string;
    url: string;
  }[];
  field_camping_description: {
    value: string;
    format: string;
    processed: string;
    summary: string;
  }[];
}
