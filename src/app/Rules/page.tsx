import Competition_Format from "@/components/Rules/Competition_Format";
import Team_Rules from "@/components/Rules/Team_Rules";

export default function Page() {
  return (
    <section className="min-h-screen px-5 lg:px-10 2xl:px-20 mt-20">
      <Competition_Format />
      <Team_Rules/>
    </section>
  );
}
