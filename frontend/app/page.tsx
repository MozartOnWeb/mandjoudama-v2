import "./page.scss";

import Link from "next/link";
import { supabase } from "@/lib/supabase";

import NowPlaying from "./components/NowPlaying";
import Location from "./components/Location";

const projects = [
  {
    title: "13",
    date: "May 2025",
    status: "Current",
    stacks: ["React Native", "Expo", "Supabase"],
    link: "https://mandjoudama.com",
  },
  {
    title: "O-Bambu App",
    date: "May 2025",
    status: "Current",
    stacks: ["React Native", "Expo", "Supabase"],
    link: "https://mandjoudama.com",
  },
  {
    title: "O-Bambu Website",
    date: "June 2025",
    status: "Done",
    stacks: ["Next.js", "Sanity.io"],
    link: "https://mandjoudama.com",
  },
  {
    title: "Yumi - Currency Converter",
    date: "April 2025",
    status: "Done",
    stacks: ["React Native", "Expo"],
    link: "https://mandjoudama.com",
  },
  {
    title: "Bamako Art Gallery",
    date: "February 2025",
    status: "Done",
    stacks: ["Next.js", "Sanity.io"],
    link: "https://mandjoudama.com",
  },
  {
    title: "Kabakoo - App",
    date: "September 2024",
    status: "Done",
    stacks: ["Figma", "Pitch"],
    link: "https://mandjoudama.com",
  },
  {
    title: "Kabakoo - Website",
    date: "April 2024",
    status: "Done",
    stacks: ["Webflow", "Figma"],
    link: "https://mandjoudama.com",
  },
];

const experiences = [
  {
    employer: "Freelancer",
    role: "Mobile & Web Developper",
  },
  {
    employer: "Kabakoo Academies",
    role: "UX / UI Designer",
  },
  {
    employer: "Freelancer",
    role: "Frontend Developper",
  },
  {
    employer: "Elim Communication",
    role: "Frontend Developper",
  },
];

const stacks = [
  "React Native",
  "Expo",
  "Next.js",
  "Vercel",
  "Supabase",
  "Sanity.io",
  "Figma",
  "Typescript",
  "SCSS",
];

export default async function Page() {
  const { data, error } = await supabase
    .from("now_playing")
    .select("*")
    .eq("id", "now_playing")
    .single();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className={"page"}>
      <div>
        <div className={"header"}>
          <h1>Mandjou Dama</h1>
          <a href="mailto:contact@mandjoudama.com">contact@mandjoudama.com</a>
        </div>

        <p className={"description"}>
          I&apos;m a Front-End Developer with a keen interest in a multitude of
          topics spanning the realm of software development. My expertise lies
          not only in crafting captivating user interfaces but also delving into
          the intricacies of Back End dev.
        </p>
      </div>

      <div className={"grid_container"}>
        <div className={"section section_1"}>
          <h3>Experiences</h3>

          <div className={"educations_container"}>
            {experiences.map(({ employer, role }) => (
              <div key={`${employer}_${role}`} className={"education_item"}>
                <div className={"education_dot"}>
                  <div></div>
                </div>

                <div className={"education_details"}>
                  <h5>{employer}</h5>
                  <p>{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={"section section_3"}>
          <h3>Projects</h3>

          <div className={"projects_container"}>
            {projects.map(({ title, date, status, stacks, link }, index) => (
              <div key={`project_${index}`} className={"project_item"}>
                <div className={"project_dot"}>
                  <p>{index + 1}</p>
                </div>

                <div className={"project_details"}>
                  <div className={"project_details_header"}>
                    <Link href={link}>{title}</Link>
                    <div className={"middle_dot"}></div>
                    <p>{`${date} ${status === "Current" ? `- ${status}` : ""}`}</p>
                  </div>
                  <div className={"project_stacks"}>
                    {stacks.map((stack) => (
                      <div key={stack} className={"project_stack"}>
                        <p>{stack}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={"section section_4"}>
          <div>
            <h3>Tech Stacks</h3>

            <div className={"tech_stacks_header"}>
              <h5>Mobile</h5>
              <div className={"middle_dot"}></div>
              <h5>Front End</h5>
            </div>
            <p className={"role"}>Developper</p>
          </div>

          <div className={"tech_stacks_container"}>
            {stacks.map((stack) => (
              <div key={stack} className={"project_stack"}>
                <p>{stack}</p>
              </div>
            ))}
          </div>
        </div>

        <NowPlaying />

        <Location />
      </div>
    </main>
  );
}
