"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Director data
const director = {
  name: "Dr. Yu (Jeff) Lei",
  photo: "DrLei.jpg",
  info: "Professor of Department of Computer Science & Engineering",
  profileUrl: "https://www.uta.edu/academics/faculty/profile?user=ylei"
};

// Current Members
const currentMembers = [
  {
    name: "Fadul Sikder",
    photo: "fadul.jpg",
    info: "Ph.D. Student",
    link: "https://www.linkedin.com/in/fadul-sikder-0b5a8a202/"
  },
  {
    name: "Krishna Khadka",
    photo: "krishna.jpeg",
    info: "Ph.D. Student",
    link: "https://www.linkedin.com/in/krishna-khadka-238b35162/"
  },
  {
    name: "Arjun Dahal",
    photo: "arjun.jpeg",
    info: "Ph.D. Student",
    link: "https://www.linkedin.com/in/arjdahal/"
  },
  {
    name: "Pujan Budhathoki",
    photo: "pujan.png",
    info: "Ph.D. Student",
    link: "https://www.linkedin.com/in/pujan-budhathoki-54a957144/"
  },
  {
    name: "Saif Uddin Mahmud",
    photo: "saif-pic.jpg",
    info: "Ph.D. Student",
    link: "https://www.linkedin.com/in/saif--mahmud/"
  },
  {
    name: "Shovon Niverd",
    photo: "shovon_pereira.jpg",
    info: "Ph.D. Student",
    link: "https://www.linkedin.com/in/shovon-niverd-pereira/"
  },
  {
    name: "Samreen",
    photo: "samreen.jpeg",
    info: "M.S. Thesis Student",
    link: "https://www.linkedin.com/in/samerr98"
  },
  {
    name: "Sampada",
    photo: "Sampada.jpg",
    info: "Volunteer Research Assistant",
    link: "https://www.linkedin.com/in/sampadapavate/"
  }
];

// Alumni
const alumni = [
  {
    name: "Qiping Wei",
    photo: "qiping.jpg",
    info: "Graduated in 2025",
    link: "https://www.linkedin.com/in/qiping-wei-5202a914b/"
  },
  {
    name: "Sunny Shree",
    photo: "sunny.jpg",
    info: "Graduated in 2024"
  },
  {
    name: "Mengfei (Angela) Ren",
    photo: "mengfei.jpg",
    info: "Graduated in 2023",
    link: "https://www.linkedin.com/in/angelarenmf/"
  },
  {
    name: "Xiaolei (Harry) Ren",
    photo: "Xiaolei.jpg",
    info: "Graduated in 2023"
  },
  {
    name: "Ruben Martinez",
    photo: "bio-photo.jpg",
    info: "Graduated in 2023"
  },
  {
    name: "Ankita Patel",
    photo: "Ankita.jpg",
    info: "Graduated in 2022",
    link: "https://www.linkedin.com/in/patelankitar/"
  },
  {
    name: "Duan Feng",
    photo: "Feng_Duan.jpeg",
    info: "Graduated in 2021"
  },
  {
    name: "Huadong (Jack) Feng",
    photo: "Huadong_Feng.png",
    info: "Graduated in 2021"
  },
  {
    name: "Jaganmohan Chandrasekaran",
    photo: "Jagan.jpg",
    info: "Graduated in 2021",
    link: "https://www.linkedin.com/in/cjaganmohan/"
  },
  {
    name: "Sarker Tanveer Ahmed",
    photo: "Sarker_Tanveer_Ahmed.jpeg",
    info: "Graduated in 2017",
    link: "https://www.linkedin.com/in/sarker-tanveer-ahmed-93a0a072/"
  },
  {
    name: "Laleh Ghandehari",
    photo: "Laleh_Ghandehari.jpeg",
    info: "Graduated in 2016",
    link: "https://www.linkedin.com/in/lalehshghandehari/"
  },
  {
    name: "Jing Xu",
    photo: "Jing_Xu.jpeg",
    info: "Graduated in 2016",
    link: "https://www.linkedin.com/in/jing-xu-b77bb357/"
  },
  {
    name: "Mehra Nouroz Borazjany",
    photo: "Mehra_Nouroz_Borazjany.jpeg",
    info: "Graduated in 2014"
  },
  {
    name: "Linbin Yu",
    photo: "Linbin_Yu.jpeg",
    info: "Graduated in 2013",
    link: "https://www.linkedin.com/in/linbinyu/"
  },
  {
    name: "Dengfeng Xia",
    photo: "Dengfeng_Xia.jpeg",
    info: "Graduated in 2012"
  },
  {
    name: "Wenhua Wang",
    photo: "bio-photo.jpg",
    info: "Graduated in 2010",
    link: "https://www.linkedin.com/in/wenhua-wang-1169741b/"
  },
  {
    name: "Anthony Opara",
    photo: "bio-photo.jpg",
    info: "Graduated in 2008",
    link: "https://www.linkedin.com/in/anthony-opara-6681649b/"
  },
  {
    name: "Keerthika Koteeswaran",
    photo: "Keerthika_Koteeswaran.jpeg",
    info: "Graduated in 2007",
    link: "https://www.linkedin.com/in/kkoteeswaran/"
  },
  {
    name: "Arun Ramani",
    photo: "Arun_Ramani.jpeg",
    info: "Graduated in 2007"
  },
  {
    name: "Andres Yanes",
    photo: "bio-photo.jpg",
    info: "Graduated in 2007"
  },
  {
    name: "Kallol Mahata",
    photo: "Kallol_Mahata.jpeg",
    info: "Graduated in 2007",
    link: "https://www.linkedin.com/in/kallolmahata/"
  },
  {
    name: "Daxa Patel",
    photo: "bio-photo.jpg",
    info: "Graduated in 2006"
  },
  {
    name: "Chinmay Jayaswal",
    photo: "Chinmay_Jayaswal.jpeg",
    info: "Graduated in 2006",
    link: "https://www.linkedin.com/in/chinmayjayaswal/"
  },
  {
    name: "Vidur Gupta",
    photo: "bio-photo.jpg",
    info: "Graduated in 2006",
    link: "https://www.linkedin.com/in/vidurg/"
  },
  {
    name: "Monica Hernandez",
    photo: "bio-photo.jpg",
    info: "Graduated in 2006",
    link: "https://www.linkedin.com/in/monicamhernandez/"
  },
  {
    name: "Gaurav Saini",
    photo: "Gaurav_Saini.jpeg",
    info: "Graduated in 2005",
    link: "https://www.linkedin.com/in/g-gauravsaini/"
  },
  {
    name: "Pichate Pluempatanakij",
    photo: "bio-photo.jpg",
    info: "Graduated in 2003"
  }
];

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Director */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex justify-center"
      >
        <Card className="bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-gray-900 dark:to-gray-950 border border-slate-200/60 dark:border-gray-800 shadow-lg rounded-2xl max-w-md">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center gap-6">
              <Image
                src={`/images/teampic/${director.photo}`}
                alt="Dr. Yu (Jeff) Lei photo"
                width={200}
                height={200}
                className="rounded-xl object-cover w-48 h-48 shadow-md"
                priority={true}
                loading="eager"
              />
              <div>
                <a
                  href={director.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-2 underline-offset-4 block mb-2"
                >
                  {director.name}
                </a>
                <p className="text-slate-600 dark:text-gray-300 text-lg">{director.info}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Current Members */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8">Current Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -5, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="bg-white/80 dark:bg-gray-800 border border-slate-200/60 dark:border-gray-700 shadow-lg hover:shadow-xl rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    {member.photo ? (
                      <Image
                        src={`/images/teampic/${member.photo}`}
                        alt={`${member.name} photo`}
                        width={120}
                        height={120}
                        className="rounded-full object-cover w-24 h-24 mx-auto mb-4 shadow-md"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rw="
                      />
                    ) : (
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-md">
                        <span className="text-gray-500 dark:text-gray-400 text-sm">No Photo</span>
                      </div>
                    )}
                    {member.link ? (
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-2 underline-offset-2 mb-2 block"
                      >
                        {member.name}
                      </a>
                    ) : (
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{member.name}</h3>
                    )}
                    <p className="text-slate-600 dark:text-gray-300 text-sm">{member.info}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Alumni */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8">Alumni</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {alumni.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800 border border-slate-200/60 dark:border-gray-700 shadow-lg hover:shadow-xl rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Image
                      src={`/images/teampic/${person.photo}`}
                      alt={`${person.name} photo`}
                      width={100}
                      height={100}
                      className="rounded-full object-cover w-20 h-20 mx-auto mb-3 shadow-md"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rw="
                    />
                    {person.link ? (
                      <a
                        href={person.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-2 underline-offset-2 mb-2 block"
                      >
                        {person.name}
                      </a>
                    ) : (
                      <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-2">{person.name}</h3>
                    )}
                    <p className="text-slate-600 dark:text-gray-300 text-xs leading-relaxed mb-2">{person.info}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 