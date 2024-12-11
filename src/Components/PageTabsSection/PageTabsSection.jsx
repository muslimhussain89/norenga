import { useState } from "react";
import MyButton from "../Button/Button";
import Text from "../Text/Text";
import "./PageTabsSection.css";
import { IoMdSettings } from "react-icons/io";

export default function PageTabsSection({
  TopTabs,
  toggleVisibleCheckbox,
  visibleCheckboxes,
  onTabClick,
}) {
  // State to track visible tabs (all tabs visible by default)
  const [visibleTabs, setVisibleTabs] = useState(
    TopTabs.map((tabMap) => tabMap.Tab)
  );

  // Toggle visibility of tabs
  const handleCheckboxChange = (tab) => {
    setVisibleTabs(
      (prev) =>
        prev.includes(tab)
          ? prev.filter((item) => item !== tab) // Remove tab if unchecked
          : [...prev, tab] // Add tab if checked
    );
  };

  // Reset to default (all checkboxes checked)
  const resetToDefault = () => {
    setVisibleTabs(TopTabs.map((tabMap) => tabMap.Tab));
  };

  const handleTabClick = (tabMap) => {
    if (onTabClick) onTabClick(tabMap); // Notify parent of tab click
  };

  return (
    <div className="Page-Tabs-Section">
      <div className="Page-Tabs">
        {TopTabs.filter((tabMap) => visibleTabs.includes(tabMap.Tab)).map(
          (tabMap, index) => (
            <MyButton
              Border={"1px solid #DDD9D9"}
              Padding={"1rem 4rem"}
              Radius={"8px"}
              key={index}
              text={`${tabMap.Tab} ${tabMap.count}`} // Display tab name with record count
              Margin={"0rem 0.8rem"}
              handleClick={() => handleTabClick(tabMap.Tab)}
            ></MyButton>
          )
        )}
      </div>
      <div className="Setting-Buttons">
        <MyButton
          Src={<IoMdSettings size={25} />}
          handleClick={toggleVisibleCheckbox}
        />
        {visibleCheckboxes && (
          <div className="Tab-Selection">
            <Text
              text={"Change the visibility and order of tabs"}
              Padding={"1.5rem"}
              FontSize={"1.6rem"}
              Margin={"0rem 0rem 1rem 0rem"}
            />
            {TopTabs.map((tabCheck, index) => (
              <div className="Select-Tab" key={index}>
                <input
                  type="checkbox"
                  name={tabCheck.Tab}
                  id={tabCheck.Tab}
                  onChange={() => handleCheckboxChange(tabCheck.Tab)}
                  checked={visibleTabs.includes(tabCheck.Tab)} // Checked if tab is visible
                />
                <Text
                  text={tabCheck.Tab}
                  Margin={"0rem 0rem 0rem 1rem"}
                  FontSize={"1.5rem"}
                />
              </div>
            ))}
            <div className="Back-To-Default">
              <MyButton
                text={"Back to default"}
                Color={"#2253dd"}
                handleClick={resetToDefault}
                FontWeight={"500"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
