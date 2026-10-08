"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CONTACT_INFO } from "@/data/siteData";

type SettingsContextType = {
  contactPhone: string;
  contactEmail: string;
  contactAddress: string;
  stats: {
    yearsExperience: string;
    happyCustomers: string;
    propertiesHandedOver: string;
    nrisServed: string;
  };
};

const SettingsContext = createContext<SettingsContextType>({
  contactPhone: CONTACT_INFO.phoneDisplay,
  contactEmail: CONTACT_INFO.email,
  contactAddress: CONTACT_INFO.address,
  stats: {
    yearsExperience: "15+",
    happyCustomers: "1.5K+",
    propertiesHandedOver: "500+",
    nrisServed: "300+",
  }
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState({
    contactPhone: CONTACT_INFO.phoneDisplay,
    contactEmail: CONTACT_INFO.email,
    contactAddress: CONTACT_INFO.address,
    stats: {
      yearsExperience: "15+",
      happyCustomers: "1.5K+",
      propertiesHandedOver: "500+",
      nrisServed: "300+",
    }
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/settings");
        if (res.ok) {
          const data = await res.json();
          setSettings({
            contactPhone: data.contactPhone || CONTACT_INFO.phoneDisplay,
            contactEmail: data.contactEmail || CONTACT_INFO.email,
            contactAddress: data.contactAddress || CONTACT_INFO.address,
            stats: data.stats || {
              yearsExperience: "15+",
              happyCustomers: "1.5K+",
              propertiesHandedOver: "500+",
              nrisServed: "300+",
            }
          });
        }
      } catch (err) {
        console.error("Failed to load settings", err);
      }
    };
    fetchSettings();
  }, []);

  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
};
