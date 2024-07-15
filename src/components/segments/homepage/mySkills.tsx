"use client";

import cshrapImg from "@public/skills/csharp.png";
import angularImg from "@public/skills/angular.png";
import pythonImg from "@public/skills/python.png";
import phpImg from "@public/skills/php.png";
import nodeImg from "@public/skills/nodejs.png";
import reactImg from "@public/skills/react.png";
import nextjs from "@public/skills/nextjs.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { HR } from "flowbite-react";

export default function MySkillsHP() {
  const t = useTranslations("homepage");
  return (
    <>
      <section className="px-3 sm:px-10 py-5 ml-5 mr-5 sm:py-10 mx-auto text-center mt-5 w-fit">
        <span
          id="skills"
          style={{
            marginTop: "-130px",
            paddingBottom: "130px",
            display: "block",
            height: "0",
          }}
        >
          &nbsp;
        </span>
        <div className="flex justify-center">
          <HR.Text
            text={t("nextSegment")}
            className="w-full text-left md:text-center text-sm font-medium text"
          />
        </div>
        <div className="flex flex-row items-center md:flex-row justify-between mt-5 gap-y-8r w-4xl">
          <article className="grid grid-cols-3 grid-rows-2 gap-6 w-full">
            <div className="soft-shadow-slate h-[150] w-[170] place-content-center">
              <div className="flex justify-center">
                <Image
                  src={cshrapImg}
                  alt={t("skills.csharp")}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="soft-shadow-slate h-[150] w-[170] place-content-center">
              <div className="flex justify-center">
                <Image
                  src={angularImg}
                  alt={t("skills.angular")}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="soft-shadow-slate h-[150] w-[170] place-content-center">
              <div className="flex justify-center">
                <Image
                  src={pythonImg}
                  alt={t("skills.python")}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="soft-shadow-slate h-[150] w-[170] place-content-center">
              <div className="flex justify-center">
                <Image src={nodeImg} alt={t("skills.node")} objectFit="cover" />
              </div>
            </div>
            <div className="soft-shadow-slate h-[150] w-[170] place-content-center">
              <div className="flex justify-center">
                <Image src={phpImg} alt={t("skills.php")} objectFit="cover" />
              </div>
            </div>
            <div className="soft-shadow-slate h-[150] w-[170] place-content-center">
              <div className="flex justify-center">
                <Image
                  src={reactImg}
                  alt={t("skills.react")}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="soft-shadow-slate h-[150] w-[170] place-content-center">
              <div className="flex justify-center">
                <Image
                  src={nextjs}
                  alt={t("skills.nextjs")}
                  objectFit="cover"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
