export interface Data {
  category: string;
  id: number;
  text: string;
  _id: string;
  items: Items[];
}
export interface Items {
  description: string;
  image: string;
  name: string;
  _id: string;
}
