"client";

import Image from "next/image";
import { Button } from "./_components/button/button";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCardList } from "./(courses)/_components/course-card-list";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`
  );
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4);
  return (
    <>
      <HomeHeroSection />

      <section className="container pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشس</h2>
          <p className="">برای بروز موندن، یاد گرفتن نکته های تازه ضروریه</p>

          <CourseCardList courses={newestCourses} />
        </div>
      </section>
    </>
  );
}
