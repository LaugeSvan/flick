import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const common = StyleSheet.create({
  // Layout
  screen: {
    flexGrow: 1,
    backgroundColor: colors.bg,
    justifyContent: "center",
    padding: 16,
  },
  screenScroll: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  screenContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },
  inner: {
    width: "100%",
    maxWidth: 448,
    alignSelf: "center",
  },

  // Page header (auth screens)
  pageHeader: {
    alignItems: "center",
    marginBottom: 32,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 15,
    color: colors.subtle,
  },

  // Logo bar (tab screens)
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  logo: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.text,
    letterSpacing: -0.5,
  },
  logoDot: {
    color: colors.primary,
  },

  // Section label (monospace caps)
  sectionLabel: {
    fontSize: 10,
    color: colors.muted,
    fontFamily: "monospace",
    letterSpacing: 2,
    textTransform: "uppercase",
  },

  // Card
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 32,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 24,
  },

  // Form fields
  field: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: colors.label,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: colors.text,
    fontSize: 15,
  },

  // Buttons
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  // Social auth
  socialRow: {
    flexDirection: "row",
    gap: 12,
  },
  socialButton: {
    flex: 1,
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  // Divider
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.input,
  },
  dividerText: {
    fontSize: 13,
    color: colors.muted,
  },

  // Text
  mutedText: {
    fontSize: 14,
    color: colors.subtle,
  },
  linkText: {
    fontSize: 14,
    color: colors.link,
  },

  // Rows
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  centeredRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  spacedRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});