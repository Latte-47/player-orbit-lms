"use client";

import { getChapter, getCourse } from "@/sanity/sanity-utils";
import { chapterSchema } from "@/types/chapterSchema";
import { courseSchema } from "@/types/Courses";
import { useEffect, useState } from "react";

type Props = {
  params: { chapter: string };
};

export default function ChapterPage({ params }: Props) {
  const [chapter, setChapter] = useState<chapterSchema>();
  const slug = params.chapter;

  useEffect(() => {
    getChapter(slug).then((data) => {
      setChapter(data);
    });
  }, [slug]);

  console.log("date:", chapter)

  return (
    <section id="course-section">
      { chapter && (
        <>
        <div>
          {chapter.chapterTitle}
        </div>
        </>
      )}
    </section>
  )
};
