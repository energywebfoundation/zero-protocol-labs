import { Button, SvgIconProps } from '@material-ui/core';
import { useStyles } from './welcome-page-submit-button.styles';

export interface IWelcomePageSubmitButtonProps {
  name: string;
  icon: SvgIconProps;
}

export const WelcomePageSubmitButton = ({
  name,
  icon,
}: IWelcomePageSubmitButtonProps) => {
  const styles = useStyles();
  return (
    <Button
      className={styles.btn}
      type="submit"
      variant={'contained'}
      endIcon={icon}
    >
      {name}
    </Button>
  );
};

export default WelcomePageSubmitButton;
