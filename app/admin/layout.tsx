import Sidebar from "./admincomponents/sidebar/sidebar";
import AdminNavbar from "./admincomponents/navbar/navbar";
export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="bg-gray-900 pb-8">
        <div>
       <AdminNavbar/>
        </div>
        <div className="flex flex-row">
        <Sidebar/>
        <div className="ml-8">  {children}</div>
      
        </div>

        </div>
      
    );
  }
  