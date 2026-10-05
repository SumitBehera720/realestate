import { AdminLayout } from "@/components/AdminLayout";
import { EnquiriesClient } from "@/components/admin/EnquiriesClient";
import { getEnquiries } from "@/app/actions/enquiryActions";
export const dynamic = "force-dynamic";

export default async function AdminEnquiriesPage() {
  const enquiries = await getEnquiries();

  return (
    <AdminLayout>
      <EnquiriesClient enquiries={enquiries} />
    </AdminLayout>
  );
}
