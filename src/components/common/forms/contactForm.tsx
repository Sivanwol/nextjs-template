"use client";

import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ButtonGroup } from "@mui/material";

import {
  ContactFormInitialValues,
  ContactFormValues,
  ContactValidationFormSchema,
} from "./schemas/contactValidationForm";
import { useFormState, useFormStatus } from "react-dom";
import { sentEmail } from "@app/lib/server/actions/mail";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("homepage");
  const { pending } = useFormStatus();
  const [requestSent, setRequestSent] = useState(false);
  const [state, formAction] = useFormState(sentEmail, ContactFormInitialValues);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: ContactFormInitialValues,
    validationSchema: ContactValidationFormSchema(t),
    onSubmit: (values) => {
      setRequestSent(true);
      const formData: FormData = new FormData();
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, value);
      }
      formAction(formData);
    },
  });
  return (
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
        variant="outlined"
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
      {state?.message && requestSent ? (
        <Alert
          color="failure"
          icon={HiInformationCircle}
          className="transition-opacity ease-in duration-700 opacity-100 mt-3 mb-3"
        >
          <span className="font-medium pr-3">Sent Failed!</span>
          {state?.message}
        </Alert>
      ) : null}

      {!state?.message && requestSent ? (
        <Alert
          color="success"
          icon={HiInformationCircle}
          className="transition-opacity ease-in duration-700 opacity-100 mt-3 mb-3"
        >
          <span className="font-medium pr-3">Sent Received!</span>
          You'r contact request been sent
        </Alert>
      ) : null}

      <div className="mt-4 flex flex-col content-end">
        <ButtonGroup size="large" aria-label="Large button group">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={pending}
            className="soft-shadow-blue hover:soft-shadow-blue w-[150px] mx-auto"
          >
            {t("contactSegment.contactForm.submit")}
          </Button>

          <Button
            color="error"
            variant="contained"
            type="reset"
            disabled={pending}
            onClick={() => {
              resetForm();
              setRequestSent(false);
            }}
            className="soft-shadow-red hover:soft-shadow-red w-[150px] mx-auto"
          >
            {t("contactSegment.contactForm.reset")}
          </Button>
        </ButtonGroup>
      </div>
    </form>
  );
}
