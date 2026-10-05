import { AdminLayout } from "@/components/AdminLayout";
import { PropertiesClient } from "@/components/admin/PropertiesClient";
import { getProperties } from "@/app/actions/propertyActions";
export const dynamic = "force-dynamic";

export default async function AdminPropertiesPage() {
  const properties = await getProperties();

  return (
    <AdminLayout>
      <PropertiesClient properties={properties} />
    </AdminLayout>
  );
}
