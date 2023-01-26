export default function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    timeZone: "UTC",
    month: "short",
    year: "numeric",
  });
}
