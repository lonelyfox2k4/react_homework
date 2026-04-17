import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 }
];

export default function ProductList() {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const filtered = products
    .filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />

      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSort(e.target.value as "asc" | "desc")
        }
      >
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>

      <ul>
        {filtered.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}