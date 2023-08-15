import React from "react";

import { getCategories, getPostListByCategory } from "../../services";
import { Categories, PostWidget, PostCard } from "../../components";

const PostlistByCategory = ({ posts }: any) => {
  return (
    <div className="container mx-auto px-5 md:px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any, index: any) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostlistByCategory;

export async function getStaticProps({ params }: any) {
  const data = (await getPostListByCategory(params.category)) || [];

  return {
    props: { posts: data },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  const paths = categories.map(
    (category: any, key: number) => `/category/${category.slug}`
  );

  return {
    paths,
    fallback: false,
  };
}
