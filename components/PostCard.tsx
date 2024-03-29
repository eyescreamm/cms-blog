import React from "react";
import moment from "moment";
import Link from "next/link";

type Post = {
  post: any;
};

const PostCard = ({ post }: Post) => {
  return (
    <div className="bg-white border border-[#008080] shadow-lg rounded-lg p-3 lg:p-8 pb-9 mb-8">
      <div className="relative shadow-md pb-60 md:pb-72 lg:pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="border border-[#008080] overflow-hidden absolute h-60 md:h-72 lg:h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1
        className="transaition duration-700 text-center mb-8 cursor-pointer
          hover:text-pink-600 text-2xl lg:text-2xl font-semibold
      "
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="bloc lg:flex text-center item-center justify-center mb-8 w-full">
        <div className="flex item-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
          />
          <p className="inline align-middle text-[#008080] ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-[#008080]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle text-[#008080]">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="text-center text-lg text-[#008080] font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-300 shadow-lg transform hover:-translate-y-2 inline-block border border-[#008080] bg-[#ffffff] text-lg font-medium rounded-full text-[#008080] px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
