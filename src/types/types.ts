interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface UserProfile {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  profile_image: ProfileImage;
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  };
}

interface Exif {
  aperture: string;
  exposure_time: string;
  focal_length: string;
  iso: number;
  make: string;
  model: string;
  name: string;
}

interface Tag {
  type: string;
  title: string;
  source?: unknown;
}

interface LocationType {
  city: string;
  country: string;
  name: string;
}
interface ImageType {
  location: LocationType;
  alt_description: string;
  views: number;
  downloads: number;
  exif: Exif;
  tags: Tag[];
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: UserProfile;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
}

export default ImageType;

export interface SearchResultType {
  total: number;
  total_pages: number;
  results: ImageType[];
}
