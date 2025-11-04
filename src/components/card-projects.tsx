"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Project } from "@/types/projects";
import Image from "next/image";
import { ChipSkill } from "./chip-skill";

export function CardProjects({ project }: { project: Project }) {
  return (
    <CardContainer className="w-full h-full inter-var">
      <CardBody className="h-full bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] rounded-xl p-6 border  ">
        <figure
          className="p-4 rounded-xl"
          style={{ backgroundColor: project.color_effect }}
        >
          <CardItem translateZ="100" className="w-full">
            <Image
              src={project.picture}
              width={468}
              height={294}
              alt={project.title}
              className="w-full"
            />
          </CardItem>
        </figure>

        <CardItem
          translateZ="60"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
          {project.title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="50"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {project.description}
        </CardItem>

        <div className="flex items-center gap-2 mt-4">
          {project.skills.map((skill) => {
            return (
              <CardItem
                key={skill.name}
                as="p"
                translateZ="40"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                <ChipSkill text={skill.name} logo={skill.logo} />
              </CardItem>
            );
          })}
        </div>

        <div className="flex justify-between items-center mt-20">
          {/* <CardItem
            data-cursor="pointer"
            translateZ={20}
            as="a"
            href={project.link_github}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            GitHub →
          </CardItem>
          <CardItem
            data-cursor="pointer"
            translateZ={20}
            as="button"
            href={project.link_demo}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Demo
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
  );
}
