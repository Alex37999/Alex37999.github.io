const logotext = "MUZAHID";
const meta = {
    title: "Muzahidul Hassan",
    description:
        "Highly motivated CSE graduate passionate about web/mobile development, AI, and crafting great user experiences.",
};

const introdata = {
    title: "I’m Muzahidul Hassan",
    animated: {
        first: "I build web apps",
        second: "I develop mobile apps (Flutter)",
        third: "I explore AI/ML (YOLOv8)",
    },
    description:
        "Ambitious, detail‑oriented and quick to learn. I enjoy solving problems, shipping useful products, and continuously improving the user experience.",
    your_img_url:
        "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "about me",
    aboutme:
        "B.Sc. in Computer Science & Engineering from RUET (2018–2024). Passionate about full‑stack web, Flutter mobile apps, and practical AI. Strong communication, time management, and the ability to handle multiple responsibilities. I love turning ideas into reliable, user‑friendly software.",
};
const worktimeline = [
    {
        jobtitle: "B.Sc. in CSE",
        where: "RUET, Rajshahi",
        date: "2018 – 2024",
    },
    {
        jobtitle: "HSC (Science)",
        where: "Notre Dame College, Dhaka",
        date: "2015 – 2017",
    },
    {
        jobtitle: "SSC (Science)",
        where: "Khilgaon Govt. High School, Dhaka",
        date: "2013 – 2015",
    },
];

const skills = [
    { name: "C", value: 90 },
    { name: "C++", value: 75 },
    { name: "Java", value: 70 },
    { name: "Python", value: 80 },
    { name: "JavaScript", value: 75 },
    { name: "HTML5", value: 85 },
    { name: "CSS", value: 80 },
    { name: "Bootstrap", value: 80 },
    { name: "PHP", value: 65 },
    { name: "Flutter / Dart", value: 70 },
];

const services = [
    {
        title: "Web Development",
        description:
            "Responsive, accessible websites with modern HTML/CSS/JS, Bootstrap, and basic PHP backends.",
    },
    {
        title: "Mobile App Development",
        description:
            "Cross‑platform apps using Flutter/Dart, focusing on clean UI and smooth UX.",
    },
    {
        title: "AI & Automation",
        description:
            "Practical AI features (e.g., object detection with YOLOv8) and task automation with Python.",
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/seed/travelalarm/400/300",
        description:
            "Travel Alarm App — plan trips and set alarms tied to destinations to stay on schedule.",
        link: "https://github.com/Alex37999/travel_alarm",
    },
    {
        img: "https://picsum.photos/seed/payment/400/300",
        description:
            "Payment Gateway Demo — basic payment flow integrating Stripe API for online purchases.",
        link: "https://github.com/Alex37999/ecomm_payment_gateway",
    },
    {
        img: "https://picsum.photos/seed/crud/400/300",
        description:
            "CRUD Application — create, read, update, delete products with simple UI.",
        link: "https://github.com/Alex37999/CRUD_application",
    },
    {
        img: "https://picsum.photos/seed/tasks/400/300",
        description:
            "Task Manager App — categorize daily tasks into four groups and track status.",
        link: "https://github.com/Alex37999/task_manager_live",
    },
    {
        img: "https://picsum.photos/seed/nid/400/300",
        description:
            "NID Registration & Verification — functional C program for managing NID data.",
        link: "https://github.com/Muzahid379/Project_4",
    },
    {
        img: "https://picsum.photos/seed/voice/400/300",
        description:
            "Voice Assistance Using AI — desktop assistant with Python speech recognition.",
        link: "https://github.com/Muzahid379/project_2",
    },
    {
        img: "https://picsum.photos/seed/restaurant/400/300",
        description:
            "E‑commerce Restaurant Management — responsive site with search (HTML/CSS, PHP, SQL).",
        link: "https://github.com/Muzahid379/project_3",
    },
    {
        img: "https://picsum.photos/seed/atm/400/300",
        description:
            "ATM Simulator — Java OOP app supporting balance, deposit, and withdrawal.",
        link: "https://github.com/Muzahid379/project_1",
    },
    {
        img: "https://picsum.photos/seed/getx/400/300",
        description:
            "Counter App (GetX) — Flutter app demonstrating GetX state management features.",
        link: "https://github.com/Alex37999/getx_app3",
    },
    {
        img: "https://picsum.photos/seed/yolo/400/300",
        description:
            "Thesis: Face Detection for Driving Assistance — experiments with YOLOv8.",
        link: "https://github.com/Muzahid379/Thesis",
    },
    ////////
    {
        img: "https://picsum.photos/seed/yolo/400/300",
        description:
            "Borla - The Garbage Collector App.",
        link: "https://github.com/Muzahid379/project_borla_borla",
    },
    {
        img: "https://picsum.photos/seed/yolo/400/300",
        description:
            "Bi-Dot : A Business Social Platform.",
        link: "https://github.com/Alex37999/bidot_app_v2",
    },
    {
        img: "https://picsum.photos/seed/yolo/400/300",
        description:
            "FamShed - A Family Events Scheduling App",
        link: "https://github.com/Alex37999/fam_sched",
    },
    {
        img: "https://picsum.photos/seed/yolo/400/300",
        description:
            "Church MS - A Church Management System App.",
        link: "https://github.com/Alex37999/church_ms_app",
    },
    {
        img: "https://picsum.photos/seed/yolo/400/300",
        description:
            "Power Grider : Electrical Grid Maintenance App",
        link: "https://github.com/Alex37999/power_grid_maintenance_app",
    },
    {
        img: "https://picsum.photos/seed/yolo/400/300",
        description:
            "Crafty Bay : A Live E-Commerce App",
        link: "https://github.com/Alex37999/live_ecommerce_app",
    },
    {
        img: "https://picsum.photos/seed/yolo/400/300",
        description:
            "App-Prototype 1: Media query, portrait-landscape, gridview clickable images etc.",
        link: "https://github.com/Alex37999/app1_prototype",
    },
    {
        img: "https://picsum.photos/seed/yolo/400/300",
        description:
            "App-Prototype 3: Horizontal scroll with containers, form submission, drawers, bi-directional foreign language etc.",
        link: "https://github.com/Alex37999/app3_prototype",
    },
    {
        img: "https://picsum.photos/seed/yolo/400/300",
        description:
            "App-Prototype 4: Responsive design, fractional boxes with different aspect ratios, clickable images with details etc.",
        link: "https://github.com/Alex37999/app4_prototype",
    },
    {
        img: "https://picsum.photos/seed/yolo/400/300",
        description:
            "App-Prototype 5: Adding/updating list items through input fields inside custom alert dialogs and etc.",
        link: "https://github.com/Alex37999/app5_prototype",
    },
];

const contactConfig = {
    YOUR_EMAIL: "utshobhassan379@gmail.com",
    YOUR_FONE: "+8801815553897",
    description:
        "Open to opportunities and collaborations in web, mobile, and AI. Feel free to reach out!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Muzahid379",
    facebook: "",
    linkedin: "",
    twitter: "",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
