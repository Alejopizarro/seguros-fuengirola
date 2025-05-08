import { FormController } from "@/utils/form-controller";

const LeadForm = () => {
  return (
    <div className="flex flex-col p-8 relative z-10 items-center sm:mr-14 rounded-lg shadow-lg bg-blue-900 text-slate-50">
      <h2 className="text-2xl font-semibold mb-8">Formulario de Contacto</h2>
      <FormController />
    </div>
  );
};

export default LeadForm;
