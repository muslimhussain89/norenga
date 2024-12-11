import { useState } from "react";
import PageTabsSection from "../../../../Components/PageTabsSection/PageTabsSection";
import PageTitle from "../../../../Components/PageTitle/PageTitle";
import PageTableContent from "../../../../Components/PageTableContent/PageTableContent";

const TopTabsArray = [
  { Tab: "All" },
  { Tab: "Mine" },
  { Tab: "Draft" },
  { Tab: "Not due" },
  { Tab: "Past due" },
  { Tab: "Reminder" },
  { Tab: "Send to dept collection" },
  { Tab: "Credited" },
];

export default function OfferPage() {
  const [visibleCheckboxes, setVisibleCheckboxes] = useState(null);
  const [activeTab, setActiveTab] = useState("All"); // Track the active tab

  const toggleVisibleCheckbox = () => {
    setVisibleCheckboxes(!visibleCheckboxes);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Predefined datasets for each tab
  const tableDataMap = {
    All: [
      [
        "525",
        "Appendex No.",
        "345",
        "Customer Name",
        "Inv",
        "Due Date",
        "Deliver date",
        "Our Reference",
        "Their Reference",
        "Date of last payment",
        "Comment",
      ],
      [
        "555",
        "Appendex No.",
        "345",
        "Customer Name",
        "Inv",
        "Due Date",
        "Deliver date",
        "Our Reference",
        "Their Reference",
        "Date of last payment",
        "Comment",
      ],
      [
        "4444",
        "Appendex No.",
        "345",
        "Customer Name",
        "Inv",
        "Due Date",
        "Deliver date",
        "Our Reference",
        "Their Reference",
        "Date of last payment",
        "Comment",
      ],
      [
        "577",
        "Appendex No.",
        "345",
        "Customer Name",
        "Inv",
        "Due Date",
        "Deliver date",
        "Our Reference",
        "Their Reference",
        "Date of last payment",
        "Comment",
      ],
      [
        "25",
        "Appendex No.",
        "345",
        "Customer Name",
        "Inv",
        "Due Date",
        "Deliver date",
        "Our Reference",
        "Their Reference",
        "Date of last payment",
        "Comment",
      ],
      // More rows...
    ],
    Mine: [
      [
        "33333",
        "Appendex No.",
        "123",
        "My Customer",
        "Inv",
        "Due Date",
        "Deliver date",
        "My Reference",
        "Their Reference",
        "Date of last payment",
        "Comment",
      ],
    ],
    // Add more datasets for other tabs
    Draft: [[
      "3452",
      "Appendex No.",
      "123",
      "My Customer",
      "Inv",
      "Due Date",
      "Deliver date",
      "My Reference",
      "Their Reference",
      "Date of last payment",
      "Comment",
    ],],
    "Not due": [],
    "Past due": [],
    Reminder: [],
    "Send to dept collection": [],
    Credited: [],
  };


  // Calculate record counts for each tab
  const TopTabsArray = Object.keys(tableDataMap).map((tab) => ({
    Tab: tab,
    count: tableDataMap[tab].length,
  }));



  const InvoiceTableHeaders = [
    "Invoice",
    "Appendex No.",
    "Customer No",
    "Customer Name",
    "Inv",
    "Due Date",
    "Deliver date",
    "Our Reference",
    "Their Reference",
    "Date of last payment",
    "Comment",
  ];

  const InvoiceTableData = tableDataMap[activeTab] || []; // Get data for the active tab

  return (
    <div className="Invoice-Page">
      {/* PAGE NAME */}
      <PageTitle
        LinkText={"sale"}
        PageTitle={"Offer"}
        Button1Text={"Help"}
        Button2Text={"New Offer"}
      />

      {/* PAGE TABS SECTION */}
      <PageTabsSection
        TopTabs={TopTabsArray}
        toggleVisibleCheckbox={toggleVisibleCheckbox}
        visibleCheckboxes={visibleCheckboxes}
        onTabClick={handleTabClick} // Pass the tab click handler
      />

      {/* PAGE TABLE CONTENT */}
      <PageTableContent
        tableHeaders={InvoiceTableHeaders}
        tableData={InvoiceTableData}
        RowNavigate={"/sales/offer"}
      />
    </div>
  );
}
