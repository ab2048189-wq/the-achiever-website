import PageHero from "@/components/PageHero";
import TeacherCard from "@/components/TeacherCard";
import { teachers, heroImages } from "@/lib/data";

export const metadata = {
  title: "Our Teachers",
  description:
    "Meet the mentors of The Achievers — IOE, JEE and university rankers and toppers teaching Physics, Chemistry, Maths and Biology.",
  alternates: { canonical: "/teachers" },
};

export default function TeachersPage() {
  const sorted = [...teachers].sort((a, b) => Number(b.featured) - Number(a.featured));
  return (
    <>
      <PageHero
        image={heroImages.teachers}
        title="Meet our teachers"
        text="Experienced mentors who have been through the same exams you are preparing for."
      />
      <section className="section">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sorted.map((t) => (
            <TeacherCard key={t.name} teacher={t} />
          ))}
        </div>
      </section>
    </>
  );
}
