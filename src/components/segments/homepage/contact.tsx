"use client";
import { HR } from "flowbite-react";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function ContactHP() {
  const t = useTranslations("homepage");
  const validationSchema = yup.object({
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
      .email(t("contactSegment.contactForm.validations.name"))
      .required(
        t("contactSegment.contactForm.validations.required", {
          fieldName: "Name",
        }),
      ),
    phone: yup
      .string()
      .required(
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
      .min(
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
      .min(
        120,
        t("contactSegment.contactForm.validations.maxLength", {
          maxLength: 120,
        }),
      )
      .required(
        t("contactSegment.contactForm.validations.required", {
          fieldName: "Message",
        }),
      ),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
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

      <div className="flex flex-row items-center md:flex-row justify-between mt-14 gap-y-8r w-4xl">
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            variant="outlined"
            className="mt-2"
            label={t("contactSegment.contactForm.name")}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            variant="outlined"
            className="mt-2"
            label={t("contactSegment.contactForm.email")}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            id="phone"
            name="phone"
            variant="outlined"
            className="mt-2"
            label={t("contactSegment.contactForm.phone")}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && Boolean(errors.phone)}
            helperText={touched.phone && errors.phone}
          />
          <TextField
            fullWidth
            id="subject"
            name="subject"
            variant="outlined"
            className="mt-2"
            label={t("contactSegment.contactForm.subject")}
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.subject && Boolean(errors.subject)}
            helperText={touched.subject && errors.subject}
          />

          <TextField
            fullWidth
            id="message"
            name="message"
            variant="standard"
            className="mt-2"
            multiline
            maxRows={4}
            label={t("contactSegment.contactForm.message")}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.message && Boolean(errors.message)}
            helperText={touched.message && errors.message}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            className="mt-2"
          >
            {t("contactSegment.contactForm.submit")}
          </Button>
        </form>
      </div>
    </section>
  );
}
