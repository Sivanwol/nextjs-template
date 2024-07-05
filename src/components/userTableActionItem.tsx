import { Button } from "./ui/button";
export type UserTableActionItemProp = {
  id: string;
  onSave?: (id: string) => void;
  onDelete?: (id: string) => void;
};

export default function UserTableActionItem({
  ...props
}: UserTableActionItemProp) {
  console.log("UserTableActionItem", props);
  return (
    <div>
      {props.onSave && (
        <Button onClick={() => props.onSave!(props.id)}>Save</Button>
      )}
      {props.onDelete && (
        <Button onClick={() => props.onDelete!(props.id)}>Delete</Button>
      )}
    </div>
  );
}
