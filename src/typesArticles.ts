export interface Articles {
  data: Article[];
}
export interface Article {
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
  body: Body;
  comment: Comment;
  field_image: FieldImage;
  field_tags: any[];
}

export interface Path {
  alias: string | null;
  pid: number | null;
  langcode: string;
}

export interface Body {
  value: string;
  format: string;
  processed: string;
  summary: string;
}

export interface Comment {
  status: number;
  cid: number;
  last_comment_timestamp: number;
  last_comment_name: string | null;
  last_comment_uid: number;
  comment_count: number;
}

export interface FieldImage {
  target_id: number;
  alt: string;
  title: string;
  width: number;
  height: number;
  target_type: string;
  target_uuid: string;
  url: string;
}
export interface ArticlesFromBackend {
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
  revision_log: {
    value: string;
  }[];
  revision_translation_affected: {
    value: boolean;
  }[];
  path: {
    alias: string;
    pid: number;
    langcode: string;
  }[];
  body: {
    value: string;
    format: string;
    processed: string;
    summary: string;
  }[];
  comment: {
    status: number;
    cid: number;
    last_comment_timestamp: number;
    last_comment_name: string;
    last_comment_uid: number;
    comment_count: number;
  }[];
  field_image: {
    target_id: number;
    alt: string;
    title: string;
    width: number;
    height: number;
    target_type: string;
    target_uuid: string;
    url: string;
  }[];
  field_tags: {
    target_id: string;
    target_type: string;
    target_uuid: string;
  }[];
}
