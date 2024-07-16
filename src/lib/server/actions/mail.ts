"use server";
import { getTranslations } from "next-intl/server";
import {
  ContactFormValues,
  ContactValidationFormSchema,
} from "@app/components/common/forms/schemas/contactValidationForm";

export async function sentEmail(prevState: any, formData: FormData) {
  const values: ContactFormValues = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };
  console.log("Received contact form values:", values);
  const t = await getTranslations("homepage");
  const validation = ContactValidationFormSchema(t).isValidSync(values);
  if (validation) {
    console.error("Validation errors:", validation);
    return { message: t("contactSegment.contactForm.validations.error") };
  }
  // Send email logic here
  console.log("Email sent successfully", values);
}
