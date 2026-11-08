/** Verbatim homepage copy extracted from https://cubbie.ai/ on 2026-11-08.
 * Includes all desktop dropdown, week-tab and FAQ states.
 * Hrefs retain the original source paths; the presentation decides routing.
 */
export interface ContentLink {
  readonly text: string;
  readonly href: string;
}
export interface ContentItem {
  readonly title: string;
  readonly body: string;
  readonly link?: ContentLink;
}
export interface ContentGroup {
  readonly title: string;
  readonly links: readonly ContentLink[];
}
export interface CubbieHomepageContent {
  readonly sourceUrl: string;
  readonly metadata: { readonly title: string; readonly description: string };
  readonly navigation: {
    readonly menuLabel: string;
    readonly groups: readonly ContentGroup[];
    readonly cta: ContentLink;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly title: string;
    readonly titleLead: string;
    readonly titleEmphasis: string;
    readonly body: string;
    readonly links: readonly ContentLink[];
    readonly support: string;
  };
  readonly problem: {
    readonly title: string;
    readonly paragraphs: readonly string[];
  };
  readonly overview: {
    readonly title: string;
    readonly items: readonly ContentItem[];
    readonly note: string;
  };
  readonly canvas: {
    readonly title: string;
    readonly body: string;
    readonly link: ContentLink;
    readonly promptLabel: string;
    readonly prompts: readonly string[];
  };
  readonly coursework: {
    readonly title: string;
    readonly body: string;
    readonly link: ContentLink;
    readonly steps: readonly ContentItem[];
  };
  readonly emailCalendar: {
    readonly title: string;
    readonly body: string;
    readonly items: readonly ContentItem[];
    readonly link: ContentLink;
  };
  readonly week: {
    readonly title: string;
    readonly days: readonly {
      readonly title: string;
      readonly count: string;
      readonly body: string;
    }[];
    readonly link: ContentLink;
  };
  readonly howItWorks: {
    readonly title: string;
    readonly steps: readonly ContentItem[];
  };
  readonly control: {
    readonly title: string;
    readonly items: readonly ContentItem[];
    readonly note: string;
  };
  readonly faq: {
    readonly title: string;
    readonly items: readonly {
      readonly question: string;
      readonly answer: string;
    }[];
  };
  readonly closing: {
    readonly title: string;
    readonly body: string;
    readonly link: ContentLink;
  };
  readonly footer: {
    readonly groups: readonly ContentGroup[];
    readonly trademarks: string;
  };
}

export const cubbieContent = {
  sourceUrl: "https://cubbie.ai/",
  metadata: {
    title: "Student Planner & AI School Assistant | Cubbie",
    description:
      "Plan schoolwork with Cubbie, a digital student planner you text. It brings Canvas assignments, course materials, Gmail and Google Calendar into one conversation.",
  },
  navigation: {
    menuLabel: "Menu",
    groups: [
      {
        title: "Features",
        links: [
          {
            text: "All Features",
            href: "/features",
          },
          {
            text: "Coursework Help",
            href: "/features/coursework-help",
          },
          {
            text: "Assignment Drafting",
            href: "/features/assignment-drafting",
          },
          {
            text: "Student Productivity Agent",
            href: "/features/student-productivity-agent",
          },
          {
            text: "Professor Reviews",
            href: "/features/professor-reviews",
          },
        ],
      },
      {
        title: "Integrations",
        links: [
          {
            text: "All Integrations",
            href: "/integrations",
          },
          {
            text: "Canvas",
            href: "/integrations/canvas",
          },
        ],
      },
      {
        title: "Use Cases",
        links: [
          {
            text: "All Use Cases",
            href: "/use-cases",
          },
          {
            text: "Never Miss a Canvas Deadline",
            href: "/use-cases/never-miss-a-canvas-deadline",
          },
          {
            text: "Course Planning",
            href: "/use-cases/course-planning",
          },
        ],
      },
      {
        title: "Resources",
        links: [
          {
            text: "Study Guides",
            href: "/blog",
          },
        ],
      },
    ],
    cta: {
      text: "Get Started",
      href: "/sign-in",
    },
  },
  hero: {
    eyebrow: "Your schoolwork, connected",
    title: "Student Planner Powered by Your AI School Assistant",
    titleLead: "Student Planner Powered by",
    titleEmphasis: "Your AI School Assistant",
    body: "Bring assignments, course materials, school email, your calendar and reminders into one conversation. Cubbie helps you find what matters, see what comes next and stay in charge of your work.",
    links: [
      {
        text: "Get started",
        href: "/sign-in",
      },
      {
        text: "See how it works",
        href: "#how-it-works",
      },
    ],
    support:
      "Connect only the accounts you choose. Cubbie asks before it sends an email.",
  },
  problem: {
    title: "Schoolwork shouldn’t live in five different places",
    paragraphs: [
      "An assignment is posted in Canvas. A professor moves the due date in an announcement. A group update arrives by email. Your study plan sits in another calendar. By the time you’ve pieced it together, the actual work hasn’t started.",
      "Cubbie cuts down that switching. It brings the school accounts you connect into one student planner you text, so you can see the task, understand it and decide what to do next.",
    ],
  },
  overview: {
    title: "One student planner for the whole school week",
    items: [
      {
        title: "See upcoming work",
        body: "Assignments, due dates and announcements from every Canvas course in one list, with reminders before work is due.",
        link: {
          text: "Never miss a deadline →",
          href: "/use-cases/never-miss-a-canvas-deadline",
        },
      },
      {
        title: "Understand the assignment",
        body: "Ask about course material and turn a large task into smaller steps you can change.",
        link: {
          text: "Coursework help →",
          href: "/features/coursework-help",
        },
      },
      {
        title: "Find the missing context",
        body: "Search Gmail, Drive and your Canvas files for the details attached to a course or assignment.",
        link: {
          text: "All integrations →",
          href: "/integrations",
        },
      },
      {
        title: "Plan what happens next",
        body: "Build a study plan, set reminders and add study time to Google Calendar.",
        link: {
          text: "All features →",
          href: "/features",
        },
      },
    ],
    note: "Cubbie helps you organize, understand and prepare your work. You check the information, follow your course rules and submit your own work.",
  },
  canvas: {
    title: "Turn Canvas into a clearer plan",
    body: "Connect Canvas and Cubbie syncs your courses, assignments and quizzes, grades, announcements and course files. Check what’s due without opening every course one by one.",
    link: {
      text: "Explore the Canvas integration →",
      href: "/integrations/canvas",
    },
    promptLabel: "Text Cubbie",
    prompts: [
      "What’s due this week?",
      "Which assignment should I start first?",
      "Did any due dates change?",
      "Where are the instructions for the lab report?",
      "Am I missing anything?",
    ],
  },
  coursework: {
    title: "Get unstuck without giving up control of the work",
    body: "Cubbie explains course material, clarifies an assignment prompt, suggests a task breakdown you can edit and helps you plan your research. It doesn’t replace you. It makes the next step easier to see.",
    link: {
      text: "Explore coursework help →",
      href: "/features/coursework-help",
    },
    steps: [
      {
        title: "Point Cubbie at the material",
        body: "Name the course and assignment, or text Cubbie the file.",
      },
      {
        title: "Ask what the assignment requires",
        body: "Cubbie reads the instructions and cites the file it used.",
      },
      {
        title: "Review the explanation or plan",
        body: "Check it against the source.",
      },
      {
        title: "Fit it to your professor’s instructions",
        body: "Change the steps and dates until they work for you.",
      },
      {
        title: "Do the work and submit it yourself",
        body: "Cubbie never clicks Submit in Canvas.",
      },
    ],
  },
  emailCalendar: {
    title: "Keep school admin from taking over your day",
    body: "Coursework isn’t only in Canvas. Important dates and requests also arrive by email, in shared documents and on your calendar. Connect Google and Cubbie can help you:",
    items: [
      {
        title: "Find a course email",
        body: "Search Gmail for the message about the lab, the TA’s office hours or registration.",
      },
      {
        title: "Summarize a long thread",
        body: "Get the short version and the dates mentioned in it.",
      },
      {
        title: "Add it to your calendar",
        body: "Put an exam, a due date or a study session on Google Calendar.",
      },
      {
        title: "Set a reminder",
        body: "Ask for a text at the time you choose, once or on a schedule.",
      },
    ],
    link: {
      text: "See every integration →",
      href: "/integrations",
    },
  },
  week: {
    title: "From scattered updates to a workable week",
    days: [
      {
        title: "Monday",
        count: "1 / 5",
        body: "Check upcoming assignments and anything that changed.",
      },
      {
        title: "Tuesday",
        count: "2 / 5",
        body: "Break a large assignment into milestones.",
      },
      {
        title: "Wednesday",
        count: "3 / 5",
        body: "Find your professor’s latest email and the course file it mentions.",
      },
      {
        title: "Thursday",
        count: "4 / 5",
        body: "Look at what’s left and adjust the plan.",
      },
      {
        title: "Friday",
        count: "5 / 5",
        body: "Check what’s done, missing and coming up before the weekend.",
      },
    ],
    link: {
      text: "Explore use cases →",
      href: "/use-cases",
    },
  },
  howItWorks: {
    title: "Connect. Ask. Review. Act.",
    steps: [
      {
        title: "Connect the tools you choose",
        body: "Connect Canvas, Google or both, and review the access each one asks for.",
      },
      {
        title: "Ask in plain language",
        body: "Text Cubbie about assignments, course materials, email or the week ahead.",
      },
      {
        title: "Review the source and the suggestion",
        body: "Check dates, files, instructions and anything Cubbie writes.",
      },
      {
        title: "Confirm what matters",
        body: "Cubbie asks before it sends an email, and you submit your own work.",
      },
    ],
  },
  control: {
    title: "Your accounts stay under your control",
    items: [
      {
        title: "Connect what you choose",
        body: "Canvas and Google are separate connections. Review the access each one asks for, and disconnect any time.",
      },
      {
        title: "Asks before acting",
        body: "Cubbie shows you an email before it goes out and checks with you before deleting or sharing files.",
      },
      {
        title: "Your Google data",
        body: "Cubbie follows Google’s Limited Use requirements and doesn’t use your Google data for ads or to train AI models.",
      },
    ],
    note: "AI can be wrong, and synced data can be out of date. Check important dates, grades and instructions against Canvas and your course materials.",
  },
  faq: {
    title: "Questions students ask",
    items: [
      {
        question: "What is Cubbie?",
        answer:
          "Cubbie is an AI school assistant and student planner you text. It connects to Canvas and Google to keep track of assignments, email and your calendar, and helps you work through coursework.",
      },
      {
        question: "Is Cubbie a homework answer generator?",
        answer:
          "No. Cubbie explains course material and helps you plan and review your work. You check what it writes, follow your instructor’s rules about AI and submit your own work.",
      },
      {
        question: "Does Cubbie work with Canvas?",
        answer:
          "Yes. Connect Canvas with the Cubbie Chrome extension, or at supported schools through a one-time secure sign-in link. Cubbie syncs your courses, assignments, grades, announcements and files.",
      },
      {
        question: "Can Cubbie send email or change my calendar on its own?",
        answer:
          "Cubbie acts when you ask. It shows you an email and asks before sending it, and checks with you before changing an event other people are invited to.",
      },
      {
        question: "Does Cubbie work on Android?",
        answer:
          "Yes. iPhones reach Cubbie over iMessage and Android phones over RCS, using the same number.",
      },
      {
        question: "Is Cubbie always accurate?",
        answer:
          "No. AI output and synced data can be incomplete, out of date or wrong. Check important dates, grades, instructions and course content against the original source.",
      },
    ],
  },
  closing: {
    title: "Spend less time finding schoolwork and more time doing it",
    body: "Connect the tools you already use and plan the week ahead.",
    link: {
      text: "Get started",
      href: "/sign-in",
    },
  },
  footer: {
    groups: [
      {
        title: "Features",
        links: [
          {
            text: "All Features",
            href: "/features",
          },
          {
            text: "Coursework Help",
            href: "/features/coursework-help",
          },
          {
            text: "Assignment Drafting",
            href: "/features/assignment-drafting",
          },
          {
            text: "Student Productivity Agent",
            href: "/features/student-productivity-agent",
          },
          {
            text: "Professor Reviews",
            href: "/features/professor-reviews",
          },
        ],
      },
      {
        title: "Integrations",
        links: [
          {
            text: "All Integrations",
            href: "/integrations",
          },
          {
            text: "Canvas",
            href: "/integrations/canvas",
          },
        ],
      },
      {
        title: "Use Cases",
        links: [
          {
            text: "All Use Cases",
            href: "/use-cases",
          },
          {
            text: "Never Miss a Canvas Deadline",
            href: "/use-cases/never-miss-a-canvas-deadline",
          },
          {
            text: "Course Planning",
            href: "/use-cases/course-planning",
          },
        ],
      },
      {
        title: "Resources",
        links: [
          {
            text: "Study Guides",
            href: "/blog",
          },
        ],
      },
      {
        title: "Universities",
        links: [
          {
            text: "ASU",
            href: "/universities/asu",
          },
          {
            text: "UCF",
            href: "/universities/ucf",
          },
          {
            text: "BYU",
            href: "/universities/byu",
          },
          {
            text: "Texas A&M",
            href: "/universities/tamu",
          },
        ],
      },
      {
        title: "Cubbie",
        links: [
          {
            text: "Home",
            href: "/",
          },
          {
            text: "Discord",
            href: "https://discord.gg/7eJADTbQMT",
          },
          {
            text: "Privacy Policy",
            href: "/en-US/privacy",
          },
          {
            text: "Terms of Service",
            href: "/en-US/terms",
          },
        ],
      },
    ],
    trademarks:
      "Canvas is a trademark of Instructure, Inc. Gmail and Google Calendar are trademarks of Google LLC. iMessage is a trademark of Apple Inc. Cubbie is not affiliated with or endorsed by these companies.",
  },
} as const satisfies CubbieHomepageContent;
