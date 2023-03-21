import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface RegisterDetailsCardProps{
    icon: any,
    label: String,
    value: String,
}

export function RegisterDetailsCard({ icon, label, value } : RegisterDetailsCardProps) {
  return (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            {icon}
        </View>
        <View style={styles.containerText}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{ value.charAt(0).toUpperCase() + value.slice(1)}</Text>
        </View>
    </View>
  );
}