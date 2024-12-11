import { useParams } from "react-router-dom";
import Text from "../../../../Components/Text/Text";
import "./SingleInvoice.css";
import MyButton from "../../../../Components/Button/Button";
import { FaAngleDown } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function SingleInvoice() {
  const { id } = useParams(); // Fetch row ID from URL

  return (
    <div className="SingleInvoicePage">
      <div className="Topwrapper">
        <div className="LeftSec">
          <div className="BreadCrumbs_Id">
            <div className="BreadCrumbs">
              <MyButton text={"Sale"} Color={"#8c9196"} />
              <Text text={">"} Color={"#8c9196"} Margin={"0rem 0.5rem"} />
              <MyButton text={"Invoice"} Color={"#8c9196"} />
            </div>
            <Text
              text={`Invoice ${id} `}
              FontSize={"3rem"}
              FontWeight={"500"}
            />
          </div>
        </div>
        <div className="RightSec">
          <MyButton
            text={"New invoice"}
            Border={"1px solid #025D2D"}
            FontWeight={"500"}
            Padding={"0.8rem 2.2rem"}
            Radius={"12px"}
            Color={"#025D2D"}
          />
          <MyButton
            text={"Credit invoice"}
            Border={"1px solid #025D2D"}
            FontWeight={"500"}
            BGcolor={"#025D2D"}
            Padding={"0.8rem 2.2rem"}
            Color={"white"}
          />
          <MyButton
            Src={<FaAngleDown />}
            Border={"1px solid #025D2D"}
            FontWeight={"500"}
            BGcolor={"#025D2D"}
            Padding={"0.8rem 1.2rem"}
            Color={"white"}
          />
        </div>
      </div>

      <div className="InvoiceDetails">
        <div className="InvoiceDetailsLeft">
          <div className="CustomerHead">
            <Text text={"Customer"} />
          </div>
          <div className="CustomerDetailsSection">
            <div className="SearchInput">
              <input type="text" name="" id="" />
            </div>
            <div className="CustomerDetails">
              <MyButton text={"cus1"} Color={"#025D2D"} FontWeight={"600"} />
              <Text
                text={"c/o Bjarne Eigebrekk"}
                FontSize={"1.6rem"}
                Margin={"4px 0px 0px 0px"}
              />
              <Text
                text={"3647 HVITTINGFOSS"}
                FontSize={"1.6rem"}
                Margin={"4px 0px"}
              />
              <Text text={"cus1@gmail.com"} FontSize={"1.6rem"} />
            </div>
            <div className="EmailButton">
              <MyButton
                text={"Email"}
                BGcolor={"#F2FFF8"}
                FontWeight={"500"}
                FontSize={"1.4rem"}
                Border={"1px solid #025D2D"}
                Radius={"8px"}
                Padding={"0.5rem 2rem"}
              />
            </div>
          </div>
        </div>
        <div className="InvoiceDetailsRight">
          <div className="InvoiceDetailTabs">
            <Tabs>
              <TabList>
                <Tab>
                  <Text
                    text={"Details"}
                    FontSize={"1.6rem"}
                    cursor={"pointer"}
                  />
                </Tab>
                <Tab>
                  <Text
                    text={"Condition & Delivery"}
                    FontSize={"1.6rem"}
                    cursor={"pointer"}
                  />
                </Tab>
                <Tab>
                  <Text
                    text={"Comment"}
                    FontSize={"1.6rem"}
                    cursor={"pointer"}
                  />
                </Tab>
                <Tab>
                  <Text
                    text={"Sellers"}
                    FontSize={"1.6rem"}
                    cursor={"pointer"}
                  />
                </Tab>
                <Tab>
                  <Text
                    text={"Documents"}
                    FontSize={"1.6rem"}
                    cursor={"pointer"}
                  />
                </Tab>
                <Tab>
                  <Text
                    text={"Dispatch"}
                    FontSize={"1.6rem"}
                    cursor={"pointer"}
                  />
                </Tab>
                <Tab>
                  <Text
                    text={"Reminder"}
                    FontSize={"1.6rem"}
                    cursor={"pointer"}
                  />
                </Tab>
              </TabList>

              <TabPanel>
                <div className="TabOne">
                  <form action="">
                    <div className="FromData">
                      <div className="LeftCol">
                        <div className="FromField">
                          <label htmlFor="">Inv</label>
                          <input type="date" className="disabled" />
                        </div>
                        <div className="FromField">
                          <label htmlFor="">Due date</label>
                          <input type="date" />
                        </div>
                        <div className="FromField">
                          <label htmlFor="">Currency</label>
                          <select name="cars" id="cars" className="disabled">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                        <div className="FromField">
                          <label htmlFor="">Our Reference</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="RightCol">
                        <div className="FromField">
                          <label htmlFor="">Their reference</label>
                          <input type="text" />
                        </div>
                        <div className="FromField">
                          <label htmlFor="">Email address</label>
                          <input type="text" />
                        </div>
                        <div className="FromField">
                          <label htmlFor="">Project</label>
                          <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                        <div className="FromField">
                          <label htmlFor=""> Department</label>
                          <select name="cars" id="cars" >
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                        <div className="FromField">
                          <label htmlFor="">Tax management</label>
                          <select name="cars" id="cars" className="disabled">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </TabPanel>
              <TabPanel>
              <div className="TabTwo">
                  <form action="">
                    <div className="FromData">
                      <div className="LeftCol">
                        <div className="FromField">
                          <label htmlFor="">Requisition</label>
                          <input type="text"  />
                        </div>
                        <div className="FromField">
                          <label htmlFor="">Payment terms</label>
                          <select name="cars" id="cars" >
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                        <div className="FromField">
                          <label htmlFor=""> Delivery terms</label>
                          <select name="cars" id="cars" className="disabled">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                        <div className="FromField">
                          <label htmlFor="">KID</label>
                          <input type="text" className="disabled" />
                        </div>
                      </div>
                      <div className="RightCol">
                        <div className="FromField">
                          <label htmlFor=""> Contract reference</label>
                          <input type="text" />
                        </div>
                        <div className="FromField">
                          <label htmlFor="">Delivery date</label>
                          <input type="date" className="disabled"/>
                        </div>
                        <div className="FromField">
                          <label htmlFor="">Delivery address</label>
                          <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                        <div className="FromField">
                          <label htmlFor=""> Receiver</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
