import { Button } from "./ui/button"

export type UserTableActionItemProp = {
    id: string
    onSave: (id: string) => void,
}

export default function UserTableActionItem({ ...props }: UserTableActionItemProp) {
    return (
        <div>
            <Button onClick={() => props.onSave(props.id)}>Save</Button>
        </div>
    )
}