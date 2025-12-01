import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomText from '../../components/CustomText';

export default function LoginScreen({ setIsLoggedIn, setUserRole }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [role, setRole] = useState(null); // Manager or Salesperson

  const handleLogin = () => {

    if (!role) {
      return Alert.alert("Select Role", "Please choose Manager or Salesperson.");
    }

    // Simple login (local)
    if (email === 'admin@.com' && password === '1234') {
      setUserRole(role);   // store which UI to open
      setIsLoggedIn(true);
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      
      {/* Header Gradient */}
      <LinearGradient
        colors={['#0066ff', '#9336fd']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerContainer}
      >
        <Image source={require('../../assets/logo.png')} style={{ width: 70, height: 70 }} />
      </LinearGradient>

      {/* Main Card */}
      <View style={styles.card}>
        <CustomText style={styles.title} weight="Medium">
          Welcome To Finsmart
        </CustomText>
        <CustomText style={styles.subtitle}>Enter your details below</CustomText>

        {/* ROLE SELECTION */}
        <View style={styles.roleContainer}>

          {/* Manager */}
          <TouchableOpacity
            style={[styles.roleBox, role === 'manager' && styles.roleSelected]}
            onPress={() => setRole('manager')}
          >
            <CustomText weight="Medium" style={styles.roleText}>Manager</CustomText>
          </TouchableOpacity>

          {/* Salesperson */}
          <TouchableOpacity
            style={[styles.roleBox, role === 'salesperson' && styles.roleSelected]}
            onPress={() => setRole('salesperson')}
          >
            <CustomText weight="Medium" style={styles.roleText}>Salesperson</CustomText>
          </TouchableOpacity>

        </View>

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        {/* Password */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={hidePass}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
            <Ionicons
              name={hidePass ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color="#6C63FF"
            />
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity onPress={handleLogin} activeOpacity={0.9}>
          <LinearGradient
            colors={['#0066ff', '#9336fd']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signInButton}
          >
            <CustomText weight="Medium" style={styles.signInText}>
              Sign in
            </CustomText>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomText style={styles.forgot}>Forgot your password?</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  headerContainer: {
    height: 330,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -80,
    borderRadius: 25,
    padding: 20,
    paddingVertical: 30,
    elevation: 5,
    paddingBottom: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },

  subtitle: {
    paddingBottom: 30,
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
  },

  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  roleBox: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },

  roleSelected: {
    borderColor: '#6C63FF',
    backgroundColor: '#f2e8ff',
  },

  roleText: {
    fontSize: 16,
    color: '#333',
  },

  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  passwordContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  passwordInput: {
    flex: 1,
    height: 50,
  },

  signInButton: {
    marginTop: 25,
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },

  forgot: {
    color: '#6C63FF',
    textAlign: 'center',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
