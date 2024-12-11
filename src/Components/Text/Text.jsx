import styled from "styled-components";

/***
 * @author Muslim
 * @param {String} Width - width of the P tag
 * @param {String} Height - height of the P tag
 * @param {String} Border - border of the P tag
 *  @param {String} Radius - radius of the P tag
 * @param {String} Margin - margin of the P tag
 * @param {String} Padding - padding of the P tag
 * @param {String} FontSize - fontsize of the P tag
 * @param {String} TextTransform - Transformation of the P tag
 */



export default function Text({text, Width, Height, Border, Radius, Margin, Padding, FontSize,LineHeight, TextTransform, Color, FontWeight, BgColor,cursor}) {
    const Text  = styled.p`
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
    cursor: ${() => (cursor ? cursor : "text")};


    `;

  return (
        <Text dangerouslySetInnerHTML={{ __html: text}}  />
  )
}
