import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { ThemedText } from '@/components/themed-text';

type ItemCardProps = {
  title: string;
  color?: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export function ItemCard({ title, color = '#E5E7EB', onPress, style }: ItemCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: color, opacity: pressed ? 0.9 : 1 },
        style,
      ]}
    >
      <ThemedText type="defaultSemiBold">{title}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    aspectRatio: 1,
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    flex: 0,
  },
});

export default ItemCard;
