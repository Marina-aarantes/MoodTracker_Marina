import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MoodCard({ mood, onEdit, onDelete}){
    return (
        <View style={styles.card}>
            <Text style={styles.emoji}>{mood.emoji}</Text>
            <View style={{flex :1}}>
                <Text style={styles.date}>{mood.date}</Text>
                <Text style={styles.note}>{mood.note}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={onEdit}>
                    <Text style={styles.actionText}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>                    
                    <Text style={styles.actionText}>🗑️</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    elevation: 2,
  },
  emoji: { fontSize: 30, marginRight: 10 },
  date: { fontWeight: 'bold', color: '#023047' },
  note: { color: '#555' },
  actions: { flexDirection: 'row', gap: 10 },
  actionText: { fontSize: 20 },
});
