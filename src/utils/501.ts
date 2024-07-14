interface Projects {
  project: string;
  link: string;
  technologies_used: string;
  private: boolean;
  description: string;
}
export const data: Projects[] = [
  {
    project: "Aqua-craft",
    link: "https://github.com/ByteSurgeonAmos/Aqua-craft",
    technologies_used: "Next.js, Typescript, Appwrite,Tailwind",
    description:
      "This projects is a water tracking application that allows you to manage your bills at the palm of your hand",
    private: true,
  },
  {
    project: "Medappoint",
    link: "https://github.com/ByteSurgeonAmos",
    technologies_used: "React, Typescript, Tailwind",
    description:
      "This platform allows Doctors and patients to connect eliminating the hassle of timewasting when booking medical appointments.",
    private: true,
  },
  {
    project: "MedInfoPlus",
    link: "https://github.com/ByteSurgeonAmos/medinfoplus",
    description:
      "This project is all about medical articles site.Read about any medical condition",
    technologies_used: "React,Typescript,Tailwind,Flask",
    private: false,
  },

  {
    project: "X-MOBIT",
    link: "https://github.com/ByteSurgeonAmos",
    technologies_used: "Nextjs,Typescript,NodeJS,Blockchain",
    description:
      "A p2p crypto currency application aimed at Africa's Crypto Market.",
    private: true,
  },

  {
    project: "Bulk sms API endpoint",
    link: "https://github.com/ByteSurgeonAmos/Bulk-sms",
    technologies_used: "Nodejs,Bulk sms service",
    description: "A Bulk sms sending endpoint using bulksms web service",
    private: false,
  },
];
