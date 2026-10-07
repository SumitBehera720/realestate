import React from "react";
import SettingsClient from "./SettingsClient";
import { getSiteSettings } from "@/app/actions/settingsActions";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const settings = await getSiteSettings();
  return <SettingsClient initialSettings={settings} />;
}
