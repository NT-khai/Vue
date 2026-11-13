export interface Product {
  id: number;
  name: string;
  category: string;
  emoji: string;
  price: number;
  oldPrice?: number;
  rating: number;
  sold: number;
  stock: number;
  description: string;
  meaning: string;
}

const flowers = [
  { name: "Hoa Hồng", emoji: "🌹", meaning: "Tình yêu và sự lãng mạn" },
  { name: "Tulip", emoji: "🌷", meaning: "Hạnh phúc và sự hoàn hảo" },
  { name: "Hướng Dương", emoji: "🌻", meaning: "Hy vọng và niềm tin" },
  { name: "Hoa Sen", emoji: "🪷", meaning: "Sự thanh khiết và tinh tế" },
  { name: "Cẩm Tú Cầu", emoji: "💐", meaning: "Lòng biết ơn và sự chân thành" },
  { name: "Cúc Họa Mi", emoji: "🌼", meaning: "Sự trong sáng và khởi đầu mới" },
  { name: "Lan Hồ Điệp", emoji: "🌸", meaning: "Sự sang trọng và thịnh vượng" },
  { name: "Baby Trắng", emoji: "💮", meaning: "Tình yêu thuần khiết" },
  { name: "Ly Hồng", emoji: "🌺", meaning: "Sự kiêu hãnh và thanh lịch" },
  { name: "Cát Tường", emoji: "🏵️", meaning: "May mắn và bình an" },
];

const types = [
  { label: "Bó hoa", base: 250000 },
  { label: "Giỏ hoa", base: 380000 },
  { label: "Hộp hoa", base: 450000 },
  { label: "Lẵng hoa", base: 650000 },
  { label: "Chậu hoa", base: 180000 },
];

// 10 loài hoa x 5 kiểu = 50 sản phẩm
export const products: Product[] = types.flatMap((type, t) =>
  flowers.map((flower, f) => {
    const id = t * flowers.length + f + 1;
    const price = type.base + f * 20000;
    return {
      id,
      name: `${type.label} ${flower.name}`,
      category: type.label,
      emoji: flower.emoji,
      price,
      oldPrice:
        id % 3 === 0 ? Math.round((price * 1.2) / 1000) * 1000 : undefined,
      rating: Number((4 + ((id * 7) % 10) / 10).toFixed(1)),
      sold: 20 + ((id * 37) % 480),
      stock: 5 + ((id * 11) % 40),
      description: `${type.label} ${flower.name} được chọn từ những bông hoa tươi nhất trong ngày, cắm và gói thủ công bởi nghệ nhân của Flower Shop. Phù hợp làm quà tặng sinh nhật, kỷ niệm hoặc trang trí không gian sống.`,
      meaning: flower.meaning,
    };
  }),
);

export const getProductById = (id: number) => products.find((p) => p.id === id);

export const formatPrice = (value: number) =>
  value.toLocaleString("vi-VN") + "₫";
