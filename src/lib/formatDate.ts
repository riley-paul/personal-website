export default function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    timeZone: "UTC",
    month: "short",
    year: "numeric",
  });
}
