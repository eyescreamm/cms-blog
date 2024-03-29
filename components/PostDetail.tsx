import moment from "moment";
import React from "react";
import { types } from "sass";

type Post = {
  post: any;
};

const PostDetail = ({ post }: Post) => {
  const getContentFragment = (
    index: number,
    text: any,
    obj: any,
    type?: string,
    url?: string
  ) => {
    let modifiedText = text;
    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    if (url) {
      return (
        <div>
          <iframe
            src={obj.url}
            width="100%"
            height="350"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <br />
        </div>
      );
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item: string, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item: string, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item: string, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "block-quote":
        return (
          <p key={index} className="p-8 bg-gray-100 my-4">
            {modifiedText.map((item: string, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="border border-[#008080] bg-white shadow-lg rounded-lg p-3 lg:p-8 pb-9 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="border border-[#008080] object-top h-full w-full rounded-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex item-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
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
          <div className="font-medium text-[#008080]">
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
            <span className="align-middle">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
        <h1 className="mb-8 text-2xl font-semibold text-[#008080]">
          {post.title}
        </h1>
        <div className="text-[#008080]">
          {post.content.raw.children.map((typeObj: any, index: number) => {
            const children = typeObj.children.map(
              (item: any, itemIndex: number) =>
                getContentFragment(itemIndex, item.text, item)
            );
            return getContentFragment(
              index,
              children,
              typeObj,
              typeObj.type,
              typeObj.url
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
