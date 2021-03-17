import { CustomInputContainer } from "./custom-input.styles";

const CustomInput = ({ type, placeholder, handleChange, name }) => (
  <CustomInputContainer name={name} type={type} placeholder={placeholder} onChange={handleChange} />
);

export default CustomInput;
