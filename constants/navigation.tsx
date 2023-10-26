export const navigation = [
    {
        title: "Dashboard",
        icon: "dashboard",
        // counter: 16,
        url: "/dashboard/social",
    },
    {
        title: "Refundable deposit",
        icon: "projects",
        url: "/finance/payments-send-money",
    },
    {
        title: "Special Bookings",
        icon: "tasks",
        url: "/crm/customers-v2",
    },
    // {
    //     title: "Kanban Desk",
    //     icon: "layers",
    //     counter: 28,
    //     url: "/projects/kanban-desc",
    // },
    // {
    //     title: "File Manager",
    //     icon: "file",
    //     counter: 14,
    //     counterColor: "#98E9AB",
    //     url: "/projects/file-manager-folders",
    // },
    // {
    //     title: "Calendar",
    //     icon: "calendar",
    //     url: "/projects/calendar",
    // },
    // {
    //     title: "Inbox",
    //     icon: "email",
    //     url: "/inbox/mail-list",
    // },
];

export const navigationMobile = [
    {
        icon: "dashboard",
        url: "/dashboard/social",
    },
    {
        icon: "projects",
        url: "/finance/payments-send-money",
    },
    {
        icon: "tasks",
        url: "/crm/customers-v2",
    },
    // {
    //     icon: "layers",
    //     url: "/projects/kanban-desc",
    // },
    {
        icon: "dots",
        onClick: () => console.log("Click on dots"),
    },
];
