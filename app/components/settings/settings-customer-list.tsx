import React from "react";

export const SettingsCustomerList = () => {
  const list = [
    {
      id: 1,
      name: "共同リネンサプライ",
      address: "〒564-0002 大阪府吹田市岸部中2-17-2",
      tel: "06-6388-3357",
    },
    {
      id: 2,
      name: "総合開発",
      address: "〒768-0065 香川県観音寺市瀬戸町3-1-32",
      tel: "0875-25-0297",
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
                納品先名
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
            {list.map(({ id, name,address,tel }) => (
              <tr
                key={id}
                className="text-md border-b border-slate-200"
              >
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
