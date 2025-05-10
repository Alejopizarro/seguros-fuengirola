import scrollToSection from "./scroll-to-section";

export function handleScroll(ref: React.RefObject<HTMLElement>): () => void {
  return () => {
    try {
      scrollToSection(ref);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Error desconocido al intentar desplazarse a la sección.");
      }
    }
  };
}
