import { LOCALE } from "@/config";
import type { Component } from "solid-js";

export type Props = {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
};

const FormattedDatetime: Component<{ datetime: string | Date }> = ({
  datetime,
}) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = myDatetime.toLocaleTimeString(LOCALE, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {date}
      <span aria-hidden="true"> | </span>
      <span class="sr-only">&nbsp;at&nbsp;</span>
      {time}
    </>
  );
};

const Datetime: Component<Props> = ({ datetime, size = "sm", className }) => {
  return (
    <div class={`flex items-center space-x-2 opacity-80 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
        <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
      </svg>
      <span class="sr-only">Posted on:</span>
      <span class={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDatetime datetime={datetime} />
      </span>
    </div>
  );
};

export default Datetime;
