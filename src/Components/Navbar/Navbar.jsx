import MyButton from "../Button/Button";
import "./Navbar.css"
import { FiMenu } from "react-icons/fi";


export default function Navbar() {
  return (
    <div className="Navbar-main-sec">
      <div className="Navbar-Left-Sec">
        <div className="Sidemenu-Button">
          <MyButton

            Src={<FiMenu size={25} />
            }
            Margin={"0px 2rem 0rem 0rem"}          
              
            />
        </div>
        <div className="Navbar-Logo">
          <MyButton
          RouteLink={"/"}
            Src={"./Images/Navbar-Images/MainLogo.png"} 
            ImgWidth={"100%"}
            Width={"16rem"}
          />
        </div>
      </div>
      <div className="Navbar-Right-Sec">
        <MyButton Src={<svg width={25} viewBox="0 0 24 24"><path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15Z" fill="currentColor"></path></svg>} />
        <MyButton Src={<svg width={25} viewBox="0 0 24 24"><path d="M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4Zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754V19Zm2-8h2v2h-2v-2Zm0 4h2v2h-2v-2Zm0-8h2v2h-2V7Zm-4 0h2v2h-2V7Z" fill="currentColor"></path></svg>} />
        <MyButton Src={<svg width={25} viewBox="0 0 24 24"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm7 8H7v2h4v4h2v-4h4v-2h-4V7h-2v4Z" fill="currentColor"></path></svg>} />
        <MyButton Src={<svg width={25} viewBox="0 0 24 24"><path d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2ZM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18Zm4.5 3h5a2.5 2.5 0 0 1-5 0Z" fill="currentColor"></path></svg>} />
        <MyButton Src={<svg width={25} viewBox="0 0 24 24"><path d="M3.34 17a10.017 10.017 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672A9.99 9.99 0 0 1 20.66 7c.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.5 4.337 3 3 0 0 0-4.632 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.016 10.016 0 0 1 3.34 17Zm5.66.196a4.994 4.994 0 0 1 2.25 2.77c.5.047 1 .048 1.5 0a4.993 4.993 0 0 1 2.25-2.77 4.993 4.993 0 0 1 3.525-.564c.29-.408.54-.843.748-1.298A4.992 4.992 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334-.21-.455-.46-.89-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.992 4.992 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001a4.993 4.993 0 0 1-2.25 2.77 4.993 4.993 0 0 1-3.526.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12a4.99 4.99 0 0 1-1.273 3.334c.21.455.46.89.75 1.298A4.993 4.993 0 0 1 9 17.196ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor"></path></svg>} />
        <MyButton Src={<svg width={25} viewBox="0 0 24 24"><path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2Zm-8-9A6 6 0 1 1 12 .998 6 6 0 0 1 12 13Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="currentColor"></path></svg>} />
        <MyButton Src={<svg width={25} viewBox="0 0 24 24"><path d="M12 19C12.828 19 13.5 19.672 13.5 20.5C13.5 21.328 12.828 22 12 22C11.172 22 10.5 21.328 10.5 20.5C10.5 19.672 11.172 19 12 19ZM12 2C15.314 2 18 4.686 18 8C18 10.165 17.247 11.29 15.326 12.923C13.399 14.56 13 15.297 13 17H11C11 14.526 11.787 13.305 14.031 11.399C15.548 10.11 16 9.434 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8V9H6V8C6 4.686 8.686 2 12 2Z" fill="currentColor"></path></svg>} />

      </div>
    </div>
  );
}
