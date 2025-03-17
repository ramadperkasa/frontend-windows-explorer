// Vue
import { ref } from 'vue';
import { useDashboardStore } from '../store';
import { storeToRefs } from 'pinia';
import { IDashboardProvided } from '../interfaces';

export const useDashboardService = (): IDashboardProvided => {
  /**
   * @description Injected variables
   */
  const store = useDashboardStore();

  const { dashboard_folderList, dashboard_isLoadingFolder, dashboard_fileList, dashboard_isLoadingFile } =
    storeToRefs(store);

  // Reactive data binding
  const dashboard_selectedMenu = ref<string>('');

  watch(
    () => dashboard_selectedMenu.value,
    async value => {
      await store.dashboard_fetchFile({ folderId: value }, {});
    },
  );

  return {
    dashboard_folderList,
    dashboard_isLoadingFolder,
    dashboard_fileList,
    dashboard_isLoadingFile,
    dashboard_selectedMenu,
  };
};
