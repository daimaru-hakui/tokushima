import { DrawerSidebar } from "../components/sidebar/drawer-sidebar";
import { Sidebar } from "../components/sidebar/sidebar";
import { Main } from "../components/main/main";
import Header from "../components/header/header";
import { repairLinks } from "../utils";

const Adminlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between relative">
      <DrawerSidebar links={repairLinks} />
      <Sidebar links={repairLinks} />
      <Main>
        <Header />
        <div className="p-6">{children}</div>
      </Main>
    </div>
  );
};

export default Adminlayout;
