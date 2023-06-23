import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryList from "./components/CategoryList";
export default function App() {
  const state = {
    categories: [
      { id: 1, name: "DUCTRONG" },
      { id: 2, name: "DUCTRONG" },
      { id: 3, name: "DUCTRONG" },
    ],
  };
  return (
    <FlatList
      data={state.categories}
      renderItem={({ item }) => <CategoryList category={item}></CategoryList>}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}

const styles = StyleSheet.create({

});
