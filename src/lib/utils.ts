export const openURLExternally = (URL: string) => {
  window.open(
    URL,
    "_blank",
    "noopener,noreferrer"
  );
}