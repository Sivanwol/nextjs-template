"use client";

import { HR } from "flowbite-react";
import { useTranslations } from "next-intl";
import ContactForm from "@app/components/common/forms/contactForm";
import { sentEmail } from "@app/lib/server/actions/mail";
import { ContactFormInitialValues } from "@app/components/common/forms/schemas/contactValidationForm";
import { useFormState } from "react-dom";

export default function ContactHP() {
  const t = useTranslations("homepage");

  return (
    <section className="border-2 border-appRed-500 px-3 sm:px-10 py-5 ml-5 mr-5 sm:py-10 mx-auto text-center mt-5 w-fit">
      <span
        id="contact"
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
          text={t("contactSegment.nextSegment")}
          className="w-full text-left md:text-center text-sm font-medium text"
        />
      </div>

      <div className="flex flex-row items-center md:flex-row justify-between mt-4 gap-y-8r w-4xl">
        <ContactForm />
      </div>
    </section>
  );
}
