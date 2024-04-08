import Logo from './Logo';
import SideBarRoutes from './SideBarRoutes';

const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm z-50 ">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SideBarRoutes />
      </div>
    </div>
  );
};
export default SideBar;
