import { Campings, Camping } from "@/typesCampings";

export function transformCampingResponse(item: any): Camping {
  return {
    nid: item.nid?.[0]?.value ?? 0,
    uuid: item.uuid?.[0]?.value ?? "",
    vid: item.vid?.[0]?.value ?? 0,
    langcode: item.langcode?.[0]?.value ?? "",
    type: item.type?.[0]?.target_id ?? "",
    revision_timestamp: item.revision_timestamp?.[0]?.value ?? "",
    revision_uid: item.revision_uid?.[0]?.target_id ?? 0,
    status: item.status?.[0]?.value ?? false,
    uid: item.uid?.[0]?.target_id ?? 0,
    title: item.title?.[0]?.value ?? "",
    created: item.created?.[0]?.value ?? "",
    changed: item.changed?.[0]?.value ?? "",
    promote: item.promote?.[0]?.value ?? false,
    sticky: item.sticky?.[0]?.value ?? false,
    default_langcode: item.default_langcode?.[0]?.value ?? false,
    revision_translation_affected: item.revision_translation_affected?.[0]?.value ?? false,
    path: {
      alias: item.path?.[0]?.alias ?? "",
      pid: item.path?.[0]?.pid ?? 0,
      langcode: item.path?.[0]?.langcode ?? "",
    },
    field_camping_checkinout: item.field_camping_checkinout?.[0]?.value ?? "",
    field_camping_city: item.field_camping_city?.[0]?.target_id ?? 0,
    field_camping_country: item.field_camping_country?.[0]?.target_id ?? 0,
    field_camping_description: item.field_camping_description?.[0]?.value ?? "",
    field_camping_image: {
      target_id: item.field_camping_image?.[0]?.target_id ?? 0,
      alt: item.field_camping_image?.[0]?.alt ?? "",
      title: item.field_camping_image?.[0]?.title ?? "",
      width: item.field_camping_image?.[0]?.width ?? 0,
      height: item.field_camping_image?.[0]?.height ?? 0,
      target_type: item.field_camping_image?.[0]?.target_type ?? "",
      target_uuid: item.field_camping_image?.[0]?.target_uuid ?? "",
      url: item.field_camping_image?.[0]?.url ?? "",
    },
    field_camping_location: {
      value: item.field_camping_location?.[0]?.value ?? "",
      geo_type: item.field_camping_location?.[0]?.geo_type ?? "",
      lat: item.field_camping_location?.[0]?.lat ?? 0,
      lon: item.field_camping_location?.[0]?.lon ?? 0,
      left: item.field_camping_location?.[0]?.left ?? 0,
      top: item.field_camping_location?.[0]?.top ?? 0,
      right: item.field_camping_location?.[0]?.right ?? 0,
      bottom: item.field_camping_location?.[0]?.bottom ?? 0,
      geohash: item.field_camping_location?.[0]?.geohash ?? "",
      latlon: item.field_camping_location?.[0]?.latlon ?? "",
    },
    field_camping_price: item.field_camping_price?.[0]?.value ?? "",
    field_camping_rules: item.field_camping_rules?.[0]?.value ?? "",
    field_owner_id: item.field_owner_id?.[0]?.target_id ?? 0,
  };
}

export function transformCampingsResponse(raw: any): Campings {
  const data: Camping[] = raw.map((item: any) => transformCampingResponse(item));
  return { data };
}
