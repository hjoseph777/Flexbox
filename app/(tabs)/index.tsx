import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ItemCard } from '@/components/item-card';

export default function HomeScreen() {
  const [columns, setColumns] = React.useState<1 | 2 | 3>(2);

  const handleColumnChange = (newColumns: 1 | 2 | 3) => {
    setColumns(newColumns);
  };

  const getColumnStyle = () => {
    if (columns === 1) return styles.oneColumn;
    if (columns === 2) return styles.twoColumn;
    return styles.threeColumn;
  };
  // Some sample photos to demonstrate the layout
  const photoItems = [
    { id: '1', title: 'Photo 1', color: '#FDE68A' },
    { id: '2', title: 'Photo 2', color: '#A7F3D0' },
    { id: '3', title: 'Photo 3', color: '#BFDBFE' },
    { id: '4', title: 'Photo 4', color: '#FCA5A5' },
    { id: '5', title: 'Photo 5', color: '#DDD6FE' },
    { id: '6', title: 'Photo 6', color: '#FDBA74' },
    { id: '7', title: 'Photo 7', color: '#FDE68A' },
    { id: '8', title: 'Photo 8', color: '#A7F3D0' },
    { id: '9', title: 'Photo 9', color: '#BFDBFE' },
    { id: '10', title: 'Photo 10', color: '#FCA5A5' },
    { id: '11', title: 'Photo 11', color: '#DDD6FE' },
    { id: '12', title: 'Photo 12', color: '#FDBA74' },
  ];
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">Flexbox List</ThemedText>
        
        <View style={styles.buttonRow}>
          {[0, 1, 2].map((buttonIndex) => {
            const columnCount = (buttonIndex + 1) as 1 | 2 | 3;
            const isSelected = columns === columnCount;
            
            return (
              <Pressable
                key={buttonIndex}
                onPress={() => handleColumnChange(columnCount)}
                style={[
                  styles.columnButton,
                  isSelected && styles.selectedButton,
                  { marginRight: buttonIndex < 2 ? 8 : 0 }
                ]}
              >
                <ThemedText>{buttonIndex} col</ThemedText>
              </Pressable>
            );
          })}
        </View>
        
        {/* Photo grid - changes layout based on column selection */}
        <View style={styles.grid}>
          {photoItems.map((item) => (
            <ItemCard
              key={`${item.id}-${columns}col`}
              title={item.title}
              color={item.color}
              style={getColumnStyle()}
            />
          ))}
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    paddingVertical: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
  },
  columnButton: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#888',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  selectedButton: {
    backgroundColor: '#e5e7eb',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginHorizontal: -4,
    paddingTop: 4,
  },
  oneColumn: {
    width: '100%',
    marginHorizontal: 4,
  },
  twoColumn: {
    width: '48%',
    marginHorizontal: 4,
  },
  threeColumn: {
    width: '31.333%',
    marginHorizontal: 4,
  },
});
