import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, handleClick}) => (
  <CustomButtonContainer onClick={handleClick}>{children}</CustomButtonContainer>
);

export default CustomButton;
