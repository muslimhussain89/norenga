import styled from "styled-components";

export default function Label_Input({
  Label,
  type,
  Width,
  Placeholder,
  Height,
  Border,
  Radius,
  Margin,
  Padding,
  FontSize,
  TextTransform,
  Color,
  FontWeight,
  BgColor,
  LineHeight,
  Cursor,

  LabelWidth,
  LabelHeight,
  LabelBorder,
  LabelRadius,
  LabelMargin,
  LabelPadding,
  LabelFontSize,
  LabelTextTransform,
  LabelColor,
  LabelFontWeight,
  LabelBgColor,
  LabelLineHeight,
  LabelCursor
}) {
  const MyLabel = styled.label`
    width: ${() => (LabelWidth ? LabelWidth : "auto")};
    height: ${() => (LabelHeight ? LabelHeight : "auto")};
    border: ${() => (LabelBorder ? LabelBorder : "none")};
    border-radius: ${() => (LabelRadius ? LabelRadius : "0")};
    margin: ${() => (LabelMargin ? LabelMargin : "0")};
    padding: ${() => (LabelPadding ? LabelPadding : "0")};
    font-size: ${() => (LabelFontSize ? LabelFontSize : "2rem")};
    text-transform: ${() => (LabelTextTransform ? LabelTextTransform : "none")};
    color: ${() => (LabelColor ? LabelColor : "black")};
    font-weight: ${() => (LabelFontWeight ? FontWeight : "400")};
    background-color: ${() => (LabelBgColor ? BgColor : "transparent")};
    line-height: ${() => (LabelLineHeight ? LabelLineHeight : "auto")};
    cursor: ${() => (LabelCursor ? LabelCursor : "text")};
  `;

  const MyInput = styled.input`
    width: ${() => (Width ? Width : "auto")};
    height: ${() => (Height ? Height : "auto")};
    border: ${() => (Border ? Border : "none")};
    border-radius: ${() => (Radius ? Radius : "0")};
    margin: ${() => (Margin ? Margin : "0")};
    padding: ${() => (Padding ? Padding : "0")};
    font-size: ${() => (FontSize ? FontSize : "2rem")};
    text-transform: ${() => (TextTransform ? TextTransform : "none")};
    color: ${() => (Color ? Color : "black")};
    font-weight: ${() => (FontWeight ? FontWeight : "400")};
    background-color: ${() => (BgColor ? BgColor : "transparent")};
    line-height: ${() => (LineHeight ? LineHeight : "auto")};
    cursor: ${() => (Cursor ? Cursor : "text")};
  `;


  return (
    <div className="InputField">
      {Label && <MyLabel htmlFor="" dangerouslySetInnerHTML={{ __html: Label}}></MyLabel>}
      <MyInput type={type} placeholder={Placeholder} />
    </div>
  );
}
