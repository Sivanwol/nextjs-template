"use client";

import cshrapImg from "@public/skills/csharp.png";
import angularImg from "@public/skills/angular.png";
import pythonImg from "@public/skills/python.png";
import phpImg from "@public/skills/php.png";
import nodeImg from "@public/skills/nodejs.png";
import reactImg from "@public/skills/react.png";
import nextjsImg from "@public/skills/nextjs.png";
import dockerImg from "@public/skills/docker.png";
import awsImg from "@public/skills/aws.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { HR, Tooltip } from "flowbite-react";

export default function MySkillsHP() {
  const t = useTranslations("homepage");
  return (
    <>
      <section className="px-3 sm:px-10 py-5 ml-5 mr-5 sm:py-10 mx-auto text-center mt-5 w-fit">
        <span
          id="skills"
          style={{
            marginTop: "-10px",
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
          <article className="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-6 w-full">
            <Tooltip
              content={t("skillsSegment.csharp")}
              placement="bottom"
              animation="duration-1000"
              style="light"
            >
              <div className="soft-shadow-slate h-[150] w-[170] hover:soft-shadow-red place-content-center">
                <div className="flex justify-center">
                  <Image src={cshrapImg} alt={t("skillsSegment.csharp")} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              content={t("skillsSegment.angular")}
              placement="bottom"
              animation="duration-1000"
              style="light"
            >
              <div className="soft-shadow-slate h-[150] w-[170] hover:soft-shadow-red place-content-center">
                <div className="flex justify-center">
                  <Image src={angularImg} alt={t("skillsSegment.angular")} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              content={t("skillsSegment.python")}
              placement="bottom"
              animation="duration-1000"
              style="light"
            >
              <div className="soft-shadow-slate h-[150] w-[170] hover:soft-shadow-red place-content-center">
                <div className="flex justify-center">
                  <Image src={pythonImg} alt={t("skillsSegment.python")} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              content={t("skillsSegment.node")}
              placement="bottom"
              animation="duration-1000"
              style="light"
            >
              <div className="soft-shadow-slate h-[150] w-[170] hover:soft-shadow-red place-content-center">
                <div className="flex justify-center">
                  <Image src={nodeImg} alt={t("skillsSegment.node")} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              content={t("skillsSegment.php")}
              placement="bottom"
              animation="duration-1000"
              style="light"
            >
              <div className="soft-shadow-slate h-[150] w-[170] hover:soft-shadow-red place-content-center">
                <div className="flex justify-center">
                  <Image src={phpImg} alt={t("skillsSegment.php")} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              content={t("skillsSegment.react")}
              placement="bottom"
              animation="duration-1000"
              style="light"
            >
              <div className="soft-shadow-slate h-[150] w-[170] hover:soft-shadow-red place-content-center">
                <div className="flex justify-center">
                  <Image src={reactImg} alt={t("skillsSegment.react")} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              content={t("skillsSegment.csharp")}
              placement="bottom"
              animation="duration-1000"
              style="light"
            >
              <div className="soft-shadow-slate h-[150] w-[170] hover:soft-shadow-red hover:soft-shadow-red place-content-center">
                <div className="flex justify-center">
                  <Image src={nextjsImg} alt={t("skillsSegment.nextjs")} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              content={t("skillsSegment.aws")}
              placement="bottom"
              animation="duration-1000"
              style="light"
            >
              <div className="soft-shadow-slate h-[150] w-[170] hover:soft-shadow-red place-content-center">
                <div className="flex justify-center">
                  <Image src={awsImg} alt={t("skillsSegment.aws")} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              content={t("skillsSegment.docker")}
              placement="bottom"
              animation="duration-1000"
              style="light"
            >
              <div className="soft-shadow-slate h-[150] w-[170] hover:soft-shadow-red place-content-center">
                <div className="flex justify-center ">
                  <Image src={dockerImg} alt={t("skillsSegment.docker")} />
                </div>
              </div>
            </Tooltip>
          </article>
        </div>
      </section>
    </>
  );
}
