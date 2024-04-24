export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
};

export const productList: Product[] = [
  {
    id: "943f5e22-3f6c-40b0-849e-c8d7024387c1",
    name: "Nike Liverpool Shirt I 2023/24 Men's Pro Fan",
    image: "https://imgnike-a.akamaihd.net/1920x1920/026118P1.jpg",
    price: 29.99,
    rating: 4.5,
  },
  {
    id: "ba70bd2a-026d-4f8e-81fa-75d67c0fd564",
    name: "Nike Inter Shirt I 2023/24 Men's Pro Fan",
    image: "https://imgnike-a.akamaihd.net/1920x1920/02261815.jpg",
    price: 49.99,
    rating: 4.2,
  },
  {
    id: "c5573d01-1588-4118-a2cb-55fa8cdc3736",
    name: "Nike Barcelona Shirt I 2023/24 Men's Pro Fan",
    image: "https://imgnike-a.akamaihd.net/1300x1300/01257915.jpg",
    price: 79.99,
    rating: 4.8,
  },
];
