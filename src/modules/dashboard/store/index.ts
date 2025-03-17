import { defineStore } from 'pinia';

// Interfaces
import { AxiosRequestConfig } from 'axios';
import { IFolderStateStore, IGetFolderResponse, IGetFileResponse } from '../interfaces';

// Constants
import { DASHBOARD_ENDPOINT_FILES, DASHBOARD_ENDPOINT_FOLDER } from '../constants';
import httpClient from '@/plugins/axios';

export const useDashboardStore = defineStore('dashboard', {
  state: (): IFolderStateStore => ({
    dashboard_folderList: [],
    dashboard_isLoadingFolder: false,
    dashboard_fileList: [],
    dashboard_isLoadingFile: false,
  }),
  getters: {
    /**
     * @description Usually, we define getters if the getter name is different from the state name.
     */
  },
  actions: {
    /**
     * @description Handle fetch api authentication login.
     * @url /authentication/login
     * @method GET
     * @access public
     */
    async dashboard_fetchFolder(
      payload: { parentId?: string },
      requestConfigurations: AxiosRequestConfig,
    ): Promise<IGetFolderResponse> {
      this.dashboard_isLoadingFolder = true;

      try {
        const response = await httpClient.get<IGetFolderResponse>(DASHBOARD_ENDPOINT_FOLDER, {
          ...requestConfigurations,
          params: payload,
        });
        this.dashboard_folderList = response.data.data;

        return Promise.resolve(response.data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.dashboard_isLoadingFolder = false;
      }
    },

    /**
     * @description Handle fetch api authentication login.
     * @url /authentication/login
     * @method GET
     * @access public
     */
    async dashboard_fetchFile(
      payload: { folderId: string },
      requestConfigurations: AxiosRequestConfig,
    ): Promise<IGetFileResponse> {
      this.dashboard_isLoadingFile = true;

      try {
        const response = await httpClient.get<IGetFileResponse>(
          DASHBOARD_ENDPOINT_FILES.replace('{folderId}', payload.folderId),
          {
            ...requestConfigurations,
            params: payload,
          },
        );
        this.dashboard_fileList = response.data.data;

        return Promise.resolve(response.data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.dashboard_isLoadingFile = false;
      }
    },
  },
});
