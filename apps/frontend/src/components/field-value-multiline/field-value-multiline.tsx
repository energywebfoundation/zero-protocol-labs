import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FieldValueMultilineProps {
  textValues: Array<string | undefined>;
}

const StyledFieldValueMultiline = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  color: #2d1155;
`;

export const FieldValueMultiline = ({
  textValues,
}: FieldValueMultilineProps) => (
  <StyledFieldValueMultiline>
    {textValues.map((value, index) => (
      <div key={index}>
        {value}
        {index === 0 && ','}
      </div>
    ))}
  </StyledFieldValueMultiline>
);

export default FieldValueMultiline;
