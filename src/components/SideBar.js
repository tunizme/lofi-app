import { Tooltip } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const SideBar = () => {
  const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
    & .MuiTooltip-tooltip {
      font-size: 16px !important;
      margin-right: 40px !important;
      background-color: #363636 !important;
    }
  `;
  return (
    <div className="sidebar gap-10 d-flex flex-column aign-items-center justify-content-center">
      <div className=" container-action px-1">
        <StyledTooltip title="Mixer" placement="left" followCursor>
          <div className="action-wrapper">
            <div className="action">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                className="mdl-js"
              >
                <path
                  opacity="0.4"
                  d="M4.1665 17.5L4.1665 12.5M4.1665 5.83333V2.5M9.99984 17.5L9.99984 12.5M9.99984 5.83333V2.5M15.8332 17.5V14.1667M15.8332 7.5V2.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9.16671C10.9205 9.16671 11.6667 8.42052 11.6667 7.50004C11.6667 6.57957 10.9205 5.83337 10 5.83337C9.07953 5.83337 8.33333 6.57957 8.33333 7.50004C8.33333 8.42052 9.07953 9.16671 10 9.16671Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8333 14.1667C16.7538 14.1667 17.5 13.4205 17.5 12.5C17.5 11.5796 16.7538 10.8334 15.8333 10.8334C14.9129 10.8334 14.1667 11.5796 14.1667 12.5C14.1667 13.4205 14.9129 14.1667 15.8333 14.1667Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.16667 12.5C5.08714 12.5 5.83333 11.7538 5.83333 10.8334C5.83333 9.9129 5.08714 9.16671 4.16667 9.16671C3.24619 9.16671 2.5 9.9129 2.5 10.8334C2.5 11.7538 3.24619 12.5 4.16667 12.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="action-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="24"
                viewBox="0 0 18 18"
                fill="none"
                className="mdl-js"
              >
                <path
                  d="M3.16667 16.5L3.16667 11.5M3.16667 11.5C4.08714 11.5 4.83333 10.7538 4.83333 9.83333C4.83333 8.91286 4.08714 8.16667 3.16667 8.16667C2.24619 8.16667 1.5 8.91286 1.5 9.83333C1.5 10.7538 2.24619 11.5 3.16667 11.5ZM3.16667 4.83333V1.5M9 16.5V11.5M9 4.83333V1.5M9 4.83333C8.07953 4.83333 7.33333 5.57953 7.33333 6.5C7.33333 7.42047 8.07953 8.16667 9 8.16667C9.92047 8.16667 10.6667 7.42047 10.6667 6.5C10.6667 5.57953 9.92047 4.83333 9 4.83333ZM14.8333 16.5V13.1667M14.8333 13.1667C15.7538 13.1667 16.5 12.4205 16.5 11.5C16.5 10.5795 15.7538 9.83333 14.8333 9.83333C13.9129 9.83333 13.1667 10.5795 13.1667 11.5C13.1667 12.4205 13.9129 13.1667 14.8333 13.1667ZM14.8333 6.5V1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </StyledTooltip>
        <StyledTooltip title="Templates" placement="left" followCursor>
          <div className="action-wrapper">
            <div className="action">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                className="mdl-js"
              >
                <g clipPath="url(#clip0_356_118)">
                  <path
                    opacity="0.4"
                    d="M10 17.0601C10.8846 17.8519 12.0527 18.3333 13.3333 18.3333C16.0948 18.3333 18.3333 16.0947 18.3333 13.3333C18.3333 11.0275 16.7726 9.08627 14.6499 8.50842"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.34999 8.50843C3.22728 9.08627 1.6665 11.0275 1.6665 13.3333C1.6665 16.0947 3.90508 18.3333 6.6665 18.3333C9.42793 18.3333 11.6665 16.0947 11.6665 13.3333C11.6665 12.6829 11.5423 12.0615 11.3164 11.4915M14.9998 6.66663C14.9998 9.42805 12.7613 11.6666 9.99984 11.6666C7.23841 11.6666 4.99984 9.42805 4.99984 6.66663C4.99984 3.9052 7.23841 1.66663 9.99984 1.66663C12.7613 1.66663 14.9998 3.9052 14.9998 6.66663Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_356_118">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="action-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                className="mdl-js"
              >
                <path
                  d="M9.99983 17.0601C10.8844 17.8519 12.0526 18.3333 13.3332 18.3333C16.0946 18.3333 18.3332 16.0947 18.3332 13.3333C18.3332 11.0275 16.7724 9.08628 14.6497 8.50844M5.34999 8.50843C3.22728 9.08627 1.6665 11.0275 1.6665 13.3333C1.6665 16.0947 3.90508 18.3333 6.6665 18.3333C9.42793 18.3333 11.6665 16.0947 11.6665 13.3333C11.6665 12.6829 11.5423 12.0615 11.3164 11.4915M14.9998 6.66663C14.9998 9.42805 12.7613 11.6666 9.99984 11.6666C7.23841 11.6666 4.99984 9.42805 4.99984 6.66663C4.99984 3.9052 7.23841 1.66663 9.99984 1.66663C12.7613 1.66663 14.9998 3.9052 14.9998 6.66663Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </StyledTooltip>
        <StyledTooltip title="Scenes" placement="left" followCursor>
          <div className="action-wrapper">
            <div className="action">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                className="mdl-js"
              >
                <g clipPath="url(#clip0_356_347)">
                  <path
                    opacity="0.4"
                    d="M7.08317 8.74996C8.00365 8.74996 8.74984 8.00377 8.74984 7.08329C8.74984 6.16282 8.00365 5.41663 7.08317 5.41663C6.1627 5.41663 5.4165 6.16282 5.4165 7.08329C5.4165 8.00377 6.1627 8.74996 7.08317 8.74996Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.99949 16.667L12.3904 9.2761C12.7204 8.94609 12.8854 8.78108 13.0757 8.71926C13.243 8.66488 13.4233 8.66488 13.5907 8.71926C13.781 8.78108 13.946 8.9461 14.276 9.2761L17.8375 12.8377M18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 5.39759 5.39746 1.66663 9.99984 1.66663C14.6022 1.66663 18.3332 5.39759 18.3332 9.99996Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_356_347">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="action-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                className="mdl-js"
              >
                <path
                  d="M4.99949 16.667L12.3904 9.2761C12.7204 8.94609 12.8854 8.78108 13.0757 8.71926C13.243 8.66487 13.4233 8.66487 13.5907 8.71926C13.781 8.78108 13.946 8.94609 14.276 9.2761L17.8375 12.8377M8.74984 7.08329C8.74984 8.00377 8.00365 8.74996 7.08317 8.74996C6.1627 8.74996 5.4165 8.00377 5.4165 7.08329C5.4165 6.16282 6.1627 5.41663 7.08317 5.41663C8.00365 5.41663 8.74984 6.16282 8.74984 7.08329ZM18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 5.39759 5.39746 1.66663 9.99984 1.66663C14.6022 1.66663 18.3332 5.39759 18.3332 9.99996Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </StyledTooltip>
        <StyledTooltip title="Tools" placement="left" followCursor>
          <div className="action-wrapper">
            <div className="action">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                className="mdl-js"
              >
                <path
                  opacity="0.4"
                  d="M16.167 11.6669H13.0003C12.5336 11.6669 12.3003 11.6669 12.122 11.7577C11.9652 11.8376 11.8377 11.9651 11.7578 12.1219C11.667 12.3001 11.667 12.5335 11.667 13.0002V16.1669C11.667 16.6336 11.667 16.8669 11.7578 17.0452C11.8377 17.202 11.9652 17.3295 12.122 17.4094C12.3003 17.5002 12.5336 17.5002 13.0003 17.5002H16.167C16.6337 17.5002 16.8671 17.5002 17.0453 17.4094C17.2021 17.3295 17.3296 17.202 17.4095 17.0452C17.5003 16.8669 17.5003 16.6336 17.5003 16.1669V13.0002C17.5003 12.5335 17.5003 12.3001 17.4095 12.1219C17.3296 11.9651 17.2021 11.8376 17.0453 11.7577C16.8671 11.6669 16.6337 11.6669 16.167 11.6669Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 2.5H3.83333C3.36662 2.5 3.13327 2.5 2.95501 2.59083C2.79821 2.67072 2.67072 2.79821 2.59083 2.95501C2.5 3.13327 2.5 3.36662 2.5 3.83333V7C2.5 7.46671 2.5 7.70007 2.59083 7.87833C2.67072 8.03513 2.79821 8.16261 2.95501 8.24251C3.13327 8.33333 3.36662 8.33333 3.83333 8.33333H7C7.46671 8.33333 7.70007 8.33333 7.87833 8.24251C8.03513 8.16261 8.16261 8.03513 8.24251 7.87833C8.33333 7.70007 8.33333 7.46671 8.33333 7V3.83333C8.33333 3.36662 8.33333 3.13327 8.24251 2.95501C8.16261 2.79821 8.03513 2.67072 7.87833 2.59083C7.70007 2.5 7.46671 2.5 7 2.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.1667 2.5H13C12.5333 2.5 12.2999 2.5 12.1217 2.59083C11.9649 2.67072 11.8374 2.79821 11.7575 2.95501C11.6667 3.13327 11.6667 3.36662 11.6667 3.83333V7C11.6667 7.46671 11.6667 7.70007 11.7575 7.87833C11.8374 8.03513 11.9649 8.16261 12.1217 8.24251C12.2999 8.33333 12.5333 8.33333 13 8.33333H16.1667C16.6334 8.33333 16.8667 8.33333 17.045 8.24251C17.2018 8.16261 17.3293 8.03513 17.4092 7.87833C17.5 7.70007 17.5 7.46671 17.5 7V3.83333C17.5 3.36662 17.5 3.13327 17.4092 2.95501C17.3293 2.79821 17.2018 2.67072 17.045 2.59083C16.8667 2.5 16.6334 2.5 16.1667 2.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 11.6667H3.83333C3.36662 11.6667 3.13327 11.6667 2.95501 11.7575C2.79821 11.8374 2.67072 11.9649 2.59083 12.1217C2.5 12.2999 2.5 12.5333 2.5 13V16.1667C2.5 16.6334 2.5 16.8667 2.59083 17.045C2.67072 17.2018 2.79821 17.3293 2.95501 17.4092C3.13327 17.5 3.36662 17.5 3.83333 17.5H7C7.46671 17.5 7.70007 17.5 7.87833 17.4092C8.03513 17.3293 8.16261 17.2018 8.24251 17.045C8.33333 16.8667 8.33333 16.6334 8.33333 16.1667V13C8.33333 12.5333 8.33333 12.2999 8.24251 12.1217C8.16261 11.9649 8.03513 11.8374 7.87833 11.7575C7.70007 11.6667 7.46671 11.6667 7 11.6667Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="action-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                className="mdl-js"
              >
                <path
                  d="M7 2.5H3.83333C3.36662 2.5 3.13327 2.5 2.95501 2.59083C2.79821 2.67072 2.67072 2.79821 2.59083 2.95501C2.5 3.13327 2.5 3.36662 2.5 3.83333V7C2.5 7.46671 2.5 7.70007 2.59083 7.87833C2.67072 8.03513 2.79821 8.16261 2.95501 8.24251C3.13327 8.33333 3.36662 8.33333 3.83333 8.33333H7C7.46671 8.33333 7.70007 8.33333 7.87833 8.24251C8.03513 8.16261 8.16261 8.03513 8.24251 7.87833C8.33333 7.70007 8.33333 7.46671 8.33333 7V3.83333C8.33333 3.36662 8.33333 3.13327 8.24251 2.95501C8.16261 2.79821 8.03513 2.67072 7.87833 2.59083C7.70007 2.5 7.46671 2.5 7 2.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.1667 2.5H13C12.5333 2.5 12.2999 2.5 12.1217 2.59083C11.9649 2.67072 11.8374 2.79821 11.7575 2.95501C11.6667 3.13327 11.6667 3.36662 11.6667 3.83333V7C11.6667 7.46671 11.6667 7.70007 11.7575 7.87833C11.8374 8.03513 11.9649 8.16261 12.1217 8.24251C12.2999 8.33333 12.5333 8.33333 13 8.33333H16.1667C16.6334 8.33333 16.8667 8.33333 17.045 8.24251C17.2018 8.16261 17.3293 8.03513 17.4092 7.87833C17.5 7.70007 17.5 7.46671 17.5 7V3.83333C17.5 3.36662 17.5 3.13327 17.4092 2.95501C17.3293 2.79821 17.2018 2.67072 17.045 2.59083C16.8667 2.5 16.6334 2.5 16.1667 2.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.1667 11.6667H13C12.5333 11.6667 12.2999 11.6667 12.1217 11.7575C11.9649 11.8374 11.8374 11.9649 11.7575 12.1217C11.6667 12.2999 11.6667 12.5333 11.6667 13V16.1667C11.6667 16.6334 11.6667 16.8667 11.7575 17.045C11.8374 17.2018 11.9649 17.3293 12.1217 17.4092C12.2999 17.5 12.5333 17.5 13 17.5H16.1667C16.6334 17.5 16.8667 17.5 17.045 17.4092C17.2018 17.3293 17.3293 17.2018 17.4092 17.045C17.5 16.8667 17.5 16.6334 17.5 16.1667V13C17.5 12.5333 17.5 12.2999 17.4092 12.1217C17.3293 11.9649 17.2018 11.8374 17.045 11.7575C16.8667 11.6667 16.6334 11.6667 16.1667 11.6667Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 11.6667H3.83333C3.36662 11.6667 3.13327 11.6667 2.95501 11.7575C2.79821 11.8374 2.67072 11.9649 2.59083 12.1217C2.5 12.2999 2.5 12.5333 2.5 13V16.1667C2.5 16.6334 2.5 16.8667 2.59083 17.045C2.67072 17.2018 2.79821 17.3293 2.95501 17.4092C3.13327 17.5 3.36662 17.5 3.83333 17.5H7C7.46671 17.5 7.70007 17.5 7.87833 17.4092C8.03513 17.3293 8.16261 17.2018 8.24251 17.045C8.33333 16.8667 8.33333 16.6334 8.33333 16.1667V13C8.33333 12.5333 8.33333 12.2999 8.24251 12.1217C8.16261 11.9649 8.03513 11.8374 7.87833 11.7575C7.70007 11.6667 7.46671 11.6667 7 11.6667Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </StyledTooltip>
      </div>
    </div>
  );
};

export default SideBar;
