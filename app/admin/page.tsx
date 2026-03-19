import { redirect } from "next/navigation";
import AdminPage from "./admin-page";
import AnalyticsPage from "./dashboard";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const params = await searchParams;

  if (params.key !== process.env.ADMIN_KEY) {
    redirect("/");
  }
  return (
    <>
      <AdminPage />
      <AnalyticsPage />
    </>
  );
}
