import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { FRIENDS } from "../data/mock";

type Friend = (typeof FRIENDS)[0];

export function FlickCard({ friend }: { friend: Friend }) {
  const [liked, setLiked] = useState(false);
  const [swapped, setSwapped] = useState(false);

  const mainSrc = swapped ? friend.frontCam : friend.backCam;
  const insetSrc = swapped ? friend.backCam : friend.frontCam;

  return (
    <View style={s.card}>
      {/* Photos */}
      <View style={s.photoContainer}>
        <Image source={{ uri: mainSrc }} style={s.mainPhoto} resizeMode="cover" />

        {/* Inset camera */}
        <TouchableOpacity style={s.inset} onPress={() => setSwapped((v) => !v)} activeOpacity={0.9}>
          <Image source={{ uri: insetSrc }} style={StyleSheet.absoluteFill} resizeMode="cover" />
        </TouchableOpacity>

        {/* Late badge */}
        {friend.late && (
          <View style={s.lateBadge}>
            <Text style={s.lateEmoji}>🌙</Text>
            <Text style={s.lateText}>late</Text>
          </View>
        )}

        {/* Bottom overlay */}
        <View style={s.overlay}>
          <View style={s.overlayInner}>
            <View>
              <Text style={s.displayName}>{friend.displayName}</Text>
              <View style={s.locationRow}>
                <Ionicons name="location-outline" size={9} color="rgba(255,255,255,0.5)" />
                <Text style={s.locationText}>{friend.location}</Text>
              </View>
            </View>
            <Text style={s.timeText}>{friend.time}</Text>
          </View>
        </View>
      </View>

      {/* Caption */}
      {friend.caption && (
        <View style={s.captionContainer}>
          <Text style={s.captionText}>{friend.caption}</Text>
        </View>
      )}

      {/* Actions */}
      <View style={s.actions}>
        <View style={s.reactionsRow}>
          {friend.reactions.map((r) => (
            <TouchableOpacity key={r.emoji} style={s.reactionButton} activeOpacity={0.8}>
              <Text style={s.reactionEmoji}>{r.emoji}</Text>
              <Text style={s.reactionCount}>{r.count}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={s.actionsRight}>
          <TouchableOpacity onPress={() => setLiked((v) => !v)}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={18}
              color={liked ? "#f87171" : colors.muted}
            />
          </TouchableOpacity>
          <TouchableOpacity style={s.commentButton}>
            <Ionicons name="chatbubble-outline" size={18} color={colors.muted} />
            <Text style={s.commentCount}>{friend.comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const CARD_WIDTH = Dimensions.get("window").width - 40;

const s = StyleSheet.create({
  card: {
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  photoContainer: {
    aspectRatio: 4 / 5,
    backgroundColor: "#18181b",
  },
  mainPhoto: {
    width: "100%",
    height: "100%",
  },
  inset: {
    position: "absolute",
    top: 12,
    left: 12,
    width: 72,
    height: 88,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#000",
  },
  lateBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  lateEmoji: {
    fontSize: 10,
  },
  lateText: {
    fontSize: 9,
    color: "rgba(255,255,255,0.7)",
    fontFamily: "monospace",
    letterSpacing: 1,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 12,
  },
  overlayInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  displayName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginTop: 2,
  },
  locationText: {
    fontSize: 10,
    color: "rgba(255,255,255,0.5)",
  },
  timeText: {
    fontSize: 10,
    color: "rgba(255,255,255,0.4)",
    fontFamily: "monospace",
  },
  captionContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  captionText: {
    fontSize: 14,
    color: "rgba(244,244,245,0.8)",
    lineHeight: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  reactionsRow: {
    flexDirection: "row",
    gap: 8,
  },
  reactionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.input,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  reactionEmoji: {
    fontSize: 14,
  },
  reactionCount: {
    fontSize: 12,
    color: colors.muted,
    fontFamily: "monospace",
  },
  actionsRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  commentButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  commentCount: {
    fontSize: 12,
    color: colors.muted,
    fontFamily: "monospace",
  },
});