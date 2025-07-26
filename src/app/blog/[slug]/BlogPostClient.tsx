"use client";
import BlogPostContent from "./components/posts/BlogPostContent";

export default function BlogPostClient({ slug }: { slug: string }) {
  return <BlogPostContent slug={slug} />;
}
