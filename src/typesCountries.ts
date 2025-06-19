export interface CountryFromBackend {
  tid: { value: number }[];
  uuid: { value: string }[];
  revision_id: { value: number }[];
  langcode: { value: string }[];
  vid: { target_id: string; target_type: string; target_uuid: string }[];
  revision_created: { value: string }[];
  revision_user: any[];
  revision_log_message: any[];
  status: { value: boolean }[];
  name: { value: string }[];
  description: { value: null; format: null; processed: string }[];
  weight: { value: number }[];
  parent: { target_id: null }[];
  changed: { value: string }[];
  default_langcode: { value: boolean }[];
  revision_translation_affected: { value: boolean }[];
  path: { alias: null; pid: null; langcode: string }[];
}
export interface Countries {
  data: Country[];
}
export interface Country {
  tid: number;
  uuid: string;
  revision_id: number;
  langcode: string;
  vid: string;
  revision_created: string;
  status: boolean;
  name: string;
  description: string;
  weight: number;
  changed: string;
  default_langcode: boolean;
  revision_translation_affected: boolean;
  path_langcode: string;
}
