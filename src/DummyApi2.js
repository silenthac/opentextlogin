export const data = [
    {
        id:1,
        Name:"Infrastructure",
        elements:[{Name:"Buffer",Description:"Disk buffers for poos"},{Name:"Cache",Description:"Cache locations"},{Name:"Disk Volumes", Description:"Disk Volumes for buffers and storage"},{}]
    },
    {
        id:2,
        Name:"Archive",
        elements:[{Name:"Original Archive",Description:"Archives hosted on  this server"},{Name:"Replicated Archives",Description:"Archives replicated to this server"},{Name:"External Archives", Description:"Archives accessible from this server"},{}]
    },
    {
        id:3,
        Name:"Environment",
        elements:[{Name:"Cache Servers",Description:"Archive cache servers to handle read and write requests .."},{Name:"known Servers",Description:"Known servers for remote standby scenarios"},{Name:"SAP Servers", Description:"Connection parameters for SAP pipelines and doc tools"},{}]
    },
    {
        id:4,
        Name:"System",
        elements:[{Name:"Alerts",Description:"list of alerts and message"},{Name:"Events and Notifications ",Description:"Notification service to monitor the Archive Server"},{Name:"jobs", Description:"Scheduled Archive Server jobs"},{Name:"Key Store",Description:"list of alerts and message"},{Name:"Policies",Description:"Policies to control creation,configuration and deletion of va...."},{Name:"Reports",Description:"Generate reports about archives and pool"},{Name:"Storage Tiers",Description:"Storage tiers to assign categories of data to specific storage...."},{Name:"Users and Groups",Description:"Archive Administation users and groups"}]
    },
    {
        id:5,
        Name:"Configuration",
        elements:[{Name:"Archive Server",Description:"Archive Server configuration"},{Name:"Document Pipeline",Description:"Document Pipeline configuration"},{Name:"Monitoring Server",Description:"Monitoring Server configuration"}]

    }


]