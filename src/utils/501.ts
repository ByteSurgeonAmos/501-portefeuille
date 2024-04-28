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
    link: "https://github.com/AMO15310/Aqua-craft",
    technologies_used: "Next.js, Typescript, Appwrite,Tailwind",
    description:
      "This projects is a water tracking application that allows you to manage your bills at the palm of your hand",
    private: true,
  },
  {
    project: "Music Player",
    link: "https://github.com/AMO15310/music-player-react-ts",
    technologies_used: "React, Typescript, Tailwind",
    description:
      "Just a regular music player - STREAM. Play your favourite song",
    private: false,
  },
  {
    project: "MedInfoPlus",
    link: "https://github.com/AMO15310/medinfoplus",
    description:
      "This project is all about medical articles site.Read about any medical condition",
    technologies_used: "React,Typescript,Tailwind,Flask",
    private: false,
  },
  {
    project: "Order-It Admin",
    link: "https://github.com/CodeSpider2",
    technologies_used: "React,Tailwind css Express Node",
    description: "Admin panel for an ecommerce",
    private: true,
  },
  {
    project: "Benmax-Bucket",
    link: "https://github.com/CodeSpider2/Benmax-Bucket",
    technologies_used: "React,Javascript,sass",
    description: "Older aquacraft version",
    private: false,
  },
  {
    project: "Order-It",
    link: "https://github.com/CodeSpider2/e-commerce",
    technologies_used: "React,Tailwind",
    description: "E-commerce web  application ",
    private: false,
  },
  {
    project: "Sanbake",
    link: "https://github.com/CodeSpider2/Sanbake",
    technologies_used: "HTML,Sass,JS",
    description: "Bakery commerce site.Get your favourite baked product there!",
    private: false,
  },
  {
    project: "Linked In clone site",
    link: "https://github.com/CodeSpider2/linked-in-clone",
    technologies_used: "Nextjs,Tailwind css, Clerk, Shadcn,Firebase",
    description:
      "A responsive clone for the Linked In site with clerk authentication.",
    private: false,
  },
  {
    project: "Mefric financial company simple site",
    link: "https://github.com/CodeSpider2/mefric_simple",
    technologies_used: "Html,css,javascript",
    description: "A responsive simple site for a financial company.",
    private: false,
  },
  {
    project: "MedInfoPlus",
    link: "https://github.com/CodeSpider2/med-info-v2",
    technologies_used: "Nextjs, Typescript,Apprwite",
    description: "A responsive blogging site for medical blogs.",
    private: false,
  },
  {
    project: "Bulk sms API endpoint",
    link: "https://github.com/CodeSpider2/Bulk-sms",
    technologies_used: "Nodejs,Bulk sms service",
    description: "A Bulk sms sending endpoint using bulksms web service",
    private: false,
  },
];
