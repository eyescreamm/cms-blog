import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    getCategories().then((newCategories: any) => setCategories(newCategories));
  }, []);

  return (
    <div className="border border-[#008080] bg-white shadow-lg rounded-lg p-8 mb-8 pb-9">
      <h3 className="text-xl mb-8 font-semibold border-b border-[#008080] text-[#008080] pb-4">
        Categories
      </h3>
      {categories.map((category: any) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3 text-[#008080]">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
