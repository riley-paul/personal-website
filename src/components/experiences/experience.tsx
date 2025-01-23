import type { CollectionEntry } from "astro:content";
import formatDate from "../../lib/format-date";

import ReactMarkdown from "react-markdown";
import { DateTime, Duration } from "luxon";
import { Separator, Text } from "@radix-ui/themes";
import type { Experience as ExperienceType } from "./types";

export type Props = {
  experience: CollectionEntry<"experience">;
};

const Experience: React.FC<{ experience: ExperienceType }> = ({
  experience,
}) => {
  const { position, organization, location, date_beg, date_end } = experience;

  const date_beg_lux = DateTime.fromISO(date_beg);
  const date_end_lux = date_end ? DateTime.fromISO(date_end) : DateTime.now();
  const duration = date_end_lux.diff(date_beg_lux, ["months", "days"]);

  let months = duration.months;
  let days = duration.days;

  if (days >= 15) {
    months += 1;
  }

  const durationText = Duration.fromObject({ months: Math.round(months) })
    .rescale()
    .toHuman();
  const timeframeText = `${formatDate(date_beg)} - ${date_end ? formatDate(date_end) : "present"}`;

  return (
    <div className="prose dark:prose-invert prose-sm max-w-none prose-headings:my-0 prose-li:my-1.5 prose-p:my-0 prose-ul:my-0 prose-h2:mt-4 prose-em:font-regular">
      <header className="pb-2">
        <h3>
          <span className="font-bold">{position}</span>
          <span className="block font-light mt-1 md:inline md:mt-0">
            <span className="mr-2 hidden md:inline">,</span>
            {organization}
          </span>
        </h3>
        <p className="flex items-center gap-2 text-gray-10">
          <span>{timeframeText}</span>
          <span>({durationText})</span>
          {location && (
            <>
              <Separator orientation="vertical" />
              <span>{location}</span>
            </>
          )}
        </p>
      </header>
      <ReactMarkdown>{experience.markup}</ReactMarkdown>
    </div>
  );
};

export default Experience;
