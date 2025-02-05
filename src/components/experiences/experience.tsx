import formatDate from "@/lib/format-date";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { DateTime, Duration } from "luxon";
import type { Experience as IExperience } from "./types";

const Experience: React.FC<{ experience: IExperience }> = ({ experience }) => {
  const { position, organization, location, date_beg, date_end } = experience;

  const date_beg_lux = DateTime.fromISO(date_beg);
  const date_end_lux = date_end ? DateTime.fromISO(date_end) : DateTime.now();
  const duration = date_end_lux.diff(date_beg_lux, ["months", "days"]);

  let months = duration.months;
  let days = duration.days;

  if (days >= 15) {
    months += 1;
  }

  const roundedDuration = Duration.fromObject({ months: Math.round(months) });

  return (
    <div className="prose dark:prose-invert prose-sm max-w-none prose-headings:my-0 prose-li:my-1.5 prose-p:my-0 prose-ul:my-0 prose-h2:mt-4 prose-em:font-normal">
      <CardHeader className="pb-2">
        <CardTitle>
          <span className="font-bold">{position}</span>
          <span className="block font-light mt-1 md:inline md:mt-0">
            <span className="mr-2 hidden md:inline">,</span>
            {organization}
          </span>
        </CardTitle>
        <CardDescription className="flex gap-2">
          {formatDate(date_beg)} - {date_end ? formatDate(date_end) : "present"}
          <span>({roundedDuration.rescale().toHuman()})</span>
          {location && (
            <>
              <span>|</span>
              <span>{location}</span>
            </>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ReactMarkdown>{experience.markup}</ReactMarkdown>
      </CardContent>
    </div>
  );
};

export default Experience;
