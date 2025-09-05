export default function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  type Unit = {
    max: number;
    value: number;
    name: Intl.RelativeTimeFormatUnit;
  };

  const units: Unit[] = [
    { max: 60, value: 1, name: "second" },
    { max: 3600, value: 60, name: "minute" },
    { max: 86400, value: 3600, name: "hour" },
    { max: 2592000, value: 86400, name: "day" },
    { max: 31536000, value: 2592000, name: "month" },
    { max: Infinity, value: 31536000, name: "year" },
  ];

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  for (const unit of units) {
    if (diffInSeconds < unit.max) {
      const value = Math.floor(diffInSeconds / unit.value);
      return rtf.format(-value, unit.name);
    }
  }

  return "";
}
