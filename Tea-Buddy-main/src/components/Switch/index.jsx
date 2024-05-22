// import React from "react";

// // import SwitchProvider from "@dhiwise/react-switch";
// import PropTypes from "prop-types";

// const variants = {
//   swtOutlineGray400: {
//     offColor: "#ffffff",
//     onColor: "#ffffff",
//     offHandleColor: "#1a1919",
//     onHandleColor: "#1a1919",
//   },
// };
// const sizes = {
//   xs: {
//     width: 38,
//     height: 19,
//   },
// };

// const Switch = ({
//   value = false,
//   className,
//   checkedIcon = <></>,
//   uncheckedIcon = <></>,
//   onChange,
//   variant = "swtOutlineGray400",
//   size = "xs",
// }) => {
//   const [selected, setSelected] = React.useState(value);
//   const handleChange = (val) => {
//     setSelected(val);
//     onChange?.(val);
//   };
//   return (
//     <div className={className}>
//       <SwitchProvider
//         checked={selected}
//         onChange={handleChange}
//         {...variants[variant]}
//         {...sizes[size]}
//         checkedIcon={checkedIcon}
//         uncheckedIcon={uncheckedIcon}
//       />
//     </div>
//   );
// };

// Switch.propTypes = {
//   value: PropTypes.bool,
//   className: PropTypes.string,
//   checkedIcon: PropTypes.node,
//   uncheckedIcon: PropTypes.node,
//   onChange: PropTypes.func,
//   size: PropTypes.oneOf(["xs"]),
//   variant: PropTypes.oneOf(["swtOutlineGray400"]),
// };

// export { Switch };
