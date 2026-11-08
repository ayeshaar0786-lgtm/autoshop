const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhD7ihUIdes8FTBa6oSJKFB-iZZd36qOBdgUDAwgrSmQ&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5J41JkUz5uSL2D7aAYRB-CNemJ_MFxBGgyzSQpYON0Q&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxaIF9kcWbOgzPUv7ZfztSDWY3mpRBgjfbnNy6vViAw&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdvyj9bgflUGnjfHjo9hzNJdKlSKNVVVGMrHjlmbgow&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkf9W_OcbpQ-QsmWyuOZmpjIpjyTbkKLq8Sq4MG4c1Lg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4X79Jk2fRQGWQblZ-rj63xCqFQ7yMvtkl2iNBxWSlXA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZr_pQz8NfsrkNo2RPAT3GJkUAPaeFcutxe7P47RIA6w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWmkLBPFoD1Eo_iw9CxxKxT46e41SiBYsUL4sGlymlg&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCfdUzCmMLCNs3XvmATU9-RGFTXzUMkYQdLYcE77eFA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEBfrGNbE3c4sWYRmh3OkINHWwnXQ-8O0nIzZhZBoFQ&s=10",
  "https://autogiz.com/product_images/jpeg/Screenshot-2023-12-09-at-10-01-45-Alto-800-Left-Front-Three-Quarter-Image-Alto-800-Photos-in-India_7.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjeRhuL2mQwNInaLSJ6xnXH67Zy3OcuEqr7Gbcfj34g&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zIYQy1LFC0Ig7tORTWck1I19dUPTvT779xDpFR3QoA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSndhBYx1kohqthtXChKo21_r0xE7aaQ9w6q-uNkUfpQ&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxOZ72_9glZHf9HdZtOOL0BVfYd7TTSgR5aj9exN8Bw&s=10",
];

const details = [
  ["Premium Bike", 4300000, "Bike"],
  ["Bike Listing 02", 420000, "Bike"],
  ["Bike Listing 04", 280000, "Bike"],
  ["Bike Listing 05", 250000, "Bike"],
  ["Bike Listing 06", 240000, "Bike"],
  ["Bike Listing 07", 220000, "Bike"],
  ["Bike Listing 08", 200000, "Bike"],
  ["Bike Listing 09", 190000, "Bike"],
  ["Car Listing 01", 1100000, "Car"],
  ["Car Listing 02", 1300000, "Car"],
  ["Suzuki Alto 800", 1800000, "Car"],
  ["Car Listing 04", 2000000, "Car"],
  ["Car Listing 05", 2200000, "Car"],
  ["Premium Car", 5000000, "Car"],
  ["Luxury Car", 7500000000, "Car"],
];

export const products = details.map(([name, price, category], index) => ({
  id: String(index + 1),
  name,
  price,
  category,
  image: images[index],
  description: `${name} is listed in our ${category.toLowerCase()} collection. Contact Auto Shop for availability, vehicle details, and inspection.`,
}));

export function formatPrice(price) {
  return `Rs. ${Number(price).toLocaleString("en-PK")}`;
}