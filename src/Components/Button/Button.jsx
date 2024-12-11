import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * MyButton Component
 */
export default function MyButton({
  text,
  Color,
  BGcolor,
  FontSize,
  FontWeight,
  handleClick,
  RouteLink,
  Src,
  Border,
  Margin,
  Padding,
  Radius,
  ImgWidth,
  ImgHeight,
  BtnImgMargn,
  Width,
  TextTransform,
  WhiteSpace,
  cursor,
  target,
  Gap,
  HoverBg,
  HoverBorder,
  HoverColor
}) {
  const UnimicroButton = styled.button`
    color: ${() => (Color ? Color : "black")};
    background: ${() => (BGcolor ? BGcolor : "transparent")};
    font-size: ${() => (FontSize ? FontSize : "2rem")};
    font-weight: ${() => (FontWeight ? FontWeight : "400")};
    border: ${() => (Border ? Border : "none")};
    padding: ${() => (Padding ? Padding : "0")};
    margin: ${() => (Margin ? Margin : "0")};
    border-radius: ${() => (Radius ? Radius : "0")};
    width: ${() => (Width ? Width : "auto")};
    text-transform: ${() => (TextTransform ? TextTransform : "auto")};
    white-space: ${() => (WhiteSpace ? WhiteSpace : "nowrap")};
    cursor: ${() => (cursor ? cursor : "pointer")};
    display: inline-flex;
    align-items: center;
    gap: ${() => (Gap ? Gap : "auto")};
    &:hover {
      background: ${() => (HoverBg ? HoverBg : "auto")};
      border: ${() => (HoverBorder ? HoverBorder : "auto")};
      color: ${() => (HoverColor ? HoverColor : "")};
    }
  `;
  const DashedButtonImage = styled.img`
    margin: ${() => (BtnImgMargn ? BtnImgMargn : "auto")};
    width: ${() => (ImgWidth ? ImgWidth : "auto")};
    height: ${() => (ImgHeight ? ImgHeight : "auto")};
  `;

  return (
    <>
      {RouteLink ? (
        <Link to={RouteLink} target={target}>
          <UnimicroButton onClick={handleClick}>
            {Src && typeof Src === "string" ? (
              <DashedButtonImage
                className="BCH-Button-logo"
                src={Src}
                alt="Button Icon"
              />
            ) : (
              Src && <div className="button-svg-wrapper">{Src}</div> // Render inline SVG
            )}
            {text}
          </UnimicroButton>
        </Link>
      ) : (
        <UnimicroButton onClick={handleClick}>
          {Src && typeof Src === "string" ? (
            <DashedButtonImage
              className="BCH-Button-logo"
              src={Src}
              alt="Button Icon"
            />
          ) : (
            Src && <div className="button-svg-wrapper">{Src}</div> // Render inline SVG
          )}
          {text}
        </UnimicroButton>
      )}
    </>
  );
}
