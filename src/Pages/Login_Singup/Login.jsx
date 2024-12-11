import MyButton from "../../Components/Button/Button";
import ImageComp from "../../Components/ImageComp/ImageComp";
import Label_Input from "../../Components/Label_Input/Label_Input";
import Text from "../../Components/Text/Text";

import "./Login.css";
export default function Login() {
  return (
    <div className="LoginPage">
      <div className="LoginPageWrapper">
        <div className="Logo">
          <ImageComp Src={"./Images/Navbar-Images/MainLogo.png"} />
        </div>
        <div className="LoginForm">
          <Label_Input
            Label={"Email <br>"}
            type={"text"}
            Border={"1px solid #ccc"}
            Radius={"8px"}
            Padding={"1rem"}
            Width={"97%"}
            Margin={"1rem 0rem 4rem 0rem"}

          />
          <Label_Input
            Label={"Password <br>"}
            type={"password"}
            Border={"1px solid #ccc"}
            Radius={"8px"}
            Padding={"1rem"}
            Width={"97%"}
            Margin={"1rem 0rem 2rem 0rem"}
          />
          <div className="LoginWrapper">
          <MyButton
            RouteLink={"landing"}
            text={"Login"}
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
          <div className="NotRegister" >
          <Text text={"Not Register:"} FontSize={"1.5rem"} />
          <MyButton RouteLink={"/signup"} text={"Sign up"} FontSize={"1.5rem"} Color={"blue"} />
          </div>
          
        </div>
      </div>
    </div>
  );
}
