import {
  Formats,
  MarkupTranslationValues,
  RichTranslationValues,
  TranslationValues,
} from "next-intl";
import { ReactNodeArray } from "prop-types";
import { ReactElement } from "react";
import * as yup from "yup";

export const ContactFormInitialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
export const ContactValidationFormSchema = (t: any) =>
  yup.object({
    email: yup
      .string()
      .email(t("contactSegment.contactForm.validations.email"))
      .required(
        t("contactSegment.contactForm.validations.required", {
          fieldName: "Email",
        }),
      ),

    name: yup
      .string()
      .required(
        t("contactSegment.contactForm.validations.required", {
          fieldName: "Name",
        }),
      )
      .min(
        3,
        t("contactSegment.contactForm.validations.minLength", { minLength: 3 }),
      )
      .max(
        120,
        t("contactSegment.contactForm.validations.maxLength", {
          maxLength: 100,
        }),
      ),
    phone: yup.string().required(
      t("contactSegment.contactForm.validations.required", {
        fieldName: "Phone",
      }),
    ),
    subject: yup
      .string()
      .min(
        3,
        t("contactSegment.contactForm.validations.minLength", { minLength: 3 }),
      )
      .max(
        120,
        t("contactSegment.contactForm.validations.maxLength", {
          maxLength: 120,
        }),
      )
      .required(
        t("contactSegment.contactForm.validations.required", {
          fieldName: "Subject",
        }),
      ),
    message: yup
      .string()
      .min(
        3,
        t("contactSegment.contactForm.validations.minLength", { minLength: 3 }),
      )
      .required(
        t("contactSegment.contactForm.validations.required", {
          fieldName: "Message",
        }),
      ),
  });
