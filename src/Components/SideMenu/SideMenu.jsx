import { useState } from "react";
import MyButton from "../Button/Button";
import "./SideMenu.css"
export default function SideMenu() {
  // Array of Side Nav buttons
  const SideMenuButtons = [
    {
      text: "Ratios",
      Src: "/Images/profile.svg",
      SubMenu: [
        {
          SubMenuButton: "Invoice",
        },
        {
          SubMenuButton: "Order",
        },
      ],
    },

    {
      text: "Sales",
      Src: "/Images/shopping-cart-01.svg",
      SubMenu: [
        {
          SubMenuButton: "Invoice",
          SubMenuButtonLink: "sales/invoice",

        },
        {
          SubMenuButton: "Order",
          SubMenuButtonLink: "sales/order",
        },
        {
          SubMenuButton: "Offer",
          SubMenuButtonLink: "sales/offer",
        },
        {
          SubMenuButton: "Consolidated invoicing",
          SubMenuButtonLink: "sales/order",
        },
        {
          SubMenuButton: "Reminder",
          SubMenuButtonLink: "sales/order",
        },
        {
          SubMenuButton: "Recurring invoice",
          SubMenuButtonLink: "sales/order",
        },
        {
          SubMenuButton: "Pricing agreement",
          SubMenuButtonLink: "sales/order",
        },
      ],
    },

    {
      text: "Accounting",
      Src: "/Images/profile.svg",
    },
    {
      text: "End of year",
      Src: "/Images/appointment-01.svg",
    },

    {
      text: "Bank",
      Src: "/Images/bank.svg",
    },
    {
      text: "Wages",
      Src: "/Images/user-group.svg",
    },
    {
      text: "Timer",
      Src: "/Images/clock-03.svg",
    },{
      text: "Project",
      Src: "/Images/job-search.svg",
    },{
      text: "Altinn",
      Src: "/Images/align-selection.svg",
    },{
      text: "Dimentions",
      Src: "/Images/blockchain-03.svg",
    },{
      text: "MarketPlace",
      Src: "/Images/new-job.svg",
    },
    {
      text: "Setting",
      Src: "/Images/Frame 4.svg",
    },
    

  ];


   // State for tracking visibility of submenus
   const [openSubMenu, setOpenSubMenu] = useState(1);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(prevIndex => (prevIndex === index ? null : index));
  };


  return (
    <div className="Side-Menu-Main">
      {SideMenuButtons.map((SideNavButton, index) => (
        <div key={index} className="SideMenuButtonWrapper">
          <div className="MenuMainButton">
          <MyButton
          ImgWidth={"16%"}
          BtnImgMargn={"0px"}
            RouteLink={SideNavButton.ButtonLink}
            Padding={"2rem 2rem 1rem 2rem"}
            Gap={"2rem"}
            text={SideNavButton.text}
            Src={SideNavButton.Src}
            FontSize={"1.6rem"}
            FontWeight={"500"}
            Width={"100%"}
            HoverBg={"#bbf7d0"}
            handleClick={() => toggleSubMenu(index)}
          />
          </div>
          

          {/* SubMenu if available */}
          {SideNavButton.SubMenu && openSubMenu === index && (
            <div className="Sub-Menu">
              {SideNavButton.SubMenu.map((subMenuItem, subIndex) => (
                <div key={subIndex} className="SubMenuItem">
                  <MyButton
                    RouteLink={subMenuItem.SubMenuButtonLink} // Adjust this based on your route setup
                    text={subMenuItem.SubMenuButton}
                    FontSize={"1.5rem"}
                    FontWeight={"400"}
                    Padding={"1rem 0rem 0rem 4rem"}
                    Width={"100%"}
                    HoverColor={"#019e48"}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
