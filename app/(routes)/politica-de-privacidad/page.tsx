"use client";
import { Button } from "@/components/ui/button";
import { privacyPolicy } from "./data";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

const Page = () => {
  const router = useRouter();
  return (
    <div className="max-w-6xl space-y-8 mx-auto p-8 pt-24 text-gray-900">
      <Button
        onClick={() => router.push("/")}
        className="flex items-center gap-x-2"
      >
        <MoveLeft /> Volver a la home
      </Button>
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p className="text-sm text-gray-500 mb-10">
        Última actualización: {privacyPolicy.lastUpdated}
      </p>

      {privacyPolicy.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          {section.content.split("\n").map((line, i) => (
            <p key={i} className="mb-2 whitespace-pre-line">
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page;
