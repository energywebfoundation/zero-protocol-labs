import styled from '@emotion/styled';
import ContentCopy from '@material-ui/icons/ContentCopyOutlined';

/* eslint-disable-next-line */
export interface CopyToClipboardProps {
  value: string;
}

export const CopyToClipboard = ({ value }: CopyToClipboardProps) => (
  <ContentCopy
    onClick={() =>
      navigator.clipboard
        .writeText(value)
        .then((value1) => ({}))
        .catch((reason) => {
          console.log(reason);
        })
    }
    sx={{
      color: '#03D089',
      cursor: 'pointer',
      height: '16px',
      position: 'relative',
      top: '3px',
    }}
  />
);

export default CopyToClipboard;
