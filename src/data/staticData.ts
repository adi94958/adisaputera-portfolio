// Static data for the portfolio
export const staticData = {
  user: {
    username: "adisaputra",
    password: "password123",
    token: "sample-token",
  },

  profile: {
    brand_name: "AdiSaputera",
    name: "MUHAMMAD ADI SAPUTERA",
    role: "Full-Stack Developer",
    role_description:
      "Fresh graduate in Informatics Engineering with hands-on experience as Front-End and Full-Stack Developer on academic and industrial projects.",
    self_description:
      "Hi! I'm Muhammad Adi Saputera, a Full-Stack Developer from Majalengka, Indonesia. I recently graduated from Politeknik Negeri Bandung (D3 Informatics Engineering, GPA 3.42). I have experience in building web and mobile applications using Laravel, ReactJS, and Flutter, as well as working in Agile Scrum teams. I’m passionate about web development and quality assurance, and always eager to learn and grow in software engineering.",
    image_hero: "1000292483.jpg",
    image_about: "1000000961.jpg",
    cv: "Muhammad Adi Saputera_CV.pdf",
  },

  contact: {
    email: "adi94958@gmail.com",
    phone: "+62 813-1012-8028",
    address: "Majalengka, West Java, Indonesia",
    social_media: [
      {
        label: "LinkedIn",
        link: "https://linkedin.com/in/muhammad-adi-saputera/",
        icon: "mdi:linkedin",
      },
      {
        label: "GitHub",
        link: "https://github.com/adi94958",
        icon: "mdi:github",
      },
      {
        label: "Instagram",
        link: "https://instagram.com/adisaputeraa",
        icon: "mdi:instagram",
      },
    ],
  },

  abilities: {
    skill_expertise: [
      {
        ability_id: "uuid-1",
        ability_name: "Web Development",
        icon: "tabler:device-desktop-code",
      },
      {
        ability_id: "uuid-2",
        ability_name: "Mobile Development",
        icon: "tabler:device-mobile-code",
      },
      {
        ability_id: "uuid-3",
        ability_name: "Quality Assurance",
        icon: "tabler:checkup-list",
      },
    ],
    language_framework: [
      { ability_id: "uuid-4", ability_name: "PHP", icon: "logos:php" },
      {
        ability_id: "uuid-5",
        ability_name: "JavaScript",
        icon: "logos:javascript",
      },
      {
        ability_id: "uuid-6",
        ability_name: "TypeScript",
        icon: "logos:typescript",
      },
      { ability_id: "uuid-7", ability_name: "Dart", icon: "logos:dart" },
      { ability_id: "uuid-8", ability_name: "Java", icon: "logos:java" },
      { ability_id: "uuid-9", ability_name: "SQL", icon: "logos:mysql" },
      {
        ability_id: "uuid-10",
        ability_name: "PostgreSQL",
        icon: "logos:postgresql",
      },
      { ability_id: "uuid-11", ability_name: "Laravel", icon: "logos:laravel" },
      { ability_id: "uuid-12", ability_name: "ReactJS", icon: "logos:react" },
      { ability_id: "uuid-13", ability_name: "Flutter", icon: "logos:flutter" },
      {
        ability_id: "uuid-14",
        ability_name: "CodeIgniter",
        icon: "logos:codeigniter",
      },
    ],
    tools: [
      { ability_id: "uuid-15", ability_name: "Git", icon: "logos:git" },
      { ability_id: "uuid-16", ability_name: "Docker", icon: "logos:docker" },
      { ability_id: "uuid-17", ability_name: "Postman", icon: "logos:postman" },
      { ability_id: "uuid-18", ability_name: "Figma", icon: "logos:figma" },
      {
        ability_id: "uuid-19",
        ability_name: "PowerDesigner",
        icon: "logos:db",
      },
    ],
  },

  work_experience: [
    {
      experience_id: "uuid-20",
      company_name: "PT. Padepokan Tujuh Sembilan",
      company_address: "Bandung, Indonesia",
      position: "Front-End Developer (Internship)",
      start_date: "2024-08",
      end_date: "2024-10",
      technologies: ["ReactJS", "Redux", "React Router", "Formik", "Yup"],
      description:
        "Developed responsive and modular front-end with ReactJS. Implemented Redux, Router, and form handling, while collaborating with cross-functional teams in Agile Scrum.",
    },
    {
      experience_id: "uuid-21",
      company_name: "PT. Padepokan Tujuh Sembilan",
      company_address: "Bandung, Indonesia",
      position: "Technical Writer (Internship)",
      start_date: "2024-06",
      end_date: "2024-07",
      technologies: ["Google Docs", "Spreadsheet"],
      description:
        "Performed reverse engineering analysis on fintech apps and created Technical Analysis Document (TAD). Documented workflows, data dependencies, and system components.",
    },
  ],

  projects: [
    {
      project_id: "uuid-22",
      project_name: "POS System – Toko Nur'afie (Web & Mobile)",
      role: "Full-Stack Developer",
      date_start: "2025-02",
      date_end: "2025-06",
      tech_stack: ["Laravel", "Filament", "Flutter", "PostgreSQL"],
      description:
        "Led team to develop a POS system for sales, inventory, and zakat tijarah. Designed database schema (ERD to PDM), implemented transactions with Eloquent ORM & caching, and conducted manual testing with UAT.",
      image: "pos.png",
    },
    {
      project_id: "uuid-23",
      project_name: "CollabU – Team & Competition Finder",
      role: "Front-End Developer",
      date_start: "2024-03",
      date_end: "2024-05",
      tech_stack: ["Flutter", "REST API"],
      description:
        "Led front-end team in developing a student teaming app using Flutter. Built responsive modular interfaces and integrated with REST APIs for real-time data communication.",
      image: "collabu.jpg",
    },
    {
      project_id: "uuid-24",
      project_name: "MyRoti – Bread Distribution System",
      role: "Full-Stack Developer",
      date_start: "2023-09",
      date_end: "2023-11",
      tech_stack: ["Laravel", "ReactJS", "PostgreSQL"],
      description:
        "Led project to build distribution management system. Developed Laravel back-end with role-based authentication & RESTful API, ReactJS front-end with reusable components, and PostgreSQL database integration.",
      image: "myroti.jpg",
    },
  ],

  organization_experience: [
    {
      organization_id: "uuid-23",
      organization_name: "BEM POLBAN",
      organization_logo: "bem.webp",
      department: "Department of Social Community",
      roles: [
        {
          position: "Junior Staff",
          e_certificate: "bem-staff-muda.jpg",
          start_date: "2023-05-01",
          end_date: "2023-12-01",
          description:
            "Assisted in planning and executing community service programs, engaged with students, and supported social projects.",
        },
        {
          position: "Expert Staff",
          e_certificate: "bem-staff-ahli.jpg",
          start_date: "2024-01-01",
          end_date: "2024-12-01",
          description:
            "Provided expertise and guidance for community engagement projects, mentored junior staff, and coordinated with external partners.",
        },
      ],
    },
    {
      organization_id: "uuid-24",
      organization_name: "HIMAKOM",
      organization_logo: "himakom.png",
      department: "Department of External Affairs",
      roles: [
        {
          position: "Junior Staff",
          e_certificate: "himakom-staff-muda.jpg",
          start_date: "2023-03-01",
          end_date: "2023-12-01",
          description:
            "Supported student community projects, contributed to open-source initiatives, and facilitated IT knowledge sharing sessions.",
        },
        {
          position: "Vice Head",
          e_certificate: "himakom-vice-head.jpg",
          start_date: "2024-01-01",
          end_date: "2024-12-01",
          description:
            "Supported student community projects, contributed to open-source initiatives, and facilitated IT knowledge sharing sessions.",
        },
      ],
    },
  ],

  education: [
    {
      education_id: "uuid-29",
      institution_name: "Politeknik Negeri Bandung",
      level: "Associate Degree (D3)",
      major: "Informatics Engineering",
      location: "Bandung, Indonesia",
      start_date: "2022-08",
      end_date: "2025-07",
      gpa: "3.42/4.00",
      description:
        "Studied core informatics subjects: Data Structures, Database, Software Engineering, Web & Mobile Development, Cloud Computing, and Project Management.",
    },
  ],

  certifications: [
    {
      certification_id: "uuid-29",
      title: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      issuer_logo: "bnsp.png",
      issued_date: "2023-05-01",
      expiry_date: "2026-05-01",
      certificate_url: null,
      certificate_image: "sertif-bnsp.jpg",
    },
    {
      certification_id: "uuid-30",
      title: "Junior Web Developer",
      issuer: "Kominfo",
      issuer_logo: "kominfo.png",
      issued_date: "2023-08-08",
      expiry_date: null,
      certificate_url: "https://digitalent.komdigi.go.id/cek-sertifikat",
      certificate_image: "kominfo-sertif-1.jpg",
    },
    {
      certification_id: "uuid-31",
      title: "Junior Software Quality Assurance",
      issuer: "Arutala Lab",
      issuer_logo: "arutala.png",
      issued_date: "2025-07-13",
      expiry_date: "2028-07-01",
      certificate_url:
        "https://atms.arutalalab.net/sertifikat/TC2025.J.SWQA.C.07.023",
      certificate_image: "junior-SQA.jpg",
    },
  ],

  testimonials: [
    {
      testimonial_id: "uuid-33",
      name: "Nisa Shandrina",
      position: "Scrum Master",
      organization: "PT. Padepokan Tujuh Sembilan",
      feedback:
        "Adi is a dedicated developer with strong problem-solving skills. He quickly adapts to new technologies and is a great team player.",
    },
    {
      testimonial_id: "uuid-34",
      name: "Aulia",
      position: "Senior System Analyst",
      organization: "PT. Padepokan Tujuh Sembilan",
      feedback:
        "Working with Adi was a pleasure. He consistently delivered high-quality work and contributed innovative ideas to our projects.",
    },
  ],
};
