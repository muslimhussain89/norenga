import { useState } from "react";
import MyButton from "../../Components/Button/Button";
import ImageComp from "../../Components/ImageComp/ImageComp";
import Label_Input from "../../Components/Label_Input/Label_Input";
import Text from "../../Components/Text/Text";
import "./Login.css";

export default function SignUp() {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectWhants, setSelectWhants] = useState("");
  const [useAccountant, setUseAccountant] = useState("");
  const [getInTouch, setGetInTouch] = useState("");


  const handleSelectChange = (e) => {
    setSelectedRole(e.target.value);
  };
  const handleselectWhatYouWant = (e) => {
    setSelectWhants(e.target.value);
  };
  const handleUseAccountant = (e) => {
    setUseAccountant(e.target.value);
  };
  const handleGetInTouch = (e) => {
    setGetInTouch(e.target.value);
  };

  

  return (
    <div className="LoginPage">
      <div className="LoginPageWrapper">
        <div className="Logo">
          <ImageComp Src={"./Images/Navbar-Images/MainLogo.png"} />
        </div>
        <div className="SignUpForm">
          <div className="WhoAreYouSelect">
            <label htmlFor="">Who are you ?</label>
            <select
              id="whoareyou"
              name="whoareyou"
              value={selectedRole}
              onChange={handleSelectChange}
            >
              <option value="">select</option>
              <option value="accountant">Accountant</option>
              <option value="company">Company or organization</option>
            </select>
          </div>

          {/* IF SELECT ACCOUNTANT UNDER WHAT YOU WANT */}
          {selectedRole === "accountant" && (
            <div className="AccountantForm">
              <Label_Input
                Label={"Name of accounting firm <br>"}
                type={"text"}
                Border={"1px solid #ccc"}
                Radius={"8px"}
                Padding={"1rem"}
                Width={"97%"}
                Margin={"1rem 0rem 2rem 0rem"}
              />
              <Label_Input
                Label={"Your full name* <br>"}
                type={"text"}
                Border={"1px solid #ccc"}
                Radius={"8px"}
                Padding={"1rem"}
                Width={"97%"}
                Margin={"1rem 0rem 2rem 0rem"}
              />
              <Label_Input
                Label={"Your email* <br>"}
                type={"email"}
                Border={"1px solid #ccc"}
                Radius={"8px"}
                Padding={"1rem"}
                Width={"97%"}
                Margin={"1rem 0rem 2rem 0rem"}
              />
              <Label_Input
                Label={"Your phone number"}
                type={"number"}
                Border={"1px solid #ccc"}
                Radius={"8px"}
                Padding={"1rem"}
                Width={"97%"}
                Margin={"1rem 0rem 2rem 0rem"}
              />
              <div className="LoginWrapper">
                <MyButton
                  RouteLink={"landing"}
                  text={"Sign Up"}
                  Color={"white"}
                  FontWeight={"500"}
                  BGcolor={"#025D2D"}
                  HoverBg={"transparent"}
                  HoverColor={"#025D2D"}
                  Border={"1px solid #025D2D"}
                  Padding={"1.4rem 10rem"}
                  Radius={"12px"}
                  Margin={"4rem 0rem 8rem 0rem"}
                />
              </div>
            </div>
          )}

          {/* IF SELECT COMPANY UNDER WHAT YOU WANT */}
          {selectedRole === "company" && (
            <div className="AccountantForm">
              <div className="WhoAreYouSelect">
                <label htmlFor="">What do you want?</label>
                <select
                  id="whatyouwant"
                  name="whatyouwant"
                  value={selectWhants}
                  onChange={handleselectWhatYouWant}
                >
                  <option value={""}>select</option>
                  <option value="accountantSelf">
                    Keep the account yourself
                  </option>
                  <option value="useAccountant">Use the accountant</option>
                </select>
              </div>
            </div>
          )}




          {/* IF SELECTED kEEP THE ACCOUNTANT YOUSELF UNDER THE WHAT DO YOU WANT  */}
          {selectWhants === "accountantSelf" && (
            <div className="AccountantForm">
              <div className="WhoAreYouSelect">
                <label htmlFor="">How to use Accountant</label>
                <select
                  id="HowToUseAccountant"
                  name="HowToUseAccountant"
                  value={useAccountant}
                  onChange={handleUseAccountant}
                >
                  <option>select</option>
                  <option value="abc">Let me try DNB Accounting</option>
                  <option value="asd">Let me try SpareBank 1 Regnskap</option>
                  <option value="asd">Let me try Eika Regnskap</option>
                  <option value="contacted">I want to be contacted</option>
                </select>
              </div>
            </div>
          )}

          {/* IF SELECTED USE THE ACCOUNT UNDER THE WHAT DO YOU WANT */}
          {selectWhants === "useAccountant" && (
            <div className="AccountantForm">
              <div className="WhoAreYouSelect">
                <label htmlFor="">Use an accountant</label>
                <select
                  id="HowToUseAccountant"
                  name="HowToUseAccountant"
                  value={getInTouch}
                  onChange={handleGetInTouch}
                >
                  <option>select</option>
                  <option value="TouchAccountant">
                    Put me in touch with an accountant
                  </option>
                  <option value="AlreadyAccoutant">
                    I already have an accountant
                  </option>
                </select>
              </div>
            </div>
          )}


          {/* IF SELECTED I WANT TO BE CONACTED */}
          {useAccountant === "contacted" && (
            <div className="AccountantForm">
              <Label_Input
                Label={"Name of company or organization* <br>"}
                type={"text"}
                Border={"1px solid #ccc"}
                Radius={"8px"}
                Padding={"1rem"}
                Width={"97%"}
                Margin={"1rem 0rem 2rem 0rem"}
              />
              <Label_Input
                Label={"Your full name* <br>"}
                type={"text"}
                Border={"1px solid #ccc"}
                Radius={"8px"}
                Padding={"1rem"}
                Width={"97%"}
                Margin={"1rem 0rem 2rem 0rem"}
              />
              <Label_Input
                Label={"Your email* <br>"}
                type={"email"}
                Border={"1px solid #ccc"}
                Radius={"8px"}
                Padding={"1rem"}
                Width={"97%"}
                Margin={"1rem 0rem 2rem 0rem"}
              />
              <Label_Input
                Label={"Your phone number"}
                type={"number"}
                Border={"1px solid #ccc"}
                Radius={"8px"}
                Padding={"1rem"}
                Width={"97%"}
                Margin={"1rem 0rem 2rem 0rem"}
              />
              <div className="LoginWrapper">
                <MyButton
                  RouteLink={"landing"}
                  text={"Sign Up"}
                  Color={"white"}
                  FontWeight={"500"}
                  BGcolor={"#025D2D"}
                  HoverBg={"transparent"}
                  HoverColor={"#025D2D"}
                  Border={"1px solid #025D2D"}
                  Padding={"1.4rem 10rem"}
                  Radius={"12px"}
                  Margin={"4rem 0rem 8rem 0rem"}
                />
              </div>
            </div>
          )}


          {
            (getInTouch === "TouchAccountant" || getInTouch === "AlreadyAccoutant")  && (
              <div className="AccountantForm">
              <Label_Input
                Label={"Your Business <br>"}
                type={"text"}
                Border={"1px solid #ccc"}
                Radius={"8px"}
                Padding={"1rem"}
                Width={"97%"}
                Margin={"1rem 0rem 2rem 0rem"}
              />
              <div className="LoginWrapper">
                <MyButton
                  RouteLink={"landing"}
                  text={"Sign Up"}
                  Color={"white"}
                  FontWeight={"500"}
                  BGcolor={"#025D2D"}
                  HoverBg={"transparent"}
                  HoverColor={"#025D2D"}
                  Border={"1px solid #025D2D"}
                  Padding={"1.4rem 10rem"}
                  Radius={"12px"}
                  Margin={"4rem 0rem 8rem 0rem"}
                />
              </div>
            </div>
            )
          }

          






          <div className="NotRegister">
            <Text text={"Registered User:"} FontSize={"1.5rem"} />
            <MyButton
              RouteLink={"/"}
              text={"Login"}
              FontSize={"1.5rem"}
              Color={"blue"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
