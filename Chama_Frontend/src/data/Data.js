import {
    UilEstate,
    UilSearch,
    UilUser,
    UilChart,
    UilMoneyWithdrawal,
    UilClipboardAlt,
    // UilSignOutAlt,
} from "@iconscout/react-unicons";


export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
        route: "/"
    },
    {
        icon: UilSearch,
        heading: "Search",
        route: "/search"
    },
    {
        icon: UilUser,
        heading: "Members",
        route: "/members"
    },
    {
        icon: UilChart,
        heading: "Analytics",
        route: "/analytics"
    }
];

/**
 * import data from the api about the members 
 */
export const CardsData=[
    {
        title: "Total Weight",
        color:{
            backGround: "linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "15,900",
        png: UilClipboardAlt,
        series: [
          {
            // show the total number of members 
            name: "Total",
            data: [1200, 1400, 1100, 800, 1600, 7000,2800],
          },
        
        ],
        
    }, {
        title: "Algorands Total",
        color: {
          backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
          boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 25,
        value: '2000000',
        png: UilMoneyWithdrawal,
        series: [
          {
            name: "Balance",
            data: [120, 140, 110, 80, 160, 700,280],
          },
        ],
        
      },
      {
        title: "Turnout",
        color: {
          backGround:
            "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
          boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 75,
        value: "84",
        // image of girls 
        png: UilClipboardAlt,
        series: [
          {
            // show the number of girls based on the clases
            name: "Expenses",
            data: [6, 7, 5, 9, 8, 35,14],
          },
        ],
      },
    ];
