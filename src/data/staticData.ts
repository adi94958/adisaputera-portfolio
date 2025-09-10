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
      "Hi! I'm Muhammad Adi Saputera, a Full-Stack Developer from Majalengka, Indonesia. I recently graduated from Politeknik Negeri Bandung (D3 Informatics Engineering, GPA 3.42). I have experience in building web and mobile applications using Laravel, ReactJS, and Flutter, as well as working in Agile Scrum teams. I'm passionate about web development and quality assurance, and always eager to learn and grow in software engineering.",
    image_hero: "profile/1000292483.webp",
    image_about: "profile/1000000961.webp",
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
        ability_id: "uuid-skill-web-dev-001",
        ability_name: "Web Development",
        icon: "tabler:device-desktop-code",
      },
      {
        ability_id: "uuid-skill-mobile-dev-002",
        ability_name: "Mobile Development",
        icon: "tabler:device-mobile-code",
      },
      {
        ability_id: "uuid-skill-qa-003",
        ability_name: "Quality Assurance",
        icon: "tabler:checkup-list",
      },
    ],
    language_framework: [
      {
        ability_id: "uuid-lang-php-004",
        ability_name: "PHP",
        icon: "logos:php",
      },
      {
        ability_id: "uuid-lang-js-005",
        ability_name: "JavaScript",
        icon: "logos:javascript",
      },
      {
        ability_id: "uuid-lang-ts-006",
        ability_name: "TypeScript",
        icon: "logos:typescript",
      },
      {
        ability_id: "uuid-lang-dart-007",
        ability_name: "Dart",
        icon: "logos:dart",
      },
      {
        ability_id: "uuid-lang-java-008",
        ability_name: "Java",
        icon: "logos:java",
      },
      { ability_id: "uuid-lang-c-009", ability_name: "C", icon: "logos:c" },
      {
        ability_id: "uuid-lang-python-010",
        ability_name: "Python",
        icon: "logos:python",
      },
      {
        ability_id: "uuid-lang-sql-011",
        ability_name: "SQL",
        icon: "logos:mysql",
      },
      {
        ability_id: "uuid-db-postgres-012",
        ability_name: "PostgreSQL",
        icon: "logos:postgresql",
      },
      {
        ability_id: "uuid-fw-laravel-013",
        ability_name: "Laravel",
        icon: "logos:laravel",
      },
      {
        ability_id: "uuid-fw-react-014",
        ability_name: "ReactJS",
        icon: "logos:react",
      },
      {
        ability_id: "uuid-fw-nextjs-015",
        ability_name: "NextJS",
        icon: "logos:nextjs",
      },
      {
        ability_id: "uuid-fw-vuejs-016",
        ability_name: "VueJS",
        icon: "logos:vue",
      },
      {
        ability_id: "uuid-fw-flutter-017",
        ability_name: "Flutter",
        icon: "logos:flutter",
      },
      {
        ability_id: "uuid-fw-codeigniter-018",
        ability_name: "CodeIgniter",
        icon: "logos:codeigniter",
      },
      {
        ability_id: "uuid-fw-tailwind-019",
        ability_name: "TailwindCSS",
        icon: "logos:tailwindcss",
      },
    ],
    tools: [
      {
        ability_id: "uuid-tool-git-020",
        ability_name: "Git",
        icon: "logos:git",
      },
      {
        ability_id: "uuid-tool-docker-021",
        ability_name: "Docker",
        icon: "logos:docker",
      },
      {
        ability_id: "uuid-tool-postman-022",
        ability_name: "Postman",
        icon: "logos:postman",
      },
      {
        ability_id: "uuid-tool-figma-023",
        ability_name: "Figma",
        icon: "logos:figma",
      },
    ],
  },

  work_experience: [
    {
      experience_id: "uuid-exp-p79-frontend-024",
      company_name: "PT. Padepokan Tujuh Sembilan",
      company_address: "Bandung, West Java, Indonesia",
      company_logo: "organization/padepokan-79.webp",
      position: "Front-End Developer",
      start_date: "2024-08-30",
      end_date: "2024-10-10",
      work_type: "Internship",
      technologies: ["ReactJS", "Redux", "Material UI"],
      description:
        "Developed responsive and modular front-end components using ReactJS, Redux, and Material UI. Collaborated in an Agile Scrum team with cross-functional members, integrated RESTful APIs, and optimized performance for better user experience.",
    },
    {
      experience_id: "uuid-exp-p79-writer-025",
      company_name: "PT. Padepokan Tujuh Sembilan",
      company_address: "Bandung, West Java, Indonesia",
      company_logo: "organization/padepokan-79.webp",
      position: "Technical Writer",
      start_date: "2024-06-20",
      end_date: "2024-08-30",
      work_type: "Internship",
      technologies: ["Spreadsheet", "Google Docs"],
      description:
        "Created and maintained Technical Analysis Documentation (TAD) for web and mobile applications. Responsible for structuring system requirements, documenting workflows, and collaborating with developers and analysts to ensure accuracy and clarity of technical documentation.",
    },
  ],

  projects: [
    {
      project_id: "uuid-proj-pos-nurafie-026",
      project_name: "POS System Toko Nur'afie",
      role: "Full-Stack Developer",
      date_start: "2025-02",
      date_end: "2025-06",
      tech_stack: ["Laravel", "Filament", "Flutter", "MySQL"],
      description:
        "Developing a web and mobile-based Point of Sales (POS) system for Nur'afie Shop, a Hajj supplies and souvenir shop in Bandung, which supports sales processes, stock management, and zakat tijarah (trade zakat) calculations.",
      image: "projects/pos.webp",
      url_demo: null,
      url_repo: "https://github.com/adi94958/POS-Nurafie-Laravel",
    },
    {
      project_id: "uuid-proj-collabu-027",
      project_name: "CollabU: Team & Competition Finder",
      role: "Front-End Developer",
      date_start: "2024-03",
      date_end: "2024-05",
      tech_stack: ["Flutter", "Laravel", "PostgreSQL"],
      description:
        "Developed an innovative mobile app called CollabU, which aims to facilitate students in finding teammates based on their skills, interests, and achievements in university competitions. The app also provides a comprehensive, organized, and easily accessible competition information center.",
      image: "projects/collabu.webp",
      url_demo: null,
      url_repo: "https://github.com/adi94958/FrontEnd-CollabU",
    },
    {
      project_id: "uuid-proj-myroti-028",
      project_name: "MyRoti: Bread Distribution Management",
      role: "Full-Stack Developer",
      date_start: "2023-09",
      date_end: "2023-11",
      tech_stack: ["Laravel", "ReactJS", "PostgreSQL"],
      description:
        "Developed a web platform to support the bread distribution process of the MyRoti company, which serves the Bandung and Cimahi areas. This system supports five user types: Courier, Warehouse Coordinator, Finance, Owner, and Admin.",
      image: "projects/myroti.webp",
      url_demo: null,
      url_repo: "https://github.com/adi94958/MyRoti",
    },
    {
      project_id: "uuid-proj-portfolio-029",
      project_name: "Web Portfolio",
      role: "Full-Stack Developer",
      date_start: "2025-08",
      date_end: "2025-08",
      tech_stack: ["ReactJS", "Redux", "Framer Motion", "TailwindCSS"],
      description:
        "Building a personal web portfolio to showcase professional projects, technical skills, organizational experiences, and brand identity. The portfolio is designed with modern UI/UX principles, smooth animations using Framer Motion, and state management handled by Redux for interactive navigation. It serves as a central hub for recruiters and collaborators to explore my work and profile.",
      image: "projects/portfolio.webp",
      url_demo: "https://adisaputera-portfolio.vercel.app/",
      url_repo: "https://github.com/adi94958/adisaputera-portfolio",
    },
    {
      project_id: "uuid-proj-portfolio-030",
      project_name: "Hairaneeds Inventory Management System",
      role: "Full-Stack Developer",
      date_start: "2024-06",
      date_end: "2024-06",
      tech_stack: ["Laravel", "MySQL"],
      description:
        "This application provides complete features to manage products, customers, and vendors, as well as record sales and purchase transactions with detailed information. It includes an admin dashboard that allows users to add, edit, delete, and view data in interactive tables. The system is suitable for small to medium-sized businesses that need an organized solution for transaction recording and inventory management.",
      image: "projects/hairaneeds.webp",
      url_demo: null,
      url_repo: "https://github.com/adi94958/hairaneeds",
    },
  ],

  organization_experience: [
    {
      organization_id: "uuid-org-bem-polban-030",
      organization_name: "BEM POLBAN",
      organization_logo: "organization/bem.webp",
      department: "Department of Social Community",
      roles: [
        {
          position: "Junior Staff",
          e_certificate: "organization/bem-staff-muda.webp",
          start_date: "2023-05-01",
          end_date: "2023-12-01",
          description:
            "Actively involved in committees such as Eco Series, Social Festival, Safari Mengajar, and KKN Tematik Anantara, supporting event planning, logistics, and execution.",
        },
        {
          position: "Expert Staff",
          e_certificate: "organization/bem-staff-ahli.webp",
          start_date: "2024-01-01",
          end_date: "2024-12-01",
          description:
            "Guided and supervised junior staff in executing social community programs, ensuring effective coordination, mentoring, and smooth implementation of department activities.",
        },
      ],
    },
    {
      organization_id: "uuid-org-himakom-031",
      organization_name: "HIMAKOM",
      organization_logo: "organization/himakom.webp",
      department: "Department of External Affairs",
      roles: [
        {
          position: "Junior Staff",
          e_certificate: "organization/himakom-staff-muda.webp",
          start_date: "2023-03-01",
          end_date: "2023-12-01",
          description:
            "Supported external department activities and assisted in collaborations with other organizations, while participating in student events and outreach programs.",
        },
        {
          position: "Vice Head",
          e_certificate: "organization/himakom-vice-head.webp",
          start_date: "2024-01-01",
          end_date: "2024-12-01",
          description:
            "Coordinated department members, worked with the head and expert staff in planning programs, and mentored junior members during project execution.",
        },
      ],
    },
    {
      organization_id: "uuid-org-imaka-polban-032",
      organization_name: "IMAKA POLBAN",
      organization_logo: "organization/imaka.webp",
      department: "",
      roles: [
        {
          position: "Vice President",
          e_certificate: "organization/bem-imaka-vice-president.webp",
          start_date: "2023-02-01",
          end_date: "2024-09-01",
          description:
            "Led the IMAKA association, overseeing all activities, representing the organization in official matters, and ensuring alignment with its mission and goals.",
        },
      ],
    },
    {
      organization_id: "uuid-org-poljar-033",
      organization_name: "Polban Mengajar",
      organization_logo: "organization/poljar.webp",
      department: "",
      roles: [
        {
          position: "Staff",
          e_certificate: "organization/poljar-staff.webp",
          start_date: "2023-03-01",
          end_date: "2024-12-01",
          description:
            "Participated in teaching activities for elementary students in underprivileged areas around Bandung, helping to improve their academic skills and motivation.",
        },
      ],
    },
  ],

  education: [
    {
      education_id: "uuid-edu-polban-034",
      institution_name: "Politeknik Negeri Bandung",
      level: "Associate Degree",
      major: "Computer and Informatics Engineering",
      location: "Bandung, West Java, Indonesia",
      start_date: "2022-08-24",
      end_date: "2025-07-16",
      gpa: "3.42 / 4.00",
      image: "education/polban.webp",
      description:
        "Studied core computer science and software engineering subjects including Data Structures & Algorithms, Database Systems, Software Design, Web Application Development, Mobile Application Development, and Project Management. Gained strong foundation in both front-end and back-end development, with emphasis on building scalable and maintainable systems.",
    },
    {
      education_id: "uuid-edu-smkn1-kertajati-035",
      institution_name: "SMKN 1 Kertajati",
      level: "Vocational High School",
      major: "Software Engineering",
      location: "Majalengka, West Java, Indonesia",
      start_date: "2019-06-20",
      end_date: "2022-06-20",
      gpa: "88.32 / 100",
      image: "education/smkn1kertajati.webp",
      description:
        "Completed a vocational education focused on software engineering, including programming fundamentals, database design, and application development.",
    },
  ],

  certifications: [
    {
      certification_id: "uuid-cert-bnsp-web-dev-036",
      title: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      issuer_logo: "certifications/bnsp.webp",
      issued_date: "2023-10-20",
      expiry_date: "2026-10-20",
      certificate_url: null,
      certificate_image: "certifications/sertif-bnsp.webp",
    },
    {
      certification_id: "uuid-cert-kominfo-web-dev-037",
      title: "Junior Web Developer",
      issuer: "Kominfo",
      issuer_logo: "certifications/kominfo.webp",
      issued_date: "2023-08-08",
      expiry_date: null,
      certificate_url: "https://digitalent.komdigi.go.id/cek-sertifikat",
      certificate_image: "certifications/kominfo-sertif.webp",
    },
    {
      certification_id: "uuid-cert-arutala-sqa-038",
      title: "Junior Software Quality Assurance",
      issuer: "Arutala Lab",
      issuer_logo: "certifications/arutala.webp",
      issued_date: "2025-07-13",
      expiry_date: "2028-07-01",
      certificate_url:
        "https://atms.arutalalab.net/sertifikat/TC2025.J.SWQA.C.07.023",
      certificate_image: "certifications/junior-SQA.webp",
    },
    {
      certification_id: "uuid-cert-infradigital-cyber-039",
      title: "Cyber Security Training",
      issuer: "InfaDigital Foundation",
      issuer_logo: "certifications/infradigital.webp",
      issued_date: "2021-07-05",
      expiry_date: null,
      certificate_url: null,
      certificate_image: "certifications/infradigital-sertif.webp",
    },
    {
      certification_id: "uuid-cert-seamolec-iot-040",
      title: "Internet of Things for Beginner",
      issuer: "Seamolec",
      issuer_logo: "certifications/seamolec.webp",
      issued_date: "2020-11-17",
      expiry_date: null,
      certificate_url:
        "http://etraining.seamolec.org/verify?certificate=SC/1/00146/XI/2020",
      certificate_image: "certifications/seamolec-sertif.webp",
    },
  ],

  testimonials: [
    {
      testimonial_id: "uuid-test-nisa-shandrina-041",
      name: "Nisa Shandrina",
      position: "Scrum Master",
      organization: "PT. Padepokan Tujuh Sembilan",
      feedback:
        "Adi always followed instructions well, asked when something was unclear, and completed tasks carefully with great results",
    },
    {
      testimonial_id: "uuid-test-aulia-042",
      name: "Aulia",
      position: "Senior System Analyst",
      organization: "PT. Padepokan Tujuh Sembilan",
      feedback:
        "Adi always completes tasks neatly and quickly, and is proactive in asking for new work once a task is finished.",
    },
  ],
};
