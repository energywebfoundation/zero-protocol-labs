import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FieldValueProps {
  valueText: string;
}

const StyledFieldValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  color: #2d1155;
`;

export const FieldValue = ({ valueText }: FieldValueProps) => (
  <StyledFieldValue>{valueText}</StyledFieldValue>
);

export default FieldValue;
