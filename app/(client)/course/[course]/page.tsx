"use client";

import "./coursePage.scss";

import { getCourse } from "@/sanity/sanity-utils";
import { coursesSchema } from "@/types/Courses";
import { groq } from "next-sanity";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  params: { course: any };
};

export default function Course({ params }: Props) {
  const [course, setCourse] = useState<coursesSchema>();
  const slug = params.course;

  useEffect(() => {
    getCourse(slug).then((data) => {
      setCourse(data);
    });
  }, [slug]);

  return (
    <section id="course-section">
      {course && (
        <div className="course-container">
          <div className="course-details-container">

          </div>
          {course.title}
        </div>
      )}
    </section>
  )
};
