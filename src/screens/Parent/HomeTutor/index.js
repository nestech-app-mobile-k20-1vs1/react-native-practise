// HomeTutor - Trang Home khi Phụ Huynh học sinh chọn Tutor từ Home
import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

const HomeTutor = () => {
  const duongDanAnh = [
    // require('./imagePhuHuynh/PhuHuynhLop1.png'),
    // require('./imagePhuHuynh/PhuHuynhLop2.png'),
    // require('./imagePhuHuynh/PhuHuynhLop3.png'),
    // require('./imagePhuHuynh/PhuHuynhLop4.png'),
    // require('./imagePhuHuynh/PhuHuynhLop5.png'),
    // require('./imagePhuHuynh/PhuHuynhLop6.png'),
    // require('./imagePhuHuynh/PhuHuynhLop7.png'),
    // require('./imagePhuHuynh/PhuHuynhLop8.png'),
    // require('./imagePhuHuynh/PhuHuynhLop9.png'),
    // require('./imagePhuHuynh/PhuHuynhLop10.png'),
    // require('./imagePhuHuynh/PhuHuynhLop11.png'),
    // require('./imagePhuHuynh/PhuHuynhLop12.png')
    // Thêm các đường dẫn ảnh khác theo thứ tự mong muốn
  ];

  const data = duongDanAnh.map((duongDan, index) => ({
    id: String(index),
    source: duongDan
  }));

  const hienThiItem = ({ item }) => (
    <View style={styles.anhContainer}>
      <Image source={item.source} style={styles.anh} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={hienThiItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.khungFlatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  khungFlatList: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  anhContainer: {
    margin: 15,
    borderWidth: 1, // Độ dày của đường viền
    borderColor: '#0078ae', // Màu sắc của đường viền
    borderRadius: 30 // Đặt giá trị borderRadius là một nửa của chiều rộng hoặc chiều cao để bo tròn góc
  },
  anh: {
    width: 160,
    height: 160,
    borderRadius: 80
  }
});

export default HomeTutor;
