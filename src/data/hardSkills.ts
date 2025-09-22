interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Flutter",
    description: "My favorite Framework for cross-platform development especially in mobile",
    icon: "flutter"
  },
  {
    name: "BLoC / Cubit",
    description: "Best State managemt for separted businees logic from UI",
    icon: "bloc"
  },
  {
    name: "Firebase",
description: "One of the best (BaaS) for mobile development, very useful for building an MVP in just one month with all the tools it offers. (Firebase Auth, FCM, Firestore, etc)",
    icon: "firebase"
  },
  {
    name: "GoRouter",
    description: "For me the best navigation package, deep link, stream a provider for listen auth user and more useful features",
    icon: "flutter"
  },
  {
    name : "Code Magic",
    description: "Best tool for CI/CD deployment in app store and play store.",
    icon : "codemagic"
  },
  {
    name : "Riverpood",
    "description": "Riverpod is a modern, scalable state management solution built as an improved version of Provider. It eliminates common issues like accidental context misuse and provides better performance.",
    "icon": "riverpod"
  }
];

export default hardSkills;