import { Campings, Camping, CampingFromBackend } from "@/typesCampings";
import { Owner, Owners, OwnersFromBackend } from "./typesOwners";
import { Article, Articles, ArticlesFromBackend } from "./typesArticles";
import { City, Cities, CityFromBackend } from "./typesCities";
import { Country, Countries, CountryFromBackend } from "./typesCountries";

export function transformCampingResponse(item: CampingFromBackend): Camping {
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

export function transformOwnerResponse(item: OwnersFromBackend): Owner {
  return {
    nid: item.nid?.[0]?.value ?? 0,
    uuid: item.uuid?.[0]?.value ?? "",
    vid: item.vid?.[0]?.value ?? 0,
    langcode: item.langcode?.[0]?.value ?? "",
    type: item.type?.[0]?.target_id ?? "",
    revision_timestamp: item.revision_timestamp?.[0]?.value ? new Date(item.revision_timestamp[0].value) : new Date(),
    revision_uid: item.revision_uid?.[0]?.target_id ?? 0,
    revision_log: item.revision_log?.[0] ?? null,
    status: item.status?.[0]?.value ?? false,
    uid: item.uid?.[0]?.target_id ?? 0,
    title: item.title?.[0]?.value ?? "",
    created: item.created?.[0]?.value ? new Date(item.created[0].value) : new Date(),
    changed: item.changed?.[0]?.value ? new Date(item.changed[0].value) : new Date(),
    promote: item.promote?.[0]?.value ?? false,
    sticky: item.sticky?.[0]?.value ?? false,
    default_langcode: item.default_langcode?.[0]?.value ?? false,
    revision_translation_affected: item.revision_translation_affected?.[0]?.value ?? false,
    path: {
      alias: item.path?.[0]?.alias ?? null,
      pid: item.path?.[0]?.pid ?? null,
      langcode: item.path?.[0]?.langcode ?? "",
    },
    field_owner_email: item.field_owner_email?.[0]?.value ?? "",
    field_owner_phone: item.field_owner_phone?.[0]?.value ?? "",
    field_owner_profile_picture: item.field_owner_profile_picture?.[0] ?? null,
  };
}

export function transformOwnersResponse(raw: any): Owners {
  const data: Owner[] = raw.map((item: any) => transformOwnerResponse(item));
  return { data };
}

export function transformArticleResponse(item: ArticlesFromBackend): Article {
  return {
    nid: item.nid?.[0]?.value ?? 0,
    uuid: item.uuid?.[0]?.value ?? "",
    vid: item.vid?.[0]?.value ?? 0,
    langcode: item.langcode?.[0]?.value ?? "",
    type: item.type?.[0]?.target_id ?? "",
    revision_timestamp: item.revision_timestamp?.[0]?.value ? new Date(item.revision_timestamp[0].value) : new Date(),
    revision_uid: item.revision_uid?.[0]?.target_id ?? 0,
    revision_log: item.revision_log?.[0] ?? null,
    status: item.status?.[0]?.value ?? false,
    uid: item.uid?.[0]?.target_id ?? 0,
    title: item.title?.[0]?.value ?? "",
    created: item.created?.[0]?.value ? new Date(item.created[0].value) : new Date(),
    changed: item.changed?.[0]?.value ? new Date(item.changed[0].value) : new Date(),
    promote: item.promote?.[0]?.value ?? false,
    sticky: item.sticky?.[0]?.value ?? false,
    default_langcode: item.default_langcode?.[0]?.value ?? false,
    revision_translation_affected: item.revision_translation_affected?.[0]?.value ?? false,
    path: {
      alias: item.path?.[0]?.alias ?? null,
      pid: item.path?.[0]?.pid ?? null,
      langcode: item.path?.[0]?.langcode ?? "",
    },
    body: {
      value: item.body?.[0]?.value ?? "",
      format: item.body?.[0]?.format ?? "",
      processed: item.body?.[0]?.processed ?? "",
      summary: item.body?.[0]?.summary ?? "",
    },
    comment: {
      status: item.comment?.[0]?.status ?? 0,
      cid: item.comment?.[0]?.cid ?? 0,
      last_comment_timestamp: item.comment?.[0]?.last_comment_timestamp ?? 0,
      last_comment_name: item.comment?.[0]?.last_comment_name ?? null,
      last_comment_uid: item.comment?.[0]?.last_comment_uid ?? 0,
      comment_count: item.comment?.[0]?.comment_count ?? 0,
    },
    field_image: {
      target_id: item.field_image?.[0]?.target_id ?? 0,
      alt: item.field_image?.[0]?.alt ?? "",
      title: item.field_image?.[0]?.title ?? "",
      width: item.field_image?.[0]?.width ?? 0,
      height: item.field_image?.[0]?.height ?? 0,
      target_type: item.field_image?.[0]?.target_type ?? "",
      target_uuid: item.field_image?.[0]?.target_uuid ?? "",
      url: item.field_image?.[0]?.url ?? "",
    },
    field_tags: item.field_tags ?? [],
  };
}

export function transformArticlesResponse(raw: any): Articles {
  const data: Article[] = raw.map((item: any) => transformArticleResponse(item));
  return { data };
}

export function transformCityResponse(city: CityFromBackend): City {
  return {
    tid: city.tid[0]?.value ?? 0,
    uuid: city.uuid[0]?.value ?? "",
    revision_id: city.revision_id[0]?.value ?? 0,
    langcode: city.langcode[0]?.value ?? "",
    vid: city.vid[0]?.target_id ?? "",
    revision_created: city.revision_created[0]?.value ?? "",
    status: city.status[0]?.value ?? false,
    name: city.name[0]?.value ?? "",
    description: city.description[0]?.processed ?? "",
    weight: city.weight[0]?.value ?? 0,
    changed: city.changed[0]?.value ?? "",
    default_langcode: city.default_langcode[0]?.value ?? false,
    revision_translation_affected: city.revision_translation_affected[0]?.value ?? false,
    path_langcode: city.path[0]?.langcode ?? "",
    latitude: city.field_latitude[0]?.value ? parseFloat(city.field_latitude[0].value) : undefined,
    longitude: city.field_longitude[0]?.value ? parseFloat(city.field_longitude[0].value) : undefined,
    postal_code: city.field_postal_code[0]?.value ?? undefined,
    province: city.field_province[0]?.value ?? undefined,
  };
}

export function transformCitiesResponse(raw: any): Cities {
  const data: City[] = raw.map((item: any) => transformCityResponse(item));
  return { data };
}

export function transformCountry(country: CountryFromBackend): Country {
  return {
    tid: country.tid[0]?.value ?? 0,
    uuid: country.uuid[0]?.value ?? "",
    revision_id: country.revision_id[0]?.value ?? 0,
    langcode: country.langcode[0]?.value ?? "",
    vid: country.vid[0]?.target_id ?? "",
    revision_created: country.revision_created[0]?.value ?? "",
    status: country.status[0]?.value ?? false,
    name: country.name[0]?.value ?? "",
    description: country.description[0]?.processed ?? "",
    weight: country.weight[0]?.value ?? 0,
    changed: country.changed[0]?.value ?? "",
    default_langcode: country.default_langcode[0]?.value ?? false,
    revision_translation_affected: country.revision_translation_affected[0]?.value ?? false,
    path_langcode: country.path[0]?.langcode ?? "",
  };
}

export function transformCountriesResponse(raw: any): Countries {
  const data: Country[] = raw.map((item: any) => transformCountry(item));
  return { data };
}
