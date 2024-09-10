import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import APIManagement from './components/APIManagement';
import DataAnalytics from './components/DataAnalytics';
import PatientExperience from './components/PatientExperience';
import CompliancePrivacy from './components/CompliancePrivacy';
import DeviceManagement from './components/DeviceManagement';
import PersonalizedHealth from './components/PersonalizedHealth';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Healthcare-Infrastructure-As-A-Service Dashboard</h1>
      
      <Tabs defaultValue="api-management">
        <TabsList>
          <TabsTrigger value="api-management">API Management</TabsTrigger>
          <TabsTrigger value="data-analytics">Data Analytics</TabsTrigger>
          <TabsTrigger value="patient-experience">Patient Experience</TabsTrigger>
          <TabsTrigger value="compliance">Compliance & Privacy</TabsTrigger>
          <TabsTrigger value="device-management">Device Management</TabsTrigger>
          <TabsTrigger value="personalized-health">Personalized Health</TabsTrigger>
        </TabsList>

        <TabsContent value="api-management">
          <APIManagement />
        </TabsContent>

        <TabsContent value="data-analytics">
          <DataAnalytics />
        </TabsContent>

        <TabsContent value="patient-experience">
          <PatientExperience />
        </TabsContent>

        <TabsContent value="compliance">
          <CompliancePrivacy />
        </TabsContent>

        <TabsContent value="device-management">
          <DeviceManagement />
        </TabsContent>

        <TabsContent value="personalized-health">
          <PersonalizedHealth />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;