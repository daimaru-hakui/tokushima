import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC } from "react";

type RepairContent = Database["public"]["Tables"]["repair_contents"]["Row"];

type Props = {
  contents: RepairContent[];
};

export const RepairContentsTable: FC<Props> = ({ contents }) => {
  const supabase = createClientComponentClient<Database>();

  const getImage = async (file: string[] | null) => {
    if (!file) return;
    const { data, error } = await supabase.storage
      .from("repairs")
      .createSignedUrl(file[0], 600);
    if (error) return;
    return data?.signedUrl;
  };

  return (
    <div className="mt-6">
      <table
        style={{ minWidth: "600px" }}
        className="table-auto w-full text-sm text-lef border-spacing-2 border border-slate-200 bg-neutral-50"
      >
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contents.map(async(content) => (
            <tr key={content.id}>
              <td>{content.title}</td>
              <td>{content.color}</td>
              <td>{content.position}</td>
              <td>
                <img src={await getImage(content.images)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
