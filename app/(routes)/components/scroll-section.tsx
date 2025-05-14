import scrollToSection from "@/lib/scroll-to-section";

interface RefButtons {
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

interface RefProps {
  refs: RefButtons[];
}

const ScrollSection = (props: RefProps) => {
  const { refs } = props;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 bg-blue-900 text-slate-50 font-medium text-xl">
      {refs.map((ref, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(ref.ref)}
          className="cursor-pointer py-2 p-8 transition duration-300 ease-in-out border-slate-50 border-1 hover:bg-slate-50 hover:text-blue-900 hover:text-shadow-inherit"
        >
          {ref.title}
        </button>
      ))}
    </div>
  );
};

export default ScrollSection;
