import React from "react";

const TemplateById = ({ params }: { params: { slug: number } }) => {
  const templates = [
    {
      id: 1,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      customer: "マ・マーマカロニ宇都宮工場",
      status: "PICKING",
      title: "襟テーピースナッパー付け",
      price: 180,
      color: "",
      position: "",
      images: [{ path: "/images/20230731.png" }],
    },
    {
      id: 2,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      customer: "共同リネンサプライ",
      status: "PICKING",
      title: "裾上げ",
      price: 320,
      color: "",
      position: "",
      images: [{ path: "/images/20230731.png" }],
    },
    {
      id: 3,
      factory: {
        id: 1,
        name: "大野制帽所",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      customer: "阪急デリカアイ",
      status: "PICKING",
      title: "線付け",
      price: 150,
      color: "",
      position: "",
      images: [{ path: "/images/20230731.png" }],
    },
    {
      id: 4,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      customer: "共同リネンサプライ",
      status: "PICKING",
      title: "裾上げ",
      price: 320,
      color: "",
      position: "",
      images: [{ path: "/images/20230731.png" }],
    },
  ];
  return (
    <div className="mx-auto p-6 w-full max-w-[1100px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">詳細</div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="w-full">
          <div className="font-bold text-sm">工場名</div>
          <div className="mt-1">{templates[params?.slug].factory.name}</div>
        </div>
        <div className="w-full">
          <div className="font-bold text-sm">納品先</div>
          <div className="mt-1">{templates[params?.slug].delivery.name}</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="w-full">
          <div className="font-bold text-sm">顧客名</div>
          <div className="mt-1">{templates[params?.slug].customer}</div>
        </div>
        <div className="w-full">
          <div className="font-bold text-sm">入荷場所</div>
          <div className="mt-1">
            {templates[params?.slug].status === "PICKING"
              ? "倉庫入れ"
              : "工場直送"}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="w-full">
          <div className="font-bold text-sm">修理名</div>
          <div className="mt-1">{templates[params?.slug].title}</div>
        </div>
        <div className="w-full">
          <div className="font-bold text-sm">価格</div>
          <div className="mt-1">{templates[params?.slug].price}円</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="w-full">
          <div className="font-bold text-sm">色</div>
          <div className="mt-1">{templates[params?.slug].color}</div>
        </div>
        <div className="w-full">
          <div className="font-bold text-sm">位置</div>
          <div className="mt-1">{templates[params?.slug].position}</div>
        </div>
      </div>
      <div className="w-full flex gap-6">
        <div className="w-full">
          <div className="mt-6 font-bold text-sm">画像</div>
          <div className="mt-2">
            <img src={templates[params?.slug].images[0].path} />
          </div>
        </div>
        {/* <div className="w-full">
          <div className="mt-6 font-bold text-sm">画像</div>
          <div className="mt-2">
            <img src={templates[params?.slug].images[0].path} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TemplateById;
