export interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: number | string;
  latitude: number | string;
  phone: string;
  website_url: string;
  state: string;
  street: string;
}
export interface BreweryMetadata {
  total: number;
  by_state: Record<string, number>;
  by_type: Record<string, number>;
  page: number;
  per_page: number;
}