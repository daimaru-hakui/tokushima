import { RepairsTemplateEdit } from "@/app/components/repairs/templates/repairs-template-edit";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";
import { RepairTemplate } from "@/types";
import { RepairsTemplatePathPreview } from "@/app/components/repairs/templates/repairs-template-path-preview";


const TemplateById = async ({ params }: { params: { id: string } }) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  
  const getTemplates = async (id: string) => {
    const { data, error } = await supabase
      .from("repair_templates")
      .select(`*,repair_categories(id,name),factories(id,name)`)
      .eq("id", id)
      .single();
    return data;
  };
  
  const repair_template = await getTemplates(params.id);
  
  const defaultValues: RepairTemplate = {
    id: repair_template?.id,
    factory: {
      id: repair_template?.factories?.id,
      name: repair_template?.factories?.name,
    },
    category: {
      id: repair_template?.repair_categories?.id,
      name: repair_template?.repair_categories?.name,
    },
    title: repair_template?.title,
    customer: repair_template?.customer,
    price: repair_template?.price,
    color: repair_template?.color,
    position: repair_template?.position,
    image_path: "",
    images: repair_template?.images || [],
    comment: repair_template?.comment,
  };

  const styles = {
    container: "mt-6 flex flex-col md:flex-row gap-6 justify-between",
    title: "font-bold text-xs",
    value: "mt-2 ml-2 text-lg min-h-[30px]",
  };

  return (
    <div className="mx-auto p-6 w-full lg:min-w-full min-w-[1200px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200 flex items-center justify-between">
        <div>詳細</div>
        <div>
          <RepairsTemplateEdit repairTemplate={defaultValues} />
        </div>
      </div>
      <div className={styles.container}>
        <div className="w-full ">
          <div className={styles.title}>工場名</div>
          <div className={styles.value}>
            {repair_template?.factories && repair_template?.factories.name}
          </div>
        </div>
        <div className="w-full ">
          <div className={styles.title}>カテゴリー</div>
          <div className={styles.value}>
            {repair_template?.repair_categories &&
              repair_template?.repair_categories.name}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className="w-full">
          <div className={styles.title}>顧客名</div>
          <div className={styles.value}>{repair_template?.customer}</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className="w-full">
          <div className={styles.title}>修理名</div>
          <div className={styles.value}>{repair_template?.title}</div>
        </div>
        <div className="w-full">
          <div className={styles.title}>単価</div>
          <div className={styles.value}>{repair_template?.price}円</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className="w-full">
          <div className={styles.title}>色</div>
          <div className={styles.value}>{repair_template?.color}</div>
        </div>
        <div className="w-full">
          <div className={styles.title}>位置</div>
          <div className={styles.value}>{repair_template?.position}</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className="w-full">
          <div className={styles.title}>コメント</div>
          <div className={styles.value}>{repair_template?.comment}</div>
        </div>
      </div>
      <div className="w-full mt-6">
        <div className="w-full">
          <div className={styles.title}>仕様書</div>
        </div>
        <div className="mt-3 w-full flex gap-3">
          {repair_template?.images &&
            repair_template?.images?.map((image:string) => (
              <RepairsTemplatePathPreview
                key={image}
                file={image}
                closeButon={false}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateById;
