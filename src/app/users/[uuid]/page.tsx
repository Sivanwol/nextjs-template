'use client'
import { Badge, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@app/components/ui/button";
import { useUserStore } from "@app/lib/state/providers/user-store-provider";
import { useMemo, useState } from "react";
import { useRouter } from 'next/navigation'
import useUserProfile from "@app/lib/hooks/useUserProfile";
export default function GetUser({ params }: { params: { uuid: string } }) {
    const router = useRouter();
    console.log('props', params.uuid);
    useUserProfile({ id: params.uuid });
    const [userProfileLoading, setUserProfileLoading] = useState(true);
    const [userProfileLoadingError, seUserProfileLoadingError] = useState(false);
    const { profile } = useUserStore((state) => state);
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
                </Card.Body>
            </Card>
        </div>
    );
}
