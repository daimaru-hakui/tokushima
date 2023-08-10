import { RepairsTemplateEdit } from "@/app/components/repairs/templates/repairs-template-edit";
import React from "react";
import {FaRegEdit} from "react-icons/fa"

const TemplateById = ({ params }: { params: { slug: number } }) => {
  const templates = [
    {
      id: 0,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      category: {
        id: 1,
        name: "股下修理",
      },
      customer: "マ・マーマカロニ宇都宮工場",
      status: "PICKING",
      title: "襟テーピースナッパー付け",
      price: 180,
      color: "赤",
      position: "左胸",
      images: [{ path: "/images/20230731.png" }],
      comment: "",
    },
    {
      id: 1,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      category: {
        id: 1,
        name: "股下修理",
      },
      customer: "共同リネンサプライ",
      status: "PICKING",
      title: "裾上げ",
      price: 320,
      color: "",
      position: "",
      images: [{ path: "/images/20230731.png" }],
      comment: "",
    },
    {
      id: 2,
      factory: {
        id: 1,
        name: "大野制帽所",
      },
      category: {
        id: 1,
        name: "股下修理",
      },
      customer: "阪急デリカアイ",
      status: "PICKING",
      title: "線付け",
      price: 150,
      color: "",
      position: "",
      images: [{ path: "/images/20230731.png" }],
      comment: "",
    },
    {
      id: 3,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      category: {
        id: 1,
        name: "股下修理",
      },
      customer: "共同リネンサプライ",
      status: "PICKING",
      title: "裾上げ",
      price: 320,
      color: "",
      position: "",
      images: [{ path: "/images/20230731.png" }],
      comment: "",
    },
  ];
  const data = templates[params?.slug];

  const styles = {
    container: "mt-6 flex flex-col md:flex-row gap-6 justify-between",
    title: "font-bold text-xs",
    value: "mt-2 ml-2 text-lg min-h-[30px]",
  };

  return (
    <div className="mx-auto p-6 w-full max-w-[1100px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200 flex items-center justify-between">
        <div>詳細</div>
        <RepairsTemplateEdit repairTemplate={templates[params?.slug]}/>
      </div>
      <div className={styles.container}>
        <div className="w-full ">
          <div className={styles.title}>工場名</div>
          <div className={styles.value}>{data?.factory.name}</div>
        </div>
        <div className="w-full ">
          <div className={styles.title}>カテゴリー</div>
          <div className={styles.value}>{data?.category.name}</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className="w-full">
          <div className={styles.title}>顧客名</div>
          <div className={styles.value}>{data?.customer}</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className="w-full">
          <div className={styles.title}>修理名</div>
          <div className={styles.value}>{data?.title}</div>
        </div>
        <div className="w-full">
          <div className={styles.title}>単価</div>
          <div className={styles.value}>{data?.price}円</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className="w-full">
          <div className={styles.title}>色</div>
          <div className={styles.value}>{data?.color}</div>
        </div>
        <div className="w-full">
          <div className={styles.title}>位置</div>
          <div className={styles.value}>{data?.position}</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className="w-full">
          <div className={styles.title}>コメント</div>
          <div className={styles.value}>{data?.comment}</div>
        </div>
      </div>
      <div className="w-full mt-6">
        <div className="w-full">
          <div className={styles.title}>仕様書</div>
        </div>
        {data.images[0]?.path && (
          <div className="mt-3">
            <img
              className="shadow-md border border-1 border-gray-100 w-full"
              src={data.images[0].path}
            />
          </div>
        )}
      </div>
      <div className="w-full mt-6">
        <div className="w-full">
          <div className={styles.title}>仕様書サブ</div>
        </div>
        {data.images[0]?.path && (
          <div className="mt-3">
            <img
              className="shadow-md border border-1 border-gray-100 w-full"
              src={data.images[0].path}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateById;
