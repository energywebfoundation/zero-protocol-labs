import styled from '@emotion/styled';
import { Box } from '@material-ui/core';
import StorageIcon from '@material-ui/icons/Storage';

/* eslint-disable-next-line */
export interface FieldValueListProps {
  valueList: Array<string>;
}

const StyledFieldValueList = styled(Box)`
  font-size: 16px;
  line-height: 18px;
  color: #2d1155;
  font-weight: 700;
`;

export function FieldValueList({ valueList = [] }: FieldValueListProps) {
  return (
    <StyledFieldValueList>
      {valueList.map((value, index) => (
        <Box component={'span'} key={index}>
          {value}
          {index < valueList.length && ', '}
        </Box>
      ))}
    </StyledFieldValueList>
  );
}

export default FieldValueList;
