import { items } from "../../../../products";

export default function handler(req, res) {
  const { category } = req.query;
  const post = items.filter((b) =>
    b.category === category
  );
  res.status(200).json(post);
}
