import React from "react";

const TemplateById = ({ params }: { params: { slug: number } }) => {
  const templates = [
    {
      id: 0,
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
      comment: "",
    },
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
      comment: "",
    },
    {
      id: 3,
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
      comment: "",
    },
  ];
  const data = templates[params?.slug];

  return (
    <div className="mx-auto p-6 w-full max-w-[1100px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">詳細</div>
      <div className="flex gap-3 items-start flex-col md:flex-row">
        <div className="w-full flex flex-col gap-3">
          {data.images[0]?.path && (
            <div className="">
              <img className="shadow-md border border-1 border-gray-100 w-full" src={data.images[0].path} />
            </div>
          )}
          {data.images[1]?.path && (
            <div className="">
              <img className="shadow-md border border-1 border-gray-100 w-full" src={data.images[1].path} />
            </div>
          )}
        </div>
        <table className="table-auto w-full border border-1 border-gray-200">
          <tbody className="">
            <tr className="">
              <th className="p-3 font-bold text-sm text-left w-[120px]">
                工場名
              </th>
              <td>{data.factory.name}</td>
            </tr>
            <tr>
              <th className="p-3 font-bold text-sm text-left w-[120px]">
                納品先
              </th>
              <td>{data.delivery.name}</td>
            </tr>
            <tr>
              <th className="p-3 font-bold text-sm text-left w-[120px]">
                入荷場所
              </th>
              <td>{data.status === "PICKING" ? "倉庫入れ" : "工場直送"}</td>
            </tr>
            <tr>
              <th className="p-3 font-bold text-sm text-left w-[120px]">
                顧客名
              </th>
              <td>{data.customer}</td>
            </tr>
            <tr>
              <th className="p-3 font-bold text-sm text-left w-[120px]">
                修理名
              </th>
              <td>{data.title}</td>
            </tr>
            <tr>
              <th className="p-3 font-bold text-sm text-left w-[120px]">
                価格名
              </th>
              <td>{data.price}円</td>
            </tr>
            <tr>
              <th className="p-3 font-bold text-sm text-left w-[120px]">色</th>
              <td>{data.color}</td>
            </tr>
            <tr>
              <th className="p-3 font-bold text-sm text-left w-[120px]">
                位置
              </th>
              <td>{data.position}</td>
            </tr>
            <tr>
              <th className="p-3 font-bold text-sm text-left w-[120px]">
                コメント
              </th>
              <td>{data.comment}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TemplateById;
