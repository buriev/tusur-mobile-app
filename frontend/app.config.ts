import type { ConfigContext, ExpoConfig } from "expo/config"
import expoRouter from "expo-router/plugin"
import expoSplashScreen from "expo-splash-screen/plugin"

const packageId = "com.anonymous.tusur_dev"
const scheme = "frontend"

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  version: "0.1.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",

  name: "ТУСУР",
  slug: scheme,
  scheme,
  icon: "./assets/images/icon.png",

  android: {
    package: packageId,
    predictiveBackGestureEnabled: false,
  },
  ios: {
    bundleIdentifier: packageId,
  },

  plugins: [
    expoRouter(),
    expoSplashScreen({
      backgroundColor: "#208AEF",
      image: "./assets/images/splash-icon.png",
      imageWidth: 75,
    }),
  ],

  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
})
