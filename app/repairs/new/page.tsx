import { RepairForm } from "@/app/components/repairs/repairs-form";
import { Progress } from "@/app/components/utils/progress/progress";
import { RepairInputs } from "@/types";
import { Database } from "@/database.types";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextPage } from "next";

const RepairNew: NextPage = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  
 
  const defaultValues: RepairInputs = {
    factory: {
      id: "",
      name: "",
    },
    delivery: {
      id: "",
      name: "",
    },
    deadline: "",
    customer: "",
    status: "PICKING",

    repair_details: [
      {
        maker: "",
        productName: "",
        size: "",
        quantity: 0,
        comment: "",
      },
    ],
    repair_contents: [],
  };

  return (
    <div className="mx-auto p-6 w-full max-w-[1100px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">
        修理伝票作成
      </div>
      <Progress
        progressNumber={1}
        progressArray={["発注", "確認", "完了"]}
        className="my-6"
      />
      <RepairForm defaultValues={defaultValues}/>
    </div>
  );
};

export default RepairNew;
