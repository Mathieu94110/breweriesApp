export interface RestaurantsResponse {
  status: HttpStatus
  msg: null | string;
  results: Results
}

export enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500
}

export interface RestaurantResult {
  address: string;
  address_obj: AddressObj;
  category: RestaurantCategory,
  api_detail_url: string,
  cuisine: Cuisine[],
  dietary_restrictions: Cuisine[],
  location_id: string;
  name: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  timezone: string;
  location_string: string;
  photo: {
    images: {
      small: ImageDetails;
      thumbnail: ImageDetails;
      original: ImageDetails;
      large: ImageDetails;
      medium: ImageDetails;
    };
    is_blessed: boolean;
    uploaded_date: string;
    caption: string;
    id: string;
    helpful_votes: number;
    published_date: string;
  };
  user: {
    user_id: string | null;
    member_id: string;
    type: string;
    api_detail_url: string;
  };
  awards: Award[];
  distance: string | null;
  distance_string: string | null;
  bearing: string | null;
  rating: string;
  is_closed: boolean;
  open_now_text: string;
  is_long_closed: boolean;
  price_level: string;
  price: string;
  description: string;
  email: string | null,
  website: string | null,
  establishment_types: Cuisine[],
  web_url: string;
  write_review: string;
  doubleclick_zone: string,
  hours: Hours,
  ancestors: Array<{
    subcategory: Array<{
      key: string;
      name: string;
    }>;
    abbrv: string | null;
    location_id: string;
    name: string;
  }>;
  is_candidate_for_contact_info_suppression: boolean,
  is_jfy_enabled: boolean,
  nearest_metro_station: any[],
  parent_display_name: string,
  phone: string,
  preferred_map_engine: string,
  ranking: string,
  ranking_category: string,
  ranking_denominator: string,
  ranking_geo: string,
  ranking_geo_id: string,
  ranking_position: string,
  raw_ranking: string,
  subcategory: { key: string, name: string }[
  ],
}

interface Award {
  doubleclick_zone: string;
  preferred_map_engine: string;
  raw_ranking: string;
  ranking_geo: string;
  ranking_geo_id: string;
  ranking_position: string;
  ranking_denominator: string;
  ranking_category: string;
  ranking: string;
}


interface AddressObj {
  city: string,
  country: string,
  postalcode: string,
  state: null | string,
  street1: null | string,
  street2: null | string,
}

interface ImageDetails {
  width: number;
  url: string;
  height: number;
}

interface RestaurantCategory {
  key: "restaurant",
  name: "Restaurant"
}

interface Cuisine {
  key: string, name: string
}

interface Hours {
  week_ranges: WeekRanges[][];
  timezone: string
}
interface WeekRanges {
  open_time: number
  close_time: number
}

interface Results {
  data: RestaurantResult[];
  paging: Paging;
  restaurant_availability_options: RestaurantAvailabilityOptions;
  open_hours_options: OpenHoursOptions;
}

interface Paging {
  previous: null | string;
  next: null | string;
  skipped: string;
  results: null | string;
  total_results: string;
}

interface RestaurantAvailabilityOptions {
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;
  people: string;
  datestring: string;
  is_default: boolean;
  is_set: boolean;
  racable: boolean;
  time_options: TimeOptions;
  people_options: PeopleOptions;
}

interface TimeOption {
  value: string;
  display: string;
  selected: boolean | null;
}

interface TimeOptions {
  selected_option: TimeOption;
  options: TimeOption[];
}

interface PeopleOption {
  value: string;
  display: string;
  selected: boolean | null;
}

interface PeopleOptions {
  selected_option: PeopleOption;
  options: PeopleOption[];
}
interface OpenHoursOptions {
  closed_count: string;
  is_set: boolean;
  low_coverage_primary_message: string;
  timezone: string;
  unsure_count: string;
  open_count: string;
  low_coverage_secondary_message: string;
  current_value: string;
}