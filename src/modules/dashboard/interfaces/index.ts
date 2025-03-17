export interface IFolderList {
  id: string;
  name: string;
  parent: string;
  children: IFolderList[];
  createdAt: string;
  updatedAt: string;
}

export interface IFileList {
  id: string;
  name: string;
  folderId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFolderStateStore {
  dashboard_folderList: IFolderList[];
  dashboard_isLoadingFolder: boolean;
  dashboard_fileList: IFileList[];
  dashboard_isLoadingFile: boolean;
}
export interface IGetFolderResponse {
  statusCode: number;
  message: string;
  data: IFolderList[];
}

export interface IGetFileResponse {
  statusCode: number;
  message: string;
  data: IFileList[];
}

export interface IDashboardProvided {
  dashboard_folderList: Ref<IFolderList[]>;
  dashboard_isLoadingFolder: Ref<boolean>;
  dashboard_fileList: Ref<IFileList[]>;
  dashboard_isLoadingFile: Ref<boolean>;
  dashboard_selectedMenu: Ref<string>;
}
