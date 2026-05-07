import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FlickCard } from "../../components/FlickCard";
import { useCountdown } from "../../hooks/useCountdown";
import { FRIENDS } from "../../data/mock";
import { colors } from "../../styles/colors";
import { common } from "../../styles/common";

const hasPosted = false; // TODO: replace with Supabase user state

export default function Feed() {
  const router = useRouter();
  const { label, remaining, total } = useCountdown();
  const progress = (remaining / total) * 100;

  return (
    <ScrollView style={common.screenScroll} contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={common.topBar}>
        <Text style={common.logo}>flick<Text style={common.logoDot}>.</Text></Text>
        <TouchableOpacity style={s.bellButton} onPress={() => router.push("/(tabs)/notifications")}>
          <Ionicons name="notifications-outline" size={17} color={colors.text} />
          <View style={s.bellDot} />
        </TouchableOpacity>
      </View>

      {/* Timer bar */}
      <View style={s.timerCard}>
        <View style={common.spacedRow}>
          <View style={common.row}>
            <Ionicons name="time-outline" size={14} color={colors.primary} />
            <Text style={[common.sectionLabel, { marginLeft: 6 }]}>time left</Text>
          </View>
          <Text style={s.timerValue}>{label}</Text>
        </View>
        <View style={s.progressTrack}>
          <View style={[s.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>

      {/* My flick prompt */}
      {!hasPosted ? (
        <TouchableOpacity style={s.promptCard} onPress={() => router.push("/capture")} activeOpacity={0.9}>
          <View style={common.row}>
            <View style={s.promptIcon}>
              <Ionicons name="camera-outline" size={20} color={colors.primary} />
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text style={s.promptTitle}>Add your flick</Text>
              <Text style={[common.sectionLabel, { textTransform: "none", letterSpacing: 0, fontSize: 12 }]}>Your friends are waiting</Text>
            </View>
          </View>
          <View style={s.promptZap}>
            <Ionicons name="flash" size={14} color="#000" />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={s.postedCard}>
          <View style={s.postedIcon}>
            <Ionicons name="checkmark" size={16} color={colors.primary} />
          </View>
          <Text style={s.postedText}>You flickd today 🎉</Text>
        </View>
      )}

      {/* Section label */}
      <View style={[common.row, { paddingHorizontal: 20, marginBottom: 12 }]}>
        <Ionicons name="people-outline" size={13} color={colors.muted} />
        <Text style={[common.sectionLabel, { marginLeft: 6 }]}>Friends · {FRIENDS.length} posted</Text>
      </View>

      {/* Feed cards */}
      <View style={s.feed}>
        {FRIENDS.map((f) => (
          <FlickCard key={f.id} friend={f} />
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  bellButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.input,
    alignItems: "center",
    justifyContent: "center",
  },
  bellDot: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  timerCard: {
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    gap: 10,
  },
  timerValue: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.text,
    fontFamily: "monospace",
  },
  progressTrack: {
    height: 2,
    backgroundColor: colors.input,
    borderRadius: 999,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 999,
  },
  promptCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: `${colors.primary}4D`,
    backgroundColor: `${colors.primary}0D`,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  promptIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: `${colors.primary}1A`,
    borderWidth: 1,
    borderColor: `${colors.primary}33`,
    alignItems: "center",
    justifyContent: "center",
  },
  promptTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 2,
  },
  promptZap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  postedCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  postedIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: `${colors.primary}1A`,
    alignItems: "center",
    justifyContent: "center",
  },
  postedText: {
    fontSize: 14,
    color: colors.text,
  },
  feed: {
    paddingHorizontal: 20,
    gap: 16,
  },
});