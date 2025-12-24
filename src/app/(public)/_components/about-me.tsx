"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutMe() {
  const time_line = [
    {
      year: 2014,
      description:
        "O primeiro contato com programação foi com HTML e CSS basico, mesmo nem sabendo exatamente o que estava fazendo, só que tinha adorado criar um site meu.",
      content: (
        <Image
          src="/images/timeline/sites_html.png"
          alt="Sites Portfolio Gui"
          width={500}
          height={300}
          className="w-full pl-14"
        />
      ),
    },
    {
      year: 2017,
      description:
        "Iniciei a faculdade Ciência da Computação na UNIFESO, onde realmente conheci a programação, a logica com a linguagem C e as boas praticas para desenvolver um site.",
      content: (
        <Image
          src="/images/timeline/code-facul.png"
          alt="Sites Portfolio Gui"
          width={500}
          height={300}
          className="w-full px-14"
        />
      ),
    },
    {
      year: 2020,
      description:
        "A faculdade me abriu portas e me deu a oportunidade de ingressar no mercado de trabalho na área da programação, onde comecei como estagiário na empresa Noclaf.",
      content: (
        <Image
          src="/images/timeline/noclaf.png"
          alt="Sites Portfolio Gui"
          width={500}
          height={300}
          className="w-full pl-14"
        />
      ),
    },
    {
      year: 2021,
      description:
        "Me formei na faculdade e apresentei meu TCC, no qual desenvolvi um site de realidade aumentada utilizando Three.js para exibir modelos 3D.",
      content: (
        <Image
          src="/images/timeline/faculdade.png"
          alt="Sites Portfolio Gui"
          width={500}
          height={300}
          className="w-full pr-14"
        />
      ),
    },
    {
      year: 2024,
      description: `Iniciei meus estudos em Django para aprofundar meus conhecimentos em Back-End, desenvolvendo projetos pessoais como Full Stack e realizando trabalhos como freelancer.`,
      content: (
        <Image
          src="/images/timeline/code_back.png"
          alt="Sites Portfolio Gui"
          width={500}
          height={300}
          className="w-full pl-14"
        />
      ),
    },
    {
      year: new Date().getFullYear(),
      description: `Tenho mais de ${
        new Date().getFullYear() - 2020
      } anos de experiência na programação e já trabalhei com diversas tecnologias como Angular, React, Node.js, e outras.`,
    },
  ];

  return (
    <div className="w-full min-h-dvh py-4">
      <div className="max-w-4xl grid grid-cols-3 gap-8 gap-y-20 mx-auto">
        {time_line.map((item, index) => (
          <motion.div
            key={item.year + index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="contents"
          >
            {index % 2 === 1 && (
              <motion.div
                className="relative col-span-2 h-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.content}
              </motion.div>
            )}

            <motion.div
              className="my-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-slate-100">{item.year}</h2>
              <p className="text-kg mt-10 max-w-sm text-slate-300">
                {item.description}
              </p>
            </motion.div>

            {index % 2 === 0 && (
              <motion.div
                className="relative col-span-2 h-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.content}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
