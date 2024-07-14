"use client";
import { HR } from "flowbite-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CodeBlock, paraisoLight } from "react-code-blocks";
import frontFlowImg from "@public/front-flow.jpg";
export default function AboutMeHP() {
  const t = useTranslations("homepage");
  const codeTextTitle = t("codeTextTitle");
  const codeTextWhatIAmOffering = t("codeTextWhatIAmOffering");
  const codeTextWhatMyServices = t("codeTextWhatMyServices");
  const codeText = `<hello>\n\r${codeTextTitle}\n\r</hello>\n\r\n\r<about>\n\r${codeTextWhatIAmOffering}\n\r</about>\n\r\n\r<services>\n\r${codeTextWhatMyServices}\n\r</services>`;
  return (
    <>
      <section className="border-2 border-appRed-500 px-3 sm:px-10 py-5 sm:py-10 mx-auto text-center mt-5 max-w-6xl">
        <span
          id="intro"
          style={{
            marginTop: "-130px",
            paddingBottom: "130px",
            display: "block",
            height: "0",
          }}
        >
          &nbsp;
        </span>
        <div className="flex flex-col items-center md:flex-row justify-between mt-14 gap-y-8r">
          <article className="flex flex-col items-center w-full">
            <div className="relative h-250">
              <Image src={frontFlowImg} alt="Front Flow" objectFit="cover" />
              <HR.Text text={t("spacerTxt")} />
            </div>

            <div className="relative h-250">
              <CodeBlock
                text={codeText}
                showLineNumbers
                wrapLongLines={true}
                language="html"
                customStyle={{
                  borderRadius: "5px",
                  boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                  fontSize: "1rem",
                }}
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
