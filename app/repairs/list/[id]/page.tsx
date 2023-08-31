import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";
import { format } from "date-fns";
import useDisplay from "@/app/hooks/useDisplay";
import { RepairDetailTable } from "@/app/components/repairs/repair-details-table.";
import { RepairContentsTable } from "@/app/components/repairs/repair-contents-table";

const RepairListById = async ({ params }: { params: { id: string } }) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { displayStatus } = useDisplay();
  const getRepair = async (id: string) => {
    const { data, error } = await supabase
      .from("repairs")
      .select(
        `*,
        factories(id,name),
        repair_contents(*),
        repair_details(*),
        profiles(*)
        `
      )
      .eq("id", id)
      .single();
    if (error) {
      console.log(error);
    }
    return data;
  };

  const repair = await getRepair(params.id);

  if (!repair) return;

  return (
    <div className="mx-auto p-6 shadow-sm bg-white rounded-md overflow-auto">
      <div className="flex justify-between">
        <div>{displayStatus(repair.status)}</div>
        <div className="flex justify-end">
          作成日
          <span className="ml-2">
            {format(new Date(repair.created_at), "yyyy-MM-dd")}
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between">
        <div className="mt-3">
          <div className="flex flex-col items-start lg:items-end">
            <div className="text-right">
              伝票No.<span>{repair.id}</span>
            </div>
            <div className="text-right">{repair.profiles?.username}</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex">
            <div>工場名</div>
            <span className="ml-2">{repair.factories?.name}</span>
          </div>
          <div className="flex">
            <div>顧客名</div>
            <span className="ml-2">{repair.customer}</span>
          </div>
          <div className="flex">
            <div>希望納期</div>
            <span className="ml-2">
              {repair?.deadline &&
                format(new Date(repair?.deadline), "yyyy-MM-dd")}
            </span>
          </div>
        </div>
      </div>

      <RepairDetailTable details={repair.repair_details} />
      <RepairContentsTable contents={repair.repair_contents}/>
    </div>
  );
};

export default RepairListById;
