import { Platform } from 'react-native';
import NotificationsUtilsModule from './NotificationsUtilsModule';

type OpenSettingsOptions = {
  channelId?: string;
};

interface INotificationsUtils {
  /**
   * API used to open the Platform specific System settings for the application.
   *
   * If the API version is >= 26:
   * - With no `channelId`, the notification settings screen is displayed.
   * - With a `channelId`, the notification settings screen for the specific channel is displayed.
   *
   * If the API version is < 26, the application settings screen is displayed. The `channelId`
   * is ignored.
   *
   * If an invalid `channelId` is provided (e.g. does not exist), the settings screen will redirect
   * back to your application.
   *
   * On iOS, this is a no-op & instantly resolves.
   *
   * @platform android
   * @param channelId The ID of the channel which will be opened. Can be ignored/omitted to display the
   * overall notification settings.
   */
  openSettings(options?: OpenSettingsOptions): Promise<void>;
}

const NotificationsUtils: INotificationsUtils = {
  openSettings: (options) => {
    if (Platform.OS === 'android') {
      if (typeof options?.channelId !== 'string') {
        throw new Error(
          `NotificationsUtils.openSettings: Expected 'channelId' to be a string, got ${typeof options?.channelId}.`
        );
      }
      const { channelId } = options;

      return NotificationsUtilsModule.openAppNotificationsSettings(channelId);
    }
    return NotificationsUtilsModule.openAppNotificationsSettings();
  },
};

export default NotificationsUtils;
