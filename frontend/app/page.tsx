import styles from "./page.module.scss";

import Link from "next/link";
import { supabase } from "@/lib/supabase";

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

          <div className={styles.now_playing_footer}>
            <img
              src={data?.artwork ? data?.artwork?.split("\n")[0].trim() : ""}
              alt={`${data?.title} by ${data?.artist}`}
            />

            <div>
              <p>{data?.title}</p>
              <p>{data?.artist}</p>
            </div>
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
          <div>
            <h3>Location & Timezone</h3>
            <div className={styles.location_header}>
              <h5>Bamako</h5>
              <div className={styles.middle_dot}></div>
              <h5>Mali</h5>
            </div>
            <p className={styles.role}>July 18, 2025</p>
          </div>

          <div className={styles.location_footer}>
            <p className={styles.hour}>21:34</p>

            <div className={styles.timezone_bars}>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24,
              ].map((index) => (
                <div key={index}></div>
              ))}
            </div>

            <div className={styles.timezone_intervals}>
              <p>12</p>
              <p>6</p>
              <p>12</p>
              <p>6</p>
              <p>12</p>
            </div>
          </div>

          <svg
            width="172"
            height="181"
            viewBox="0 0 172 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6441 123.141L16.179 122.98L15.5689 122.895L14.9136 122.593L14.5063 122.079L14.2158 121.48L13.8694 120.943L13.3028 120.63L19.6447 114.003L19.8481 113.634L19.88 113.242L19.8656 112.833L19.9326 112.415L20.2986 111.751L20.6883 111.209L20.8871 110.625L20.656 109.825L20.1233 109.326L19.4082 108.975L18.7908 108.527L18.5441 107.738L18.7845 107.098L19.327 106.534L20.5154 105.648L20.9707 105.002L21.1665 104.198L21.1215 103.433L20.8484 102.901L20.1264 102.765L19.7653 102.55L19.7707 102.075L19.8647 101.716L19.8872 101.061L19.9836 100.704L20.5336 99.9565L21.2468 99.5301L22.0087 99.1851L22.6965 98.6947L23.0716 98.0084L23.1772 97.1328L23.0178 96.2384L22.3638 95.0904L22.5827 95.0352L23.2454 94.8512L22.6721 93.5136L25.3485 92.0405L27.1046 91.8682L28.8493 91.647L31.0362 90.3627L32.4744 90.491L33.9154 91.1259L35.5472 91.5887L37.1407 91.6055L38.5385 91.033L39.2705 90.915L42.5497 91.1783L42.6138 90.2509L42.4902 89.5629L42.5125 88.9382L43.0135 88.1987L43.7537 87.6659L46.3869 86.4351L47.1694 85.7334L47.6489 84.9978L48.4172 83.2764L48.7242 82.8449L49.0635 82.5902L49.4261 82.3862L49.8018 82.0991L51.1321 80.2702L51.6863 79.7435L52.0894 79.5301L52.9338 79.249L53.3367 79.0377L53.6786 78.7514L54.1535 78.1926L55.8949 76.741L56.3115 76.4718L56.7533 76.2869L57.0274 76.2698L57.2973 76.3237L57.7232 76.3535L58.293 76.1308L58.7412 75.606L59.0707 74.9368L59.2746 74.2816L59.2898 73.5536L58.9884 72.1784L59.1822 71.168L59.1622 70.7159L59.0539 70.264L58.9002 69.866L58.8753 69.5524L59.0021 69.201L60.6696 65.8593L61.1609 65.3194L61.7478 65.0757L63.0249 64.8026L63.5014 64.5936L64.5795 63.9504L65.1262 63.782L65.6826 63.6888L66.1864 63.5058L66.5775 63.0583L66.8648 62.6058L67.3872 62.0563L67.6324 61.5897L67.9012 60.3969L67.7157 59.4155L67.1046 58.6271L66.1037 58.0073L65.4057 57.8127L65.026 57.964L64.4469 58.64L63.3533 59.2982L63.0692 59.6682L63.4165 60.0245L62.5868 60.4876L61.8031 60.0865L59.5689 58.0804L59.3096 57.2633L59.4721 55.2115L58.9969 55.3559L58.7441 55.2332L58.6704 54.9084L58.7309 54.444L58.7183 54.0763L58.5492 53.809L58.3159 53.562L58.1146 53.2523L57.7113 51.8709L57.6901 51.5275L57.8576 51.0965L58.0499 51.0124L58.2814 51.0355L58.566 50.9301L59.1087 50.4341L59.363 50.2614L59.7787 50.106L60.2431 49.7404L60.7678 48.5937L61.1734 48.2806L61.953 48.4576L62.3793 48.9827L62.7946 49.2079L63.5417 48.4855L63.9439 47.7941L64.2039 47.0741L64.963 43.008L67.4908 44.6513L68.7111 44.8021L70.0848 45.2222L71.9303 44.4613L73.5266 43.454L74.2911 43.7355L74.6885 44.4586L74.872 45.5113L74.6994 47.691L74.9988 48.9459L75.7818 49.5786L77.2629 50.1512L79.5252 51.2304L80.8805 52.5717L82.3218 53.2043L84.3626 54.1822L85.6188 54.1444L85.8505 53.531L86.6248 50.8042L87.2426 50.2269L87.9583 49.3725L87.8425 48.661L86.0535 46.784L85.4049 43.7743L84.4868 41.3132L82.9398 37.2132L82.98 35.7514L84.2285 34.134L86.0389 31.6462L86.8271 29.346L86.7991 28.4341L85.193 26.8453L82.2327 24.6789L81.2294 22.158L82.1351 17.7617L83.4167 15.267L83.6494 14.3936L83.2762 12.1081L80.64 7.20989L80.3519 5.87302L79.5326 3.63872L78.8693 1.54798L78.728 0.533203L82.2908 2.83378L82.737 3.12173L85.4072 4.84863L87.3733 6.11753L89.5251 7.50625L91.8449 9.00344L94.3216 10.6042L98.2004 13.1123L102.356 15.7943L106.743 18.6291L111.325 21.5902L116.063 24.6503L120.918 27.7856L125.848 30.9704L130.821 34.1817L135.792 37.3947L140.725 40.5789L145.579 43.7152L150.315 46.775L154.896 49.7341L159.284 52.5686L160.579 53.4051L157.813 56.6774L151.773 61.6422L149.893 62.6441L144.906 64.4489L143.365 65.753L143.206 69.8193L143.369 72.6883L142.031 76.9255L141.499 79.0892L140.193 81.0489L138.809 81.5996L137.456 82.2971L136.216 82.3039L133.305 78.9817L132.096 78.6261L130.588 79.689L126.41 81.194L124.244 82.2576L114.762 87.4556L110.845 92.6348L109.958 94.899L110.553 97.7372L110.945 100.824L109.271 103.929L109.012 105.031L109.575 106.451L109.547 107.195L107.462 108.765L106.237 108.693L103.423 107.131L101.363 106.561L99.2675 106.942L97.6479 108.305L95.498 109.535L94.8349 110.627L93.3518 112.16L91.6149 112.559L90.5947 113.376L90.6922 114.114L91.0279 116.652L92.5201 118.289L93.9231 119.238L94.1763 120.245L93.1684 121.999L91.6393 123.667L91.576 124.595L92.4261 125.187L94.0102 125.408L97.5874 127L99.8494 128.082L100.779 129.44L102.304 131.478L101.625 134.117L101.918 134.811L103.56 135.197L104.575 135.725L104.184 137.285L103.546 139.611L104.525 140.834L105.536 142.455L105.505 144.666L104.816 145.863L104.551 147.166L104.033 147.968L105.193 148.464L105.963 150.644L105.69 152.277L106.342 153.371L109.049 154.909L109.642 155.838L108.13 158.565L105.332 160.543L104.343 159.779L101.959 159.081L101.126 158.459L100.045 158.35L99.251 159.771L98.8208 160.504L98.2804 160.574L97.7499 158.34L96.6341 156.821L95.1049 156.002L92.9181 156.525L92.0482 157.939L90.9607 160.388L88.013 161.005L86.8805 161.996L85.0268 163.404L83.8265 164.309L82.2215 165.329L81.3224 164.877L80.3982 163.441L81.711 161.853L81.5621 161.001L79.0753 159.313L76.4594 155.147L74.7153 153.267L74.5536 151.607L73.9701 150.853L72.3481 150.183L74.0695 147.387L73.9586 146.349L72.3642 145.825L71.7734 144.896L71.3893 143.261L72.4135 141.61L74.7006 140.102L75.3159 139.027L76.5778 134.709L78.1748 131.154L78.3811 130.067L76.403 129.632L73.968 130.796L72.1826 130.822L70.9278 130.601L69.5244 131.883L68.5433 132.385L67.2099 132.155L63.3691 131.737L62.3583 131.715L60.6544 132.76L57.7789 134.73L56.3714 134.871L53.9117 134.544L49.9256 133.904L45.4307 133.609L42.1823 133.864L41.2553 133.644L37.8082 134.401L36.3617 134.348L34.3255 132.153L32.8071 131.256L28.2031 130.3L26.3847 129.042L25.0726 128.908L21.0098 131.574L19.0196 132.26L18.3792 132.377L18.6542 131.659L18.7306 131.185L17.608 131.292L16.8596 130.733L15.7411 128.99L15.6919 128.352L15.7338 127.583L15.8782 126.83L16.125 126.234L16.8588 123.684L16.6441 123.141ZM55.4756 110.64L56.6504 110.967L57.412 110.533L58.0172 109.69L58.5452 108.709L58.9011 107.854L58.926 106.882L58.5415 106.078L57.8884 105.41L57.0665 105.003L56.1939 104.875L55.4132 105.232L54.7513 105.978L54.1481 107.193L53.9678 108.125L54.2278 108.71L54.2698 109.244L54.7104 109.775L55.4756 110.64Z"
              stroke="#fdfdf1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="56.5" cy="106.5" r="3" fill={"#c94c28"} />
          </svg>
        </div>
      </div>
    </main>
  );
}
