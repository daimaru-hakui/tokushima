import { RepairsTemplateForm } from "@/app/components/repairs/templates/repairs-template-form";

const RepairTemplateNew = () => {
  const defaultValues = {
    id:"",
    factory: {
      id: "",
      name: ""
    },
    category: {
      id: "",
      name: ""
    },
    title: "",
    customer: "",
    price: 0,
    color: "",
    position: "",
    image_path: "",
    images:[],
    comment: "",
  };

  return (
    <div className="mx-auto p-6 w-full lg:min-w-full min-w-[800px] max-w-[900px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">
        テンプレート作成
      </div>
      <RepairsTemplateForm pageType="new" defaultValues={defaultValues} />
    </div>
  );
};

export default RepairTemplateNew;
