import React from "react";

export const SettingsFactoryList = () => {
  const list = [
    {
      id: 1,
      name: "徳島工場",
      address: "〒779-3131 徳島県徳島市下町本丁660",
      tel: "088-644-0301",
    },
    {
      id: 2,
      name: "大野制帽所",
      address: "〒580-0044 大阪府松原市田井城4丁目145-18",
      tel: "072-332-7708",
    },
    {
      id: 3,
      name: "高田や刺繍",
      address: "〒550-0023 大阪府大阪市西区千代崎1丁目24-13",
      tel: "06-6582-3434",
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-sm">
      <div className="p-6 min-w-[00px] bg-white rounded-md">
        <table className="w-full  text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr className=" text-xs border-b border-slate-200">
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                工場名
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                住所
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                TEL
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ id, name, address, tel }) => (
              <tr key={id} className="text-md border-b border-slate-200">
                <td className="px-6 py-3">{id}</td>
                <td className="px-6 py-3">{name}</td>
                <td className="px-6 py-3">{address}</td>
                <td className="px-6 py-3">{tel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
