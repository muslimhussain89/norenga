import { IoMdSettings } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";

import MyButton from "../Button/Button";
import "./PageTableContent.css";
import { useState } from "react";
import Text from "../Text/Text";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export default function PageTableContent({
  tableHeaders = [],
  tableData = [],
  RowNavigate
}) {
  // State to track visible tabs (all tabs visible by default)
  const [visibleTabs, setVisibleTabs] = useState([...tableHeaders]);

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
    setVisibleTabs([...tableHeaders]);
  };

  // Toggle the visibility of the checkbox section
  const [visibleCheckboxes, setVisibleCheckboxes] = useState(false);
  const toggleVisibleCheckbox = () => {
    setVisibleCheckboxes(!visibleCheckboxes);
  };

  const navigate = useNavigate(); // React Router navigation hook

  return (
    <>
      <div className="Page-Table-Content">
        <div className="Table-Inner">
          <table>
            <thead>
              <tr>
                {tableHeaders.map((tab, index) =>
                  visibleTabs.includes(tab) ? (
                    <th key={index}>
                      <MyButton
                        text={tab}
                        Margin={"0rem 3rem"}
                        Color={"white"}
                      />
                    </th>
                  ) : null
                )}
                <th className="fixed-column">
                  <div>
                    <MyButton
                      Color={"white"}
                      Src={<IoMdSettings size={25} />}
                      handleClick={toggleVisibleCheckbox}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex} >
                  {row.map((value, colIndex) =>
                    visibleTabs.includes(tableHeaders[colIndex]) ? (
                      <td key={colIndex} onClick={() => navigate(`${rowIndex}`)}><p>{value}</p></td>
                    ) : null
                  )}
                  
                  <td className="fixed-column">
                    <MyButton Src={<SlOptions size={25} />} Padding={"2rem"} />
                  </td>
                </tr>
              ))}
              {/* Last row with customer numbers inline */}
              <tr className="Fixed-Row">
                {tableHeaders.map((tab, colIndex) =>
                  visibleTabs.includes(tab) ? (
                    colIndex === tableHeaders.indexOf("Customer No") ? (
                      /* Show total only if "Customer No" is visible */
                      <td key={colIndex}>
                        {tableData.reduce(
                          (sum, row) =>
                            sum +
                            (visibleTabs.includes("Customer No")
                              ? Number(row[tableHeaders.indexOf("Customer No")])
                              : 0),
                          0
                        )}
                      </td>
                    ) : (
                      <td key={colIndex}></td>
                    )
                  ) : null
                )}
                <td className="fixed-column">
                  <div></div>
                </td>
              </tr>
            </tbody>
          </table>

          {visibleCheckboxes && (
            <div className="Table-Tabs-Selection-Section">
              <div className="Table-Tabs-Wrapper">
                <div className="Table-Tab-Top">
                  <Text
                    text={"Change the visibility of tabs"}
                    Padding={"1.5rem"}
                    FontSize={"1.6rem"}
                    Margin={"0rem 0rem 1rem 0rem"}
                  />
                  <MyButton
                    Src={<IoMdClose size={28} />}
                    handleClick={toggleVisibleCheckbox}
                  />
                </div>

                <div className="Table-Tabs">
                  {tableHeaders.map((tabCheck, index) => (
                    <div className="Select-Tab" key={index}>
                      <input
                        type="checkbox"
                        name={tabCheck}
                        id={tabCheck}
                        onChange={() => handleCheckboxChange(tabCheck)}
                        checked={visibleTabs.includes(tabCheck)} // Checked if tab is visible
                      />
                      <Text
                        text={tabCheck}
                        Margin={"0rem 0rem 0rem 1rem"}
                        FontSize={"1.5rem"}
                      />
                    </div>
                  ))}
                </div>
                <div className="Back-To-Default">
                  <MyButton
                    text={"Back to default"}
                    Color={"#2253dd"}
                    handleClick={resetToDefault}
                    FontWeight={"500"}
                  />
                  <MyButton
                    text={"Save"}
                    Color={"#2253dd"}
                    handleClick={toggleVisibleCheckbox}
                    FontWeight={"500"}
                    Margin={"0rem 0rem 0rem 5rem"}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="End-Row">
        <Text text={`Total number of rows: ${tableData.length}`} />
      </div>
    </>
  );
}
