import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { deleteMood, getAllMoods } from "../database/database";
import MoodCard from "../components/MoodCard";

export default function HistoryScreen({ navigation }) {
  const [moods, setMoods] = useState([]);

  async function loadMoods() {
    const data = await getAllMoods();
    setMoods(data);
  }

  async function handleDelete(id) {
    await deleteMood(id);
    Alert.alert("Registro Excluído!");
    loadMoods();
  }

  useEffect(() => {
    // carrega ao abrir
    loadMoods();

    // recarrega ao voltar da tela de edição
    const unsubscribe = navigation.addListener("focus", loadMoods);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Humor</Text>
      <FlatList
        data={moods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MoodCard
            mood={item}
            onDelete={() => handleDelete(item.id)}
            onEdit={() => navigation.navigate("EditScreen", { mood: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F2F2F2" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#023047",
  },
});
