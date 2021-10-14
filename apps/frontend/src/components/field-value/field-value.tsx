import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import CopyToClipboard from '../copy-to-clipboard/copy-to-clipboard';

/* eslint-disable-next-line */
export interface FieldValueProps {
  valueText: string;
  color?: string;
  className?: string;
  copyToClipboardEnabled?: boolean;
}

const StyledFieldValue = styled(Typography)`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  color: #2d1155;
`;

export const FieldValue = ({
  copyToClipboardEnabled,
  className,
  valueText,
  color,
}: FieldValueProps) => (
  <StyledFieldValue className={className} color={color}>
    {valueText || '-'}
    {copyToClipboardEnabled && <CopyToClipboard value={valueText} />}
  </StyledFieldValue>
);

export default FieldValue;
