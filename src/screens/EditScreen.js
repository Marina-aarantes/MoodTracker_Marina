import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";
import { updateMood } from "../database/database";
import EmojiPicker from "../components/EmojiPicker";

export default function EditScreen({ route, navigation }) {
  const { mood } = route.params;
  const [emoji, setEmoji] = useState(mood.emoji);
  const [note, setNote] = useState(mood.note);

  async function handleSave() {
    if (!emoji) {
      Alert.alert("Erro", "Escolha um emoji antes de salvar!");
      return;
    }

    try {
      await updateMood(mood.id, emoji, note);
      Alert.alert("Sucesso", "Registro atualizado com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao atualizar mood:", error);
      Alert.alert("Erro", "Não foi possível atualizar o registro.");
    }
  }

  return (
    <View style={styles.container}>
      <EmojiPicker selected={emoji} onSelect={setEmoji} />
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nota (opcional)"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Salvar" onPress={handleSave} color="#fb8500" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    fontSize: 16,
  },
});
