// backend/seed.js
const mongoose = require("mongoose");
const Language = require("./models/Language");
require("dotenv").config();

const seedLanguages = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    programmers: "16.4M",
    year: 1995,
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    programmers: "11.3M",
    year: 1991,
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    programmers: "9.4M",
    year: 1995,
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    programmers: "6.7M",
    year: 1985,
  },
  {
    name: "Go",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    programmers: "2.1M",
    year: 2009,
  },
  {
    name: "Rust",
    icon: "data:image/png;base64,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",
    programmers: "0.9M",
    year: 2010,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    programmers: "4.1M",
    year: 2012,
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    programmers: "7M+",
    year: 2000,
  },
  {
    name: "Ruby",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    programmers: "1.5M+",
    year: 1995,
  },
  {
    name: "Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    programmers: "2M+",
    year: 2011,
  },
  {
    name: "Swift",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    programmers: "2M+",
    year: 2014,
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    programmers: "6M+",
    year: 1995,
  },
  {
    name: "Perl",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg",
    programmers: "1M+",
    year: 1987,
  },
  {
    name: "Scala",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
    programmers: "800K+",
    year: 2004,
  },
  {
    name: "MATLAB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
    programmers: "1.5M+",
    year: 1984,
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");
    await Language.deleteMany({});
    await Language.insertMany(seedLanguages);
    console.log("Seeded data");
    mongoose.disconnect();
  })
  .catch((err) => console.error("DB connection error:", err));
