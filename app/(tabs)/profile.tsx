import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import { common } from "../../styles/common";
import { ME, PAST_FLICKS } from "../../data/mock";

const STATS = [
  { label: "streak", value: `${ME.streak}`, prefix: "🔥" },
  { label: "friends", value: `${ME.friends}`, prefix: null },
  { label: "flicks", value: `${ME.totalFlicks}`, prefix: null },
];

export default function Profile() {
  return (
    <ScrollView style={common.screenScroll} showsVerticalScrollIndicator={false}>
      <View style={s.headerSection}>
        {/* Top bar */}
        <View style={common.topBar}>
          <Text style={common.logo}>flick<Text style={common.logoDot}>.</Text></Text>
          <TouchableOpacity style={s.settingsButton}>
            <Text style={s.settingsText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Avatar + info */}
        <View style={[common.row, { marginTop: 16, marginBottom: 24, gap: 16 }]}>
          <View style={s.avatarWrapper}>
            <Image source={{ uri: ME.avatar }} style={s.avatar} />
            <View style={s.flameBadge}>
              <Ionicons name="flame" size={11} color="#000" />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.displayName}>{ME.displayName}</Text>
            <Text style={[common.sectionLabel, { textTransform: "none", letterSpacing: 0, marginTop: 2 }]}>@{ME.username}</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={s.statsRow}>
          {STATS.map((stat) => (
            <View key={stat.label} style={s.statCard}>
              <Text style={s.statValue}>{stat.prefix ? `${stat.prefix} ` : ""}{stat.value}</Text>
              <Text style={common.sectionLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Streak banner */}
        <View style={s.streakBanner}>
          <Text style={s.streakEmoji}>🔥</Text>
          <View>
            <Text style={s.streakTitle}>{ME.streak}-day streak</Text>
            <Text style={common.mutedText}>Flick today to keep it alive</Text>
          </View>
        </View>

        {/* Grid label */}
        <View style={[common.row, { gap: 6 }]}>
          <Ionicons name="sunny-outline" size={12} color={colors.muted} />
          <Text style={common.sectionLabel}>My flicks</Text>
        </View>
      </View>

      {/* Photo grid */}
      <View style={s.grid}>
        {PAST_FLICKS.map((src, i) => (
          <Image key={i} source={{ uri: src }} style={s.gridItem} resizeMode="cover" />
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  headerSection: {
    paddingBottom: 16,
  },
  settingsButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  settingsText: {
    fontSize: 12,
    color: colors.muted,
  },
  avatarWrapper: {
    position: "relative",
    flexShrink: 0,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: `${colors.primary}66`,
    backgroundColor: colors.input,
  },
  flameBadge: {
    position: "absolute",
    bottom: -4,
    right: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.bg,
  },
  displayName: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  statCard: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 12,
    alignItems: "center",
    gap: 2,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },
  streakBanner: {
    borderRadius: 16,
    backgroundColor: `${colors.primary}1A`,
    borderWidth: 1,
    borderColor: `${colors.primary}33`,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  streakEmoji: {
    fontSize: 20,
  },
  streakTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 2,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
    paddingHorizontal: 2,
    paddingBottom: 24,
  },
  gridItem: {
    width: "32.9%",
    aspectRatio: 3 / 4,
    backgroundColor: colors.input,
  },
});