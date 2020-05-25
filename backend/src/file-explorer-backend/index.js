const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const CmsFileModel = require('./schema');
const initFileExplorer = require('file-explorer-backend');

const MongooseFileMetadataStorage = require('file-explorer-backend/file-metadata-mongoose');
const mongooseFileMetadataStorage = new MongooseFileMetadataStorage(CmsFileModel);

const GridFsFileStorage = require('file-explorer-backend/file-storage-gridfs');
const gridFsFileStorage = new GridFsFileStorage(mongoose.connection.db, {
  bucketName: 'cmsfiles',
  writeConcern: {w: global.APP_CONFIG.writeConcern || 'primary'},
});

module.exports = function (cms) {
  const {
    deleteFile,
    deleteFileByFilePath,
    getFileMetadata,
    createFolder,
    listFilesByFolder,
    uploadFile,
    viewFileByFilePath,
    downloadFileByFilePath,
    getFolderTree,
    renameFileMetadata,
    moveFileMetadata,
    getPropertyMappings,
    checkFileExisted,
    namespaceMiddleware,
  } = initFileExplorer({
    dependencies: {
      fileMetadataStorage: mongooseFileMetadataStorage,
      fileStorage: gridFsFileStorage,
    }
  });

  // common APIs
  // route.use(namespaceMiddleware('user'));
  route.get('/file-metadata/:id', getFileMetadata);
  route.get('/file-metadata', listFilesByFolder);
  route.get('/folder-tree', getFolderTree);
  route.get('/file-existed', checkFileExisted);
  route.get('/property-mappings', getPropertyMappings);
  route.post('/folders', createFolder);
  route.delete('/files/:id', deleteFile);
  route.put('/file-metadata/rename/:id', renameFileMetadata);
  route.put('/file-metadata/move/:id', moveFileMetadata);
  // APIs if GridFS driver is used
  route.get('/files/view/:filePath(*)', viewFileByFilePath);
  route.get('/files/download/:filePath(*)', downloadFileByFilePath);
  route.post('/files', uploadFile);

  // file path's api
  route.delete('/filePaths/:filePath(*)', deleteFileByFilePath);

  cms.app.use('/cms-files', route);
};
