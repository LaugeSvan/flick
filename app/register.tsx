import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { common } from "../styles/common";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Register:", { name, email, password, confirmPassword });
    // router.push("/home");
  };

  return (
    <ScrollView contentContainerStyle={common.screen} keyboardShouldPersistTaps="handled">
      <View style={common.inner}>
        <View style={common.pageHeader}>
          <Text style={common.pageTitle}>Create Account</Text>
          <Text style={common.pageSubtitle}>Join our community today</Text>
        </View>

        <View style={common.card}>
          {/* Full Name */}
          <View style={common.field}>
            <Text style={common.label}>Full Name</Text>
            <View style={common.inputWrapper}>
              <Ionicons name="person-outline" size={20} color="#71717a" style={common.inputIcon} />
              <TextInput
                style={common.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor="#71717a"
                autoCapitalize="words"
                autoCorrect={false}
              />
            </View>
          </View>

          {/* Email */}
          <View style={common.field}>
            <Text style={common.label}>Email</Text>
            <View style={common.inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#71717a" style={common.inputIcon} />
              <TextInput
                style={common.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#71717a"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          {/* Password */}
          <View style={common.field}>
            <Text style={common.label}>Password</Text>
            <View style={common.inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#71717a" style={common.inputIcon} />
              <TextInput
                style={common.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Create a password"
                placeholderTextColor="#71717a"
                secureTextEntry
              />
            </View>
          </View>

          {/* Confirm Password */}
          <View style={common.field}>
            <Text style={common.label}>Confirm Password</Text>
            <View style={common.inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#71717a" style={common.inputIcon} />
              <TextInput
                style={common.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm your password"
                placeholderTextColor="#71717a"
                secureTextEntry
              />
            </View>
          </View>

          {/* Terms */}
          <TouchableOpacity style={common.row} onPress={() => setAgreedToTerms(!agreedToTerms)}>
            <Ionicons
              name={agreedToTerms ? "checkbox" : "square-outline"}
              size={20}
              color={agreedToTerms ? "#2563eb" : "#3f3f46"}
            />
            <Text style={[common.mutedText, { marginLeft: 8, flex: 1 }]}>
              I agree to the{" "}
              <Text style={common.linkText}>Terms of Service</Text>
              {" "}and{" "}
              <Text style={common.linkText}>Privacy Policy</Text>
            </Text>
          </TouchableOpacity>

          {/* Submit */}
          <TouchableOpacity style={common.primaryButton} onPress={handleSubmit}>
            <Text style={common.primaryButtonText}>Create Account</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={common.dividerRow}>
            <View style={common.dividerLine} />
            <Text style={common.dividerText}>Or continue with</Text>
            <View style={common.dividerLine} />
          </View>

          {/* Social */}
          <View style={common.socialRow}>
            <TouchableOpacity style={common.socialButton}>
              <Ionicons name="logo-google" size={20} color="#EA4335" />
            </TouchableOpacity>
            <TouchableOpacity style={common.socialButton}>
              <Ionicons name="logo-github" size={20} color="#f4f4f5" />
            </TouchableOpacity>
            <TouchableOpacity style={common.socialButton}>
              <Ionicons name="logo-facebook" size={20} color="#1877F2" />
            </TouchableOpacity>
          </View>

          {/* Sign in link */}
          <View style={common.centeredRow}>
            <Text style={common.mutedText}>Already have an account? </Text>
            <Link href="/" asChild>
              <TouchableOpacity>
                <Text style={common.linkText}>Sign in</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}