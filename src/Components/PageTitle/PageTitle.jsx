import MyButton from "../Button/Button";
import Text from "../Text/Text";
import "./PageTitle.css"
import { IoHelpBuoySharp } from "react-icons/io5";


export default function PageTitle({LinkText,PageTitle, Button1Text, Button2Text}) {

  
  return (
    <div className="Page-Title">
      <div className="Page-Title-Left">
      <MyButton text={LinkText} FontWeight={"400"} Color={"#8c9196"}  />
      <Text text={PageTitle} FontSize={"2.8rem"} FontWeight={"500"} LineHeight={"0.8"} />
      </div>
      <div className="Page-Title-Right">
        <MyButton Src={<IoHelpBuoySharp  />} text={Button1Text} BGcolor={"#fef9ee"} Padding={"0.5rem 2.2rem"} Radius={"25px"} HoverBorder={"1px solid black"} Border={"1px solid #f7d998"} Margin={"0px 1rem 0rem 0rem"}  />
        <MyButton text={Button2Text} Color={"white"} FontWeight={"500"}  BGcolor={"#025D2D"} HoverBg={"transparent"} HoverColor={"#025D2D"} Border={"1px solid #025D2D"} Padding={"0.8rem 2.2rem"} Radius={"12px"} />
      </div>
    </div>
  )
}
