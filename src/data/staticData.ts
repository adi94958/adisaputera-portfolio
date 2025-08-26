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
      experience_id: "uuid-21",
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
      experience_id: "uuid-22",
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
      project_id: "uuid-22",
      project_name: "POS System Toko Nur'afie",
      role: "Full-Stack Developer",
      date_start: "2025-02",
      date_end: "2025-06",
      tech_stack: ["Laravel", "Filament", "Flutter", "PostgreSQL"],
      description:
        "Led team to develop a POS system for sales, inventory, and zakat tijarah. Designed database schema (ERD to PDM), implemented transactions with Eloquent ORM & caching, and conducted manual testing with UAT.",
      image: "projects/pos.webp",
      url_demo: null,
      url_repo: "https://github.com/adi94958/POS-Nurafie-Laravel",
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
      image: "projects/collabu.webp",
      url_demo: null,
      url_repo: null,
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
      image: "projects/myroti.webp",
      url_demo: null,
      url_repo: null,
    },
  ],

  organization_experience: [
    {
      organization_id: "uuid-23",
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
      organization_id: "uuid-24",
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
  ],

  education: [
    {
      education_id: "uuid-25",
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
      education_id: "uuid-26",
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
      certification_id: "uuid-29",
      title: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      issuer_logo: "certifications/bnsp.webp",
      issued_date: "2023-05-01",
      expiry_date: "2026-05-01",
      certificate_url: null,
      certificate_image: "certifications/sertif-bnsp.webp",
    },
    {
      certification_id: "uuid-30",
      title: "Junior Web Developer",
      issuer: "Kominfo",
      issuer_logo: "certifications/kominfo.webp",
      issued_date: "2023-08-08",
      expiry_date: null,
      certificate_url: "https://digitalent.komdigi.go.id/cek-sertifikat",
      certificate_image: "certifications/kominfo-sertif.webp",
    },
    {
      certification_id: "uuid-31",
      title: "Junior Software Quality Assurance",
      issuer: "Arutala Lab",
      issuer_logo: "certifications/arutala.webp",
      issued_date: "2025-07-13",
      expiry_date: "2028-07-01",
      certificate_url:
        "https://atms.arutalalab.net/sertifikat/TC2025.J.SWQA.C.07.023",
      certificate_image: "certifications/junior-SQA.webp",
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
