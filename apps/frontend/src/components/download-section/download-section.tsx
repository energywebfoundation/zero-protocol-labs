import PaperBox from '../paper-box/paper-box';
import { Box, Typography } from '@material-ui/core';
import FileDownloadLink from '../file-download-link/file-download-link';
import { File } from '../../api';

/* eslint-disable-next-line */
export interface DownloadSectionProps {
  fileList: File[];
}

export const DownloadSection = ({ fileList = [] }: DownloadSectionProps) => {
  return (
    <PaperBox customPadding={'25px'} bgColor={'#2D1155'}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography
          color={'#fff'}
          fontSize={'20px'}
          fontWeight={600}
          lineHeight={'22px'}
        >
          Download official Attestation
        </Typography>
        {fileList.map((file, index) => (
          <FileDownloadLink
            key={index}
            downloadUrl={file.url}
            filename={file.fileName}
          />
        ))}
      </Box>
    </PaperBox>
  );
};

export default DownloadSection;
