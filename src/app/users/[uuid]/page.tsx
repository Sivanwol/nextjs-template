import { Badge, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@app/components/ui/button";
import { useUserStore } from "@app/lib/state/providers/user-store-provider";
import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import useUserProfile from "@app/lib/hooks/useUserProfile";
export type GetUserProps = {
    id: string;
};
export default function GetUser({ ...props }: GetUserProps) {
    useUserProfile({ id: props.id });
    const router = useRouter();
    const [userProfileLoading, setUserProfileLoading] = useState(true);
    const [userProfileLoadingError, seUserProfileLoadingError] = useState(false);
    const { profile } = useUserStore((state) => state);
    useMemo(() => {
        if (
            profile === null ||
            userProfileLoadingError ||
            profile.externalId !== props.id
        ) {
            router.replace(`/users`);
        }
        setUserProfileLoading(true);
    }, [
        profile,
        props.id,
        router,
        setUserProfileLoading,
        userProfileLoadingError,
    ]);
    return (
        <div className="p-2">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={profile?.thumbnail || ""} />
                <Card.Body>
                    <Card.Title>Welcome {profile?.fullName}</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            <ListGroup.Item>
                                User name: <Badge bg="secondary">{profile?.username}</Badge>
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
                    </Card.Text>
                    <Button>Go somewhere</Button>
                    <Button variant="secondary">Back for User list</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
