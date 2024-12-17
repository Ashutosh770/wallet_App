import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Text>Select Filter</Text>
          <Button title="Category" onPress={() => setSelectedFilter('Category')} />
          <Button title="Date Range" onPress={() => setSelectedFilter('Date Range')} />
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalContent: { backgroundColor: '#fff', padding: 16, borderRadius: 8 },
  });
  
  export default FilterModal;