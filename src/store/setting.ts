import { create } from 'zustand';

/**
 * 系统设置store类型
 */
export interface settingsStoreType {
  isDark: boolean;
  setThemeDark: (value: boolean) => void;
  collapsed: boolean;
}

const useSettingStore = create<settingsStoreType>()((set) => ({
  // 深色模式 切换暗黑模式
  isDark: false,
  // 设置暗黑模式
  setThemeDark: (value: boolean) => set({ isDark: value }),
  // 侧边栏是否收起
  collapsed: false,
  // 设置侧边栏是否收起
  changeCollapsed: (value: boolean) => set({ collapsed: value }),
}));

export default useSettingStore
