"use client";

import { useTranslations } from "next-intl";
import { HR } from "flowbite-react";
import dynamic from "next/dynamic";

const GameWrapper = dynamic(
  () => import("@app/components/common/game/GameWrapper"),
  {
    ssr: false,
  },
);

export default function SkillsMap() {
  const t = useTranslations("miniGame");
  return (
    <>
      <section className="px-3 sm:px-10 py-5 ml-5 mr-5 sm:py-10 mx-auto text-center mt-5 w-fit">
        <span
          id="minigame"
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
            className="w-full text-left md:text-center text-md font-bold text"
          />
        </div>
        <div className="flex flex-row items-center md:flex-row justify-between mt-5 gap-y-8r w-4xl">
          <GameWrapper startScene={"BootScene"} config={"skillmap"} />
        </div>
      </section>
    </>
  );
}
