import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Logger,
  NotFoundException,
  Param,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { FilesService } from './files.service';
import { ApiBody, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { UploadFileDto } from "./dto/upload-file.dto";
import { FileMetadataDto } from "./dto/file-metadata.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express, Response } from 'express';
import * as multer from 'multer';
import { AuthGuard } from "@nestjs/passport";

@Controller('files')
@ApiTags('files')
@UseInterceptors(ClassSerializerInterceptor)
export class FilesController {
  private readonly logger = new Logger(FilesController.name, { timestamp: true });

  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UploadFileDto })
  @ApiCreatedResponse({ type: FileMetadataDto })
  @UseInterceptors(FileInterceptor('file', {
    storage: multer.memoryStorage(),
    limits: {
      fileSize: parseInt(process.env.UPLOADED_FILE_SIZE_LIMIT)
    }
  }))
  create(
    @Body() body: UploadFileDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    this.logger.debug(`file uploaded ${JSON.stringify({ ...file, buffer: undefined })}`);
    return this.filesService.create(file);
  }

  @Get()
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  @ApiOkResponse({ type: [FileMetadataDto] })
  findAll() {
    return this.filesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'binary file content' })
  async getFileContent(
    @Param('id') id: string,
    @Res() res: Response
  ) {
    const file = await this.filesService.findOne(id);

    if (!file) {
      throw new NotFoundException();
    }

    res.setHeader('Content-Disposition', `Attachment; filename=${file.fileName}`);
    res.setHeader('Content-Type', file.mimeType);

    res.send(file.content);
  }

  @Get(':id/metadata')
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  @ApiOkResponse({ type: FileMetadataDto })
  async getFileMetadata(@Param('id') id: string) {
    const file = await this.filesService.findOne(id);

    if (!file) {
      throw new NotFoundException();
    }

    return new FileMetadataDto(file)
  }

  @Delete(':id')
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  @ApiOkResponse({ type: FileMetadataDto })
  remove(@Param('id') id: string) {
    return this.filesService.remove(id);
  }
}