import type { CollectionEntry } from "astro:content";
import formatDate from "../utils/formatDate";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";

export type Props = {
  experience: CollectionEntry<"experience">;
};

export default function Experience(props: Props) {
  const { experience } = props;
  const { position, organization, location, date_beg, date_end } =
    experience.data;

  return (
    <div className="prose dark:prose-invert prose-sm max-w-none prose-headings:my-0 prose-li:my-0 prose-p:my-0 prose-ul:my-0 prose-h2:mt-4 prose-em:font-normal">
      <CardHeader>
        <CardTitle>
          {position}
          <span className="font-light text-muted-foreground">
            <span className="mx-2">|</span>
            {organization}
          </span>
        </CardTitle>
        <CardDescription>
          <em>
            {formatDate(date_beg)} -{" "}
            {date_end ? formatDate(date_end) : "present"}
            <span className="mx-2">|</span>
            {location}
          </em>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ReactMarkdown>{experience.body}</ReactMarkdown>
      </CardContent>
    </div>
  );
}
