import { RepairsTemplateCard } from "@/app/components/repairs/templates/repairs-template-card";
import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextPage } from "next";
import { Database } from "@/lib/database.types";

const RepairTemplates: NextPage = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: repair_templates, error } = await supabase.from("repair_templates").select(`
  *,
  factories(id,name),
  repair_categories(id,name)
`);

  return (
    <div className="mx-auto p-6 w-full lg:min-w-full min-w-[1200px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">
        テンプレート一覧
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-colos-5 gap-6 w-full">
        {repair_templates?.map((template) => (
          <RepairsTemplateCard key={template.id} repair_template={template} />
        ))}
      </div>
    </div>
  );
};

export default RepairTemplates;
