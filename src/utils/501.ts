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
    link: "https://github.com/AMO15310",
    technologies_used: "React,Tailwind css Express Node",
    description: "Admin panel for an ecommerce",
    private: true,
  },
  {
    project: "Benmax-Bucket",
    link: "https://github.com/AMO15310/Benmax-Bucket",
    technologies_used: "React,Javascript,sass",
    description: "Older aquacraft version",
    private: false,
  },
  {
    project: "Order-It",
    link: "https://github.com/AMO15310/e-commerce",
    technologies_used: "React,Tailwind",
    description: "E-commerce web  application ",
    private: false,
  },
  {
    project: "Sanbake",
    link: "https://github.com/AMO15310/Sanbake",
    technologies_used: "HTML,Sass,JS",
    description: "Bakery commerce site.Get your favourite baked product there!",
    private: false,
  },
];
