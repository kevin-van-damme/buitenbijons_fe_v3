export interface Owners {
  data: Owner[];
}
export interface Owner {
  nid: number;
  uuid: string;
  vid: number;
  langcode: string;
  type: string;
  revision_timestamp: Date;
  revision_uid: number;
  revision_log: any;
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
  field_owner_email: string;
  field_owner_phone: string;
  field_owner_profile_picture: string;
}

export interface Path {
  alias: string | null;
  pid: number | null;
  langcode: string;
}
export interface OwnersFromBackend {
  nid: {
    value: number;
  }[];
  uuid: {
    value: string;
  }[];
  vid: {
    value: number;
  }[];
  langcode: {
    value: string;
  }[];
  type: {
    target_id: string;
    target_type: string;
    target_uuid: string;
  }[];
  revision_timestamp: {
    value: Date;
  }[];
  revision_uid: {
    target_id: number;
  }[];
  revision_log: any;
  status: {
    value: boolean;
  }[];
  uid: {
    target_id: number;
  }[];
  title: {
    value: string;
  }[];
  created: {
    value: Date;
  }[];
  changed: {
    value: Date;
  }[];
  promote: {
    value: boolean;
  }[];
  sticky: {
    value: boolean;
  }[];
  default_langcode: {
    value: boolean;
  }[];
  revision_translation_affected: {
    value: boolean;
  }[];
  path: {
    alias: string;
    pid: number;
    langcode: string;
  }[];
  field_owner_email: {
    value: string;
  }[];
  field_owner_phone: {
    value: string;
  }[];
  field_owner_profile_picture: any;
}
