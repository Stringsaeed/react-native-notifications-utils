import UIKit

@objc(NotificationsUtils)
class NotificationsUtils: NSObject {
  func openURL(_ url: URL) -> Void {
    if #available(iOS 10.0, *){
      UIApplication.shared.open(url)
    } else {
      UIApplication.shared.openURL(url)
    }
  }

  @objc(openAppNotificationsSettings)
  func openAppNotificationsSettings() -> Void {
    let settingsURLString: String;
    if #available(iOS 16.0, *) {
      settingsURLString = UIApplication.openNotificationSettingsURLString
    } else if #available(iOS 15.4, *) {
      settingsURLString = UIApplicationOpenNotificationSettingsURLString
    } else {
      settingsURLString =  UIApplication.openSettingsURLString
    }

    openURL(URL.init(string: settingsURLString)!)
  }
}
