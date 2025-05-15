export default function scrollToSection(
  ref: React.RefObject<HTMLElement | null>
) {
  if (!ref.current) {
    throw new Error("No se pudo encontrar la sección solicitada.");
  }
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
}
