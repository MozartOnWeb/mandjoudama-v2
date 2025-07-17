import styles from "./page.module.scss";

import { Suspense } from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import { AllPosts } from "@/app/components/Posts";
import GetStartedCode from "@/app/components/GetStartedCode";
import SideBySideIcons from "@/app/components/SideBySideIcons";
import { settingsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Page() {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
  });

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

  return (
    <main className={styles.page}>
      <div>
        <div className={styles.header}>
          <h1>Mandjou Dama</h1>
          <a href="mailto:contact@mandjoudama.com">contact@mandjoudama.com</a>
        </div>

        <p className={styles.description}>
          I&apos;m a Front-End Developer with a keen interest in a multitude of
          topics spanning the realm of software development. My expertise lies
          not only in crafting captivating user interfaces but also delving into
          the intricacies of Back End dev.
        </p>
      </div>

      <div className={styles.grid_container}>
        <div className={`${styles.section} ${styles.section_1}`}>
          <h3>Experiences</h3>

          <div className={styles.educations_container}>
            {experiences.map(({ employer, role }) => (
              <div
                key={`${employer}_${role}`}
                className={styles.education_item}
              >
                <div className={styles.education_dot}>
                  <div></div>
                </div>

                <div className={styles.education_details}>
                  <h5>{employer}</h5>
                  <p>{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.section} ${styles.section_2}`}>
          <div className={styles.title}>
            <h3>Listening now</h3>

            <div className={styles.middle_dot}></div>

            <h3>Apple Music</h3>
          </div>
        </div>

        <div className={`${styles.section} ${styles.section_3}`}>
          <h3>Projects</h3>

          <div className={styles.projects_container}>
            {projects.map(({ title, date, status, stacks, link }, index) => (
              <div key={`project_${index}`} className={styles.project_item}>
                <div className={styles.project_dot}>
                  <p>{index + 1}</p>
                </div>

                <div className={styles.project_details}>
                  <div className={styles.project_details_header}>
                    <Link href={link}>{title}</Link>
                    <div className={styles.middle_dot}></div>
                    <p>{`${date} ${status === "Current" ? `- ${status}` : ""}`}</p>
                  </div>
                  <div className={styles.project_stacks}>
                    {stacks.map((stack) => (
                      <div key={stack} className={styles.project_stack}>
                        <p>{stack}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.section} ${styles.section_4}`}>
          <div>
            <h3>Tech Stacks</h3>

            <div className={styles.tech_stacks_header}>
              <h5>Mobile</h5>
              <div className={styles.middle_dot}></div>
              <h5>Front End</h5>
            </div>
            <p className={styles.role}>Developper</p>
          </div>

          <div className={styles.tech_stacks_container}>
            {stacks.map((stack) => (
              <div key={stack} className={styles.project_stack}>
                <p>{stack}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.section} ${styles.section_5}`}>
          <h3>Location & Timezone</h3>
        </div>
      </div>
    </main>
  );
}
