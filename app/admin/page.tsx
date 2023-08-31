import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextPage } from "next";
import { Switch } from "../components/utils/input/switch";
import { Database } from "@/lib/database.types";
import { AdimnEditModal } from "../components/admin/admin-edit-modal";

const Adimin: NextPage = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const getProfiles = async () => {
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) {
      console.log(error);
    }
    return data;
  };
  const users = await getProfiles();

  return (
    <div className="mx-auto p-6 w-full shadow-sm bg-white rounded-md overflow-auto">
      <div className="flex justify-between items-center py-2 mb-6 border-b border-gray-200">
        <div className="text-2xl ">管理者ページ</div>
      </div>
      <div className="w-full relative overflow-x-auto bg-white rounded-md shadow-sm">
        <table className="lg:min-w-full min-w-[1000px] text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr className=" text-xs border-b border-slate-200">
              <th scope="col" className="px-6 py-3 text-left w-auto">
                名前
              </th>
              <th scope="col" className="px-6 py-3 text-left w-auto">
                メールアドレス
              </th>
              {/* <th scope="col" className="px-6 py-3 text-left w-auto">
                管理者
              </th> */}
              <th scope="col" className="px-6 py-3 text-left w-auto">
                営業
              </th>
              <th scope="col" className="px-6 py-3 text-left w-auto">
                徳島工場
              </th>
              <th scope="col" className="px-6 py-3 text-left w-auto">
                配送センター
              </th>
              <th scope="col" className="px-6 py-3 text-center w-[80px]">
                編集
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id} className="text-md border-b border-slate-200">
                  <td className="px-6 py-3 w-auto">{user.username}</td>
                  <td className="px-6 py-3">{user.email}</td>
                  {/* <td className="px-6 py-3">
                    <Switch
                      id={user.id}
                      toggle={user.isAdmin}
                      title="isAdmin"
                    />
                  </td> */}
                  <td className="px-6 py-3">
                    <Switch
                      id={user.id}
                      toggle={user.isSales}
                      title="isSales"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <Switch
                      id={user.id}
                      toggle={user.isTokushima}
                      title="isTokushima"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <Switch
                      id={user.id}
                      toggle={user.isDelivery}
                      title="isDelivery"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <AdimnEditModal user={user} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adimin;
