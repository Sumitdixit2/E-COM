import { useEffect, useState } from "react";
import { fetchCategories } from "../../../api/userApi";
import type { Categories } from "../../../api/userApi";
import Card from "@/components/Card/Card";
import { Link } from "react-router-dom"; // ✅ correct import
import slugify from "@/utils/slugify";

export default function ProductList() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const prod = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      }
    };

    prod();
  }, []);


  if (error) return <h1 className="text-red-700">{error}</h1>;
   
  return (
    <>
      <div className="h-full w-full flex justify-center">
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Shop by Category
        </h2>
      </div>
      <ul className="flex flex-wrap">
        {categories.map((categ: Categories, index) => (
          <li key={index}>
            <Link to={`/category/${slugify(categ.name)}`}>
                <Card name={categ.name} urlNum={index} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
