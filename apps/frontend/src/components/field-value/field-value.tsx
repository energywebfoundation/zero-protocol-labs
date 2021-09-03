import styled from '@emotion/styled';
import CopyToClipboard from '../copy-to-clipboard/copy-to-clipboard';

/* eslint-disable-next-line */
export interface FieldValueProps {
  valueText: string;
  copyToClipboardEnabled?: boolean;
}

const StyledFieldValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  color: #2d1155;
`;

export const FieldValue = ({
  copyToClipboardEnabled,
  valueText,
}: FieldValueProps) => (
  <StyledFieldValue>
    {valueText || '-'}
    {copyToClipboardEnabled && <CopyToClipboard value={valueText} />}
  </StyledFieldValue>
);

export default FieldValue;
