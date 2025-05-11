import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface Faqs {
  question: string;
  answer: string;
}

interface FaqsProps {
  faqs: Faqs[];
}

const Faqs = (props: FaqsProps) => {
  const { faqs } = props;
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-4xl">Preguntas frecuentes</h2>
      <div className="mt-8 w-full">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem className="w-full" value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-500">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
