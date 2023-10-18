import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const categories = [
  { name: "React", slug: "react" },
  { name: "Web Development", slug: "rweb-dev" },
];

const Header = () => {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    getCategories().then((newCategories: any) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-5 md:px-10 mb-8">
      <div className="border-b border-[#008080] w-full inline-block py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-semibold text-2xl title">
              ic_e blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category: any) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle category-name ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
