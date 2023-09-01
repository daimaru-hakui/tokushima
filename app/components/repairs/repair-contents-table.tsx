import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC } from "react";
import { RepairImage } from "./repair-image";
import { RepairImageContainer } from "./Repair-image-container";

type RepairContent = Database["public"]["Tables"]["repair_contents"]["Row"];

type Props = {
  contents: RepairContent[];
};

export const RepairContentsTable: FC<Props> = ({ contents }) => {
  return (
    <div className="overflow-auto mt-6">
      <div
        style={{ minWidth: "800px" }}
        className="table-auto w-full text-sm text-lef border-spacing-2 border border-slate-200 bg-neutral-50"
      >
        <div>
          {contents.map((content, idx: number) => (
            <>
              {idx !== 0 && <hr className="border-t-2 border-dotted border-gray-200" />}
              <div key={content.id} className="p-6 flex gap-6">
                <div className="flex gap-3 w-1/2">
                  <RepairImageContainer images={content.images} />
                </div>
                <div className="w-full">
                  <div className="text-xs font-bold">修理名</div>
                  <div className="p-3 mt-1 border border-slate-200 bg-white rounded-md shadow-sm whitespace-pre-wrap">
                    {content.title}
                  </div>

                  <div>
                    <div className="mt-6 text-xs font-bold">価格</div>
                    <div className="p-3 mt-1 border border-slate-200 bg-white rounded-md shadow-sm whitespace-pre-wrap">
                      {content.price}円
                    </div>
                  </div>
                  {content.color && (
                  <div className="w-full">
                    <div className="mt-6 text-xs font-bold">カラー</div>
                    <div className="p-3 mt-1 border border-slate-200 bg-white rounded-md shadow-sm whitespace-pre-wrap">
                      {content.color}
                    </div>
                  </div>
                  )}
                  {content.position && (
                  <div className="w-full">
                    <div className="mt-6 text-xs font-bold">位置</div>
                    <div className="p-3 mt-1 border border-slate-200 bg-white rounded-md shadow-sm whitespace-pre-wrap">
                      {content.position}
                    </div>
                  </div>
                  )}

                  {content.comment && (
                    <>
                      <div className="mt-6 text-xs font-bold">コメント</div>
                      <div className="p-3 mt-1 border border-slate-200 bg-white rounded-md shadow-sm whitespace-pre-wrap">
                        {content.comment}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
