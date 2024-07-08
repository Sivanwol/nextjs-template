import { ProfileFormValues } from "@app/lib/forms/ProfileFormValues";
import { UserResponse } from "@app/lib/requests/user";
import { Badge, ListGroup } from "react-bootstrap";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export type ProfileInfoProp = {
  editMode: boolean;
  form: UseFormRegister<ProfileFormValues>;
  isValid: boolean;
  errors: FieldErrors<ProfileFormValues>;
  profile: UserResponse | null;
};
export default function ProfileInfo({ ...props }: ProfileInfoProp) {
  console.log("ProfileInfo", props);
  const { editMode, form, isValid, errors, profile } = props;
  return (
    <ListGroup>
      <ListGroup.Item>
        User name: <Badge bg="secondary">{profile?.username}</Badge>
      </ListGroup.Item>
      <ListGroup.Item>
        Title: <Badge bg="secondary">{profile?.title}</Badge>
      </ListGroup.Item>
      <ListGroup.Item>
        {editMode
          ? showEditField(
              form,
              errors,
              "fullName",
              "Full Name",
              profile?.fullName || "",
            )
          : showNormalMode("Full Name", profile?.fullName || "")}
      </ListGroup.Item>
      <ListGroup.Item>
        Email: <Badge bg="secondary">{profile?.email}</Badge>
      </ListGroup.Item>
      <ListGroup.Item>
        Country: <Badge bg="secondary">{profile?.country}</Badge>
      </ListGroup.Item>
      <ListGroup.Item>
        City: <Badge bg="secondary">{profile?.city}</Badge>
      </ListGroup.Item>
      <ListGroup.Item>
        Phone: <Badge bg="secondary">{profile?.phone}</Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}
function showNormalMode(fieldName: string, value: string) {
  return (
    <>
      {fieldName}: <Badge bg="secondary">{value}</Badge>
    </>
  );
}
function showEditField(
  form: UseFormRegister<ProfileFormValues>,
  errors: FieldErrors<ProfileFormValues>,
  fieldId: keyof ProfileFormValues,
  fieldName: string,
  value: string,
) {
  return (
    <>
      {fieldName}:{" "}
      <input
        {...form(fieldId, { required: `${fieldName} is required` })}
        placeholder={fieldName}
        aria-invalid={errors[fieldId] ? "true" : "false"}
      />
      {errors[fieldId] && <p role="alert">{errors[fieldId]!.message}</p>}
    </>
  );
}
