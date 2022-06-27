import { products } from "../../../../../products";

export default function handler(req, res) {
  const { category, items } = req.query;
  const post = products.filter((b) =>
    b.category === category && b.items === items
  );
  res.status(200).json(post);
}
