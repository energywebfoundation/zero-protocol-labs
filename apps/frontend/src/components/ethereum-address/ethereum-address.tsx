import ContentCopy from '@material-ui/icons/ContentCopyOutlined';
import CopyToClipboard from '../copy-to-clipboard/copy-to-clipboard';
import { Box } from '@material-ui/core';

/* eslint-disable-next-line */
export interface EthereumAddressProps {
  address: string;
  shortify?: boolean;
}

export const EthereumAddress = ({
  shortify,
  address,
}: EthereumAddressProps) => {
  if (address) {
    return (
      <Box>
        {shortify ? shortifyEthAddr(address) : address}
        <CopyToClipboard value={address} />
      </Box>
    );
  } else return <div>NA</div>;
};

export const shortifyEthAddr = (str: string) => {
  return `${str.substr(0, 4)}...${str.substr(str.length - 4, str.length - 1)}`;
};

export default EthereumAddress;
