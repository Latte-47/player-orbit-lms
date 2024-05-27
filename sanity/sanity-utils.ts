import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
import { coursesSchema } from "@/types/Courses";

export async function getCourses() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "course"] | order(_createdAt desc){
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "author": {
        "_id": author->_id,
        "_createdAt": author->_createdAt,
        "name": author->name,
        "slug": author->slug,
        "image": {
          "url": author->image.asset->url,
          "alt": author->image.alt,
          },
        "bio": author->bio,
        },
      "image": {
          "url": image.asset->url
      },
      publishedAt,
      description,
      body,
      chapters,
    }`
  );
}

export async function getCourse(slug: string): Promise<coursesSchema> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "course" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "author": {
        "_id": author->_id,
        "_createdAt": author->_createdAt,
        "name": author->name,
        "slug": author->slug,
        "image": {
          "url": author->image.asset->url,
          "alt": author->image.alt,
        },
        "bio": author->bio,
        },
      "image": {
          "url": image.asset->url
      },
      publishedAt,
      description,
      body,
      chapters,
    }`,
    { slug }
  );
}
