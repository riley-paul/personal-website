import formatDate from "@/lib/format-date";

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
    <div className="text-left">
      <header>
        <h3 className="grid text-xl font-semibold md:flex">
          <span className="font-bold tracking-tight">{position}</span>
          <span className="block font-light">
            <span className="mr-2 hidden md:inline">,</span>
            {organization}
          </span>
        </h3>
        <p className="flex gap-2 text-sm opacity-70">
          {formatDate(date_beg)} - {date_end ? formatDate(date_end) : "present"}
          <span>({roundedDuration.rescale().toHuman()})</span>
          {location && (
            <>
              <span>|</span>
              <span>{location}</span>
            </>
          )}
        </p>
      </header>
      <section className="prose dark:prose-invert prose-sm max-w-none">
        <ReactMarkdown>{experience.markup}</ReactMarkdown>
      </section>
    </div>
  );
};

export default Experience;
