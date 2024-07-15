"use client";
import { HR } from "flowbite-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CodeBlock, dracula } from "react-code-blocks";
import frontFlowImg from "@public/front-flow.jpg";
export default function AboutMeHP() {
  const t = useTranslations("homepage");
  const codeTextTitle = t("codeTextTitle");
  const codeTextWhatIAmOffering = t("codeTextWhatIAmOffering");
  const codeTextWhatMyServices = t("codeTextWhatMyServices");
  const codeText = `<hello>\n\r${codeTextTitle}\n\r</hello>\n\r\n\r<about>\n\r${codeTextWhatIAmOffering}\n\r</about>\n\r\n\r<services>\n\r${codeTextWhatMyServices}\n\r</services>`;
  return (
    <>
      <section className="border-2 border-appRed-500 px-3 sm:px-10 py-5 ml-5 mr-5 sm:py-10 mx-auto text-center mt-5 w-fit">
        <span
          id="intro"
          style={{
            marginTop: "-10px",
            display: "block",
            height: "0",
          }}
        >
          &nbsp;
        </span>
        <div className="flex flex-row items-center md:flex-row justify-between mt-14 gap-y-8r w-4xl">
          <article className="grid grid-cols-2 gap-4 w-full">
            <div className="h-250 col-span-2 lg:col-span-1 justify-self-center  soft-shadow-red">
              <Image src={frontFlowImg} alt="Front Flow" objectFit="cover" />
            </div>

            <div className="h-250 col-span-2 lg:col-span-1 justify-self-center w-full soft-shadow-gray">
              <CodeBlock
                text={codeText}
                showLineNumbers
                theme={dracula}
                wrapLongLines={true}
                language="html"
                customStyle={{
                  borderRadius: "5px",
                  boxShadow: "1px 2px 3px rgba(0,0,0,0.55)",
                  fontSize: "1.25rem",
                  color: "#212121",
                }}
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
