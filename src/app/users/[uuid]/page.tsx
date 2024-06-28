"use client";
import { Badge, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@app/components/ui/button";
import { useUserStore } from "@app/lib/state/providers/user-store-provider";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import useUserProfile from "@app/lib/hooks/useUserProfile";
import { useForm, useFormState } from "react-hook-form";
import axios from "axios";
import { ProfileFormValues } from "@app/lib/forms/ProfileFormValues";
import ProfileInfo from "@app/components/ProfileInfo";
export default function GetUser({ params }: { params: { uuid: string } }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ProfileFormValues>();
  const [editMode, setEditMode] = useState(false);
  console.log("props", params.uuid);
  console.log("editMode", editMode);
  useUserProfile({ id: params.uuid });
  const { profile } = useUserStore((state) => state);
  const onUpdate = async (data: any) => {
    const uuid = profile?.externalId;
    const sentObj = {
      title: profile?.title,
      name: data?.fullName,
    };
    console.log("update", uuid);

    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${params.uuid}`, sentObj
    );
    if (res.status === 200) {
      alert("updated successfully!");
      window.location.reload();
    }
  };
  return (
    <div className="p-2 flex items-center">
      <form onSubmit={handleSubmit(onUpdate)}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={profile?.thumbnail || ""} />
          <Card.Body>
            <Card.Title>Welcome {profile?.fullName}</Card.Title>
            <Card.Text>
              <ProfileInfo
                editMode={editMode}
                form={register}
                isValid={isValid}
                errors={errors}
                profile={profile}
              />
              <Button type="submit" disabled={!editMode} variant="secondary">
                Save
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setEditMode(!editMode);
                }}
                variant="secondary"
              >
                {editMode ? "Cancel Edit" : "Enter Edit"}
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </form>
    </div>
  );
}
