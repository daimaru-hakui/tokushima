import React from "react";

const Repairs = () => {
  const list = [
    {
      serialNumber: 3,
      customer: "共同リネンサプライ㈱",
    },
    {
      serialNumber: 2,
      customer: "日本リプロ㈱",
    },
    {
      serialNumber: 1,
      customer: "総合開発",
    },
  ];

  return (
          <div className="overflow-x-auto shadow-sm">
            <div className="p-6 min-w-[700px] bg-white rounded-md">
            <table className="w-full  text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase">
                <tr className=" text-xs border-b border-slate-200">
                  <th scope="col" className="px-6 py-3">伝票NO.</th>
                  <th scope="col" className="px-6 py-3 text-left">顧客名</th>
                </tr>
              </thead>
              <tbody>
                {list.map(({ serialNumber, customer }) => (
                  <tr key={serialNumber} className="text-md border-b border-slate-200">
                    <td className="px-6 py-3">{serialNumber}</td>
                    <td className="px-6 py-3 text-left">{customer}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </div>
  );
};

export default Repairs;
