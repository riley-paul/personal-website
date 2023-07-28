import { Badge } from "./ui/badge";
interface Props {
  tags: string[];
}

export default function TagList(props: Props) {
  const { tags } = props;
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge>{tag}</Badge>
      ))}
    </div>
  );
}
