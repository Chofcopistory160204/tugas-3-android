import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [books, setBooks] = useState([
    { key: '1', title: 'Into The Magic Shop', image: 'https://luckty.wordpress.com/wp-content/uploads/2021/08/into-the-magic-shop.jpg' },
    { key: '2', title: 'Bumi', image: 'https://down-id.img.susercontent.com/file/2050acdde63c20061b73cf2f82de1ce6' },
    { key: '3', title: 'Bulan', image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//90/MTA-40213961/brd-44261_original-bulan-new-cover-buku-novel-remaja_full01.jpg' },
    { key: '4', title: 'Matahari', image: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/15/dc2392ee-07cf-499d-9984-9783046940cf.jpg' },
    { key: '5', title: 'Bintang', image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-1462217/gramedia_gramedia-bintang-by-tere-liye-buku-novel_full03.jpg' },
  ]);

  const addBook = () => {
    if (title && image) {
      setBooks([...books, { key: Math.random().toString(), title, image }]);
      setTitle('');
      setImage('');
    } else {
      Alert.alert('Error', 'Please enter both title and image URL.');
    }
  };

  const removeBook = (key) => {
    setBooks(books.filter(book => book.key !== key));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Buku Bacaan Copcop</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Masukkan judul buku"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Masukkan URL gambar sampul buku"
          value={image}
          onChangeText={setImage}
        />
        <Button title="Tambahkan Buku" onPress={addBook} color="#1DA1F2" />
      </View>
      <Image
        style={styles.logoImage}
        source={{ uri: 'https://png.pngtree.com/png-clipart/20200710/original/pngtree-books-logo-png-image_4136008.jpg' }}
      />
      <FlatList
        data={books}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image style={styles.itemImage} source={{ uri: item.image }} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>{item.title}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => Alert.alert(
                  "Hapus Buku",
                  `Apakah Anda yakin ingin menghapus buku ${item.title}?`,
                  [
                    { text: "Tidak" },
                    { text: "Ya", onPress: () => removeBook(item.key) }
                  ]
                )}
              >
                <Text style={styles.deleteButtonText}>Hapus</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 20,
    backgroundColor: '#1DA1F2',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  logoImage: {
    width: 250,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#1DA1F2',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default App;
