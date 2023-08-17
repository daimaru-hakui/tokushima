import { RepairsTemplateEdit } from "@/app/components/repairs/templates/repairs-template-edit";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import { FaRegEdit } from "react-icons/fa";
import { Database } from "@/lib/database.types";
import Image from "next/image";

const TemplateById = async ({ params }: { params: { slug: string; }; }) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const URL = process.env.url + "/storage/v1/object/public/repairs/";
  const { data: repair_template, error } = await supabase
    .from("repair_templates")
    .select(`*,repair_categories(id,name),factories(id,name)`)
    .eq("id", params.slug)
    .single();

  const styles = {
    container: "mt-6 flex flex-col md:flex-row gap-6 justify-between",
    title: "font-bold text-xs",
    value: "mt-2 ml-2 text-lg min-h-[30px]",
  };

  return (
    <div className="mx-auto p-6 w-full max-w-[1100px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200 flex items-center justify-between">
        <div>詳細</div>
        <div>
          <RepairsTemplateEdit repairTemplate={repair_template} />
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
            repair_template?.images.map((image: any) => (
              <div key={image.id} className="mt-3 w-full">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  className="shadow-md border border-1 border-gray-100 w-full"
                  src={image.url}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateById;
