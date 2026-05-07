import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { common } from "../../styles/common";
import { NOTIFICATIONS } from "../../data/mock";

export default function Notifications() {
  const unreadCount = NOTIFICATIONS.filter((n) => n.unread).length;

  return (
    <ScrollView style={common.screenScroll} contentContainerStyle={common.screenContent} showsVerticalScrollIndicator={false}>
      <View style={common.topBar}>
        <Text style={common.logo}>flick<Text style={common.logoDot}>.</Text></Text>
        <Text style={common.sectionLabel}>{unreadCount} new</Text>
      </View>

      <Text style={[common.sectionLabel, { marginBottom: 8 }]}>Today</Text>

      <View style={s.list}>
        {NOTIFICATIONS.map((n) => (
          <View key={n.id} style={[s.item, n.unread && s.itemUnread]}>
            <View style={s.avatarWrapper}>
              <Image source={{ uri: n.avatar }} style={s.avatar} />
              {n.unread && <View style={s.unreadDot} />}
            </View>
            <View style={s.itemBody}>
              <Text style={s.itemText}>{n.text}</Text>
              <Text style={[common.sectionLabel, { textTransform: "none", letterSpacing: 0, marginTop: 2 }]}>{n.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  list: {
    gap: 4,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 16,
  },
  itemUnread: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  avatarWrapper: {
    position: "relative",
    flexShrink: 0,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.input,
  },
  unreadDot: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.bg,
  },
  itemBody: {
    flex: 1,
  },
  itemText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
});