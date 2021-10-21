import { Button } from '@material-ui/core';
import { useStyles } from './generic-submit-button.styles';

export interface IGenericSubmitButtonProps {
  name: string;
  bgColor: string;
  color: string;
  hoverBgColor: string;
  hoverColor: string;
  iconColor: string;
  hoverIconColor: string;
  icon: any;
}

export const GenericSubmitButton = ({
  name,
  bgColor,
  color,
  hoverBgColor,
  hoverColor,
  iconColor,
  hoverIconColor,
  icon,
}: IGenericSubmitButtonProps) => {
  const styles = useStyles({
    bgColor,
    color,
    hoverBgColor,
    hoverColor,
    iconColor,
    hoverIconColor,
  });
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

export default GenericSubmitButton;
