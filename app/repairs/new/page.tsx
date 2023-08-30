import { RepairForm } from "@/app/components/repairs/repairs-form";
import { Progress } from "@/app/components/utils/progress/progress";
import { RepairInputs } from "@/types";
import { NextPage } from "next";

const RepairNew: NextPage = async () => {
   
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
    <div className="mx-auto p-6 w-full lg:min-w-full min-w-[1200px] shadow-sm bg-white rounded-md">
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
