import styled from '@emotion/styled';
import { Box } from '@material-ui/core';

/* eslint-disable-next-line */
export interface FieldLabelProps {
  width?: string;
  labelText: string;
  mb?: string;
  className?: string;
}

const StyledFieldLabel = styled(Box)`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #2d1155;
`;

export const FieldLabel = ({
  className,
  mb,
  labelText,
  width,
}: FieldLabelProps) => (
  <StyledFieldLabel
    className={className}
    mb={mb}
    minWidth={width}
    maxWidth={width}
  >
    {labelText}
  </StyledFieldLabel>
);

export default FieldLabel;
