package com.reactnativenotificationsutils;

import static android.content.Intent.FLAG_ACTIVITY_NEW_TASK;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.provider.Settings;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = NotificationsUtilsModule.NAME)
public class NotificationsUtilsModule extends ReactContextBaseJavaModule {
  public static final String NAME = "NotificationsUtils";

  public NotificationsUtilsModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void openAppNotificationsSettings(String channelId) {
    final Activity activity = getCurrentActivity();
    final Context context = getReactApplicationContext().getApplicationContext();

    if (activity == null) {
      return;
    }

    Intent intent;
    if (Build.VERSION.SDK_INT >= 26) {
      if (channelId != null) {
        intent = new Intent(Settings.ACTION_CHANNEL_NOTIFICATION_SETTINGS);
        intent.putExtra(Settings.EXTRA_CHANNEL_ID, channelId);
      } else {
        intent = new Intent(Settings.ACTION_APP_NOTIFICATION_SETTINGS);
      }
      intent.putExtra(Settings.EXTRA_APP_PACKAGE, context.getPackageName());
    } else {
      intent = new Intent(Settings.ACTION_APPLICATION_SETTINGS);
    }

    intent.setFlags(FLAG_ACTIVITY_NEW_TASK);

    activity.runOnUiThread(() -> context.startActivity(intent));
  }

}
