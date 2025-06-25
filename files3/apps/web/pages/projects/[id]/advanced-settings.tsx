import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAdvancedSettingsPanel from "../../../components/ProjectAdvancedSettingsPanel";

const initialSettings = {
  name: "مشروع ذكاء اصطناعي تجريبي",
  description: "منصة تجريبية لبناء مشاريع الذكاء الاصطناعي التفاعلية.",
  type: "ai",
  isPublic: true,
  aiEnabled: true,
  allowRestore: true,
  allowComments: true,
  protected: false
};

const ProjectAdvancedSettingsPage = () => {
  const [settings, setSettings] = useState(initialSettings);
  const [saved, setSaved] = useState(false);

  const handleChange = (field: string, value: any) => {
    setSettings({ ...settings, [field]: value });
    setSaved(false);
  };

  const handleSave = () =>
