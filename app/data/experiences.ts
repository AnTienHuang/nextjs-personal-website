const experiences: ExperienceItem[] = [
  {
    role: 'Cloud Platform Engineer / Business Analyst',
    company: 'Trend Micro',
    location: 'Taipei, Taiwan',
    period: 'Jun 2020 – Jul 2023',
    skills: [
      {
        name: 'Salesforce',
        descriptions: [
          'Maintained and managed corporate Salesforce system for 4000+ users.',
          'Delivered Salesforce integration with AWS’ CRM by myself (project management and system development). Since launched, this integration has helped Trend Micro and AWS to capture 3,000 opportunities with revenue of $280M.',
          'Design the new business process as well as developed and upgraded Salesforce to Salesforce CPQ and reduced time from opportunity to order by 30+%.',
          'Designed and developed Salesforce modules to support the company’s goal of transforming into cloud subscription model that has an average yearly growth rate of 60+%.',
        ]
      },
      {
        name: 'Microsoft D365 & Power Platform',
        descriptions: [
          'Managed and maintained ticket system on Microsoft D365 for support engineers.',
          'Developed new modules and automation with PowerApps, C# and Vue.js',
          'Developed a customer management portal for marketing team with Power Apps. The portal enables users to easily view and filter data integrated from Salesforce, Marketo and other data sources using D365, Power Platform and Azure services'
        ]
      },
      {
        name: 'Microsoft Azure',
        descriptions: [
          'Developed APIs and microservices for CRM and ERP systems using Azure Logic Apps, Azure Function Apps and Python to provide a more unified and user-friendly integration interface for internal developers.',
          'Developed data pipeline with Azure Data Explorer and Logic Apps to automate record opportunity and lead creation in Salesforce.',
          'Developed a data foundation using Azure Synapse and Data Lake to serve as the single source of corporate data, integrating ETL for CRM, ERP systems, and other departments’ databases.',
        ]
      }
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Information Commissioner’s Office',
    location: 'Wilmslow, UK',
    period: 'Oct 2017 – Aug 2018',
    skills: [
      {
        name: 'Test Automation',
        descriptions: [
          'Led the overhaul of the ICO’s testing platform for its D365 CRM using Microsoft Coded UI Test.', 
          'Automated regression tests and reduced testing time by 70%.',
          'Use Azure DevOps Server to incorporate automated test into the CI/CD pipeline, increasing release velocity and catching bugs earlier.'
        ]
      }
    ]
  }
];

export default experiences;
