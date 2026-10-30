import { getAllProperties } from "@/lib/propertyService";
import { HomeClient } from "./HomeClient";
import { getSiteSettings } from "./actions/settingsActions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [properties, settings] = await Promise.all([
    getAllProperties(),
    getSiteSettings().catch(() => ({}))
  ]);

  return <HomeClient properties={properties} settings={settings} />;
}
