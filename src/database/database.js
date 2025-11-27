import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync('Moods_2.db');

// criar a tabela
export async function initDB() {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS moods (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        emoji TEXT NOT NULL,
        note TEXT
      );
    `);
  } catch (error) {
    console.log("initDB error:", error);
    throw error;
  }
}

// CREATE
export async function addMood(emoji, note, date) {
  try {
    await db.runAsync(
      'INSERT INTO moods (emoji, note, date) VALUES (?, ?, ?)',
      [emoji, note, date]
    );
    return true;
  } catch (error) {
    console.log("addMood error:", error);
    throw error;
  }
}

// READ
export async function getAllMoods() {
  try {
    const allRows = await db.getAllAsync('SELECT * FROM moods ORDER BY id DESC');
    return allRows;
  } catch (error) {
    console.log("getAllMoods error:", error);
    throw error;
  }
}

// UPDATE
export async function updateMood(id, emoji, note) {
  try {
    await db.runAsync(
      'UPDATE moods SET emoji = ?, note = ? WHERE id = ?',
      [emoji, note, id]
    );
    return true;
  } catch (error) {
    console.log("updateMood error:", error);
    throw error;
  }
}

// DELETE
export async function deleteMood(id) {
  try {
    await db.runAsync(
      'DELETE FROM moods WHERE id = ?',
      [id]
    );
    return true;
  } catch (error) {
    console.log("deleteMood error:", error);
    throw error;
  }
}
