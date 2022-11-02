import { Platform } from 'react-native';
import NotificationsUtilsModule from './NotificationsUtilsModule';

interface INotificationsUtils {
  /**
   * API used to open the Platform specific System settings for the application.
   *
   * On Android:
   * API version is >= 26 with `channelId` will open the channel settings. if `channelI` is not provided, the app's notification settings will be opened.
   * API version is < 26, the application settings screen is opened.
   * On iOS:
   * If the version of iOS is >= 15.4, the app's  notification settings screen is displayed.
   * If the version of iOS is < 15.4, the app's settings screen is displayed.
   * On iOS:
   * If the version of iOS is >= 15.4, the app's notification settings screen is displayed.
   * If the version of iOS is < 15.4, the app's settings screen is displayed.
   * @see https://developer.apple.com/documentation/uikit/uiapplication/4013180-opennotificationsettingsurlstrin
   * @see https://developer.apple.com/documentation/uikit/uiapplicationopennotificationsettingsurlstring?language=objc
   * @see https://developer.apple.com/documentation/uikit/uiapplication/1623042-opensettingsurlstring
   *
   *
   * @platform android
   * @param channelId The ID of the channel which will be opened. Can be ignored/omitted to display the
   * overall notification settings.
   */
  openSettings(channelId?: string): void;
}

const NotificationsUtils: INotificationsUtils = {
  openSettings: (channelId) => {
    if (Platform.OS === 'android') {
      if (channelId && typeof channelId !== 'string') {
        throw new Error(
          `NotificationsUtils.openSettings: Expected 'channelId' to be a string, got ${typeof channelId}.`
        );
      }

      return NotificationsUtilsModule.openAppNotificationsSettings(channelId);
    }
    return NotificationsUtilsModule.openAppNotificationsSettings();
  },
};

export default NotificationsUtils;
