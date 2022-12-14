<div align="center">
  <div style="margin-bottom: 24px; height: 100px">
    <img src=".github/images/icon.png" alt="React Native Notifications Utils logo" width="100px" height="100px" />
  </div>
</div>

# `react-native-notifications-utils`

## ✨ Features
- Opening App Notifications Settings for Android and iOS

- Typescript

- Built for already in production app




## 🧱 Installation
```sh
yarn add react-native-notifications-utils
```

### iOS

> 📝 **_NOTE:_** requires Xcode 14+ (iOS 16)

```sh
cd ios && pod install
```



## ⚙️ Usage

```typescript
import NotificationsUtils from "react-native-notifications-utils";

// ...

NotificationsUtils.openSettings();
```



## 📜 API

### `openSettings(channelId?: string)`
 API used to open the Platform specific System settings for the application.

| Parameter | Type     | Description                                                                                 | Android | iOS |
| --------- | -------- | ------------------------------------------------------------------------------------------- | ------- | --- |
| channelId | `string` | The channel id to open the settings for. If not provided, the default channel will be used. | ✅       | ❌   |

- On Android:
  - API version is >= 26 with `channelId` will open the channel settings. if `channelI` is not provided, the app's notification settings will be opened.
  - API version is < 26, the application settings screen is opened

- On iOS:
  - If the version of iOS is >= 15.4, the app's  notification settings screen is displayed.
  - If the version of iOS is < 15.4, the app's settings screen is displayed.
  - for further details, see:
    - [Apple's iOS 16 documentation for `openNotificationSettingsURLString`]( https://developer.apple.com/documentation/uikit/uiapplication/4013180-opennotificationsettingsurlstrin)
    - [Apple's iOS 15.4 documentation for `UIApplicationOpenNotificationSettingsURLString`](https://developer.apple.com/documentation/uikit/uiapplicationopennotificationsettingsurlstring)
    - [Apple's documentation for `openSettingsURLString`](https://developer.apple.com/documentation/uikit/uiapplication/1623042-opensettingsurlstring).



## 🫂 Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.



## Author

 - [**@stringsaeed**](https://www.github.com/stringsaeed)



## License

MIT



### TODO:

- [ ] Add tests

- [ ] Add support for request permissions

- [ ] Keeps updated with new native features



---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
