import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const emojis = ['😁','😊','😐','😔','😡','🥱'];

export default function EmojiPicker({ selected, onSelect }) {
    return (
        <View style = {styles.container}>
            {emojis.map((emoji) => (
                <TouchableOpacity
                    key={emoji}
                    onPress={() => onSelect(emoji)}
                    style={[styles.emojiBox, selected === emoji && styles.selected]}
                >
                    <Text style={styles.emoji}>{emoji}</Text>
                </TouchableOpacity>
            ))}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    emojiBox: {
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 50,
        backgroundColor: '#eee',
    },
    selected: {backgroundColor: '#FFB703'},
    emoji: {fontSize:28}
});
