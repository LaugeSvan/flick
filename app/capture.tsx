import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useCountdown } from "../hooks/useCountdown";
import { FRIENDS } from "../data/mock";
import { colors } from "../styles/colors";

const { width, height } = Dimensions.get("window");

const BACK_CAM = "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=780&h=1200&fit=crop&auto=format";
const FRONT_CAM = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=780&h=1200&fit=crop&auto=format";

export default function Capture() {
  const router = useRouter();
  const { label } = useCountdown();
  const [front, setFront] = useState(false);
  const [captured, setCaptured] = useState(false);

  const bgSrc = front ? FRONT_CAM : BACK_CAM;

  return (
    <View style={s.container}>
      {/* Viewfinder */}
      <Image source={{ uri: bgSrc }} style={s.viewfinder} resizeMode="cover" />
      <View style={s.overlay} />

      {/* Top bar */}
      <View style={s.topBar}>
        <TouchableOpacity style={s.iconButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={20} color="#fff" />
        </TouchableOpacity>

        <View style={s.timerPill}>
          <View style={s.timerDot} />
          <Text style={s.timerText}>{label}</Text>
        </View>

        <TouchableOpacity style={s.iconButton} onPress={() => setFront((v) => !v)}>
          <Ionicons name="refresh-outline" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Center */}
      {!captured ? (
        <View style={s.centerPrompt}>
          <Text style={s.promptEmoji}>⚡️</Text>
          <Text style={s.promptTitle}>Time to flick!</Text>
          <Text style={s.promptSub}>{FRIENDS.length} friends are watching</Text>
        </View>
      ) : (
        <View style={s.centerPreview}>
          <Image source={{ uri: bgSrc }} style={s.previewCircle} />
          <Text style={s.previewLabel}>Looking good 👀</Text>
        </View>
      )}

      {/* Bottom controls */}
      <View style={s.bottomControls}>
        {!captured ? (
          <TouchableOpacity style={s.shutterOuter} onPress={() => setCaptured(true)} activeOpacity={0.9}>
            <View style={s.shutterInner} />
          </TouchableOpacity>
        ) : (
          <View style={s.postButtons}>
            <TouchableOpacity
              style={s.sendButton}
              onPress={() => router.replace("/(tabs)/feed")}
              activeOpacity={0.9}
            >
              <Text style={s.sendButtonText}>Send flick</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.retakeButton} onPress={() => setCaptured(false)} activeOpacity={0.9}>
              <Text style={s.retakeButtonText}>Retake</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  viewfinder: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.6,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  topBar: {
    position: "absolute",
    top: 48,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  timerPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  timerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
  timerText: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "monospace",
  },
  centerPrompt: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  promptEmoji: {
    fontSize: 32,
  },
  promptTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: -0.5,
  },
  promptSub: {
    fontSize: 14,
    color: "rgba(255,255,255,0.6)",
  },
  centerPreview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  previewCircle: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 4,
    borderColor: colors.primary,
  },
  previewLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  bottomControls: {
    position: "absolute",
    bottom: 48,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  shutterOuter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  shutterInner: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 4,
    borderColor: "#e4e4e7",
  },
  postButtons: {
    width: "100%",
    gap: 12,
  },
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  retakeButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: "center",
  },
  retakeButtonText: {
    fontSize: 14,
    color: "#fff",
  },
});