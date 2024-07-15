"use client";
import { HR } from "flowbite-react";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ButtonGroup } from "@mui/material";

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
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
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

      <div className="flex flex-row items-center md:flex-row justify-between mt-4 gap-y-8r w-4xl">
        <form onSubmit={handleSubmit}>
          <h2 className="text-sm font-medium text-appRed-500">
            {t("contactSegment.title")}
          </h2>
          <p className="text-sm font-medium text-gray-500">
            {t("contactSegment.extraText")}
          </p>
          <TextField
            fullWidth
            id="name"
            name="name"
            variant="outlined"
            className="mt-2"
            placeholder={t("contactSegment.contactForm.placeHolder.name")}
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
            placeholder={t("contactSegment.contactForm.placeHolder.email")}
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
            placeholder={t("contactSegment.contactForm.placeHolder.phone")}
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
            placeholder={t("contactSegment.contactForm.placeHolder.subject")}
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
            variant="filled"
            placeholder={t("contactSegment.contactForm.placeHolder.message")}
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
          <div className="mt-3 flex flex-col content-end">
            <ButtonGroup size="large" aria-label="Large button group">
              <Button
                color="primary"
                variant="contained"
                type="submit"
                className="soft-shadow-blue hover:soft-shadow-blue w-[150px] mx-auto"
              >
                {t("contactSegment.contactForm.submit")}
              </Button>

              <Button
                color="error"
                variant="contained"
                type="reset"
                onClick={() => resetForm()}
                className="soft-shadow-red hover:soft-shadow-red w-[150px] mx-auto"
              >
                {t("contactSegment.contactForm.reset")}
              </Button>
            </ButtonGroup>
          </div>
        </form>
      </div>
    </section>
  );
}
