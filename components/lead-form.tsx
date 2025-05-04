import { FormController } from "@/utils/form-controller";

const LeadForm = () => {
  return (
    <div className="flex flex-col p-8 items-center sm:mx-40 sm:px-20 sm:py-18 rounded-lg shadow-lg bg-gray-900 text-slate-50">
      <h2 className="text-2xl font-semibold mb-8">Formulario de Contacto</h2>
      <FormController />
    </div>
  );
};

export default LeadForm;
