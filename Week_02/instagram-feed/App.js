import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
const feedData = [
  {
    id: 1,
    name: 'CoderSchool',
    image: require('./assets/Nature-1.jpg'),
    likeCount: 128,
    avatar: require('./assets/avartar.png')
  },
  {
    id: 2,
    name: 'Whoami',
    image: require('./assets/Nature-2.jpg'),
    likeCount: 20,
    avatar: require('./assets/avartar.png')
  },
  {
    id: 3,
    name: 'Alexander',
    image: require('./assets/Nature-3.jpg'),
    likeCount: 20,
    avatar: require('./assets/avartar.png')
  },
  {
    id: 4,
    name: 'SanJose',
    image: require('./assets/Nature-4.jpg'),
    likeCount: 20,
    avatar: require('./assets/avartar.png')
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Image
          source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"}}
          style={styles.logo} resizeMode="contain"
        />
        <Feather name="inbox" size={27} color="black" />
      </View>
      <View style={styles.post}>
      <ScrollView
          contentContainerStyle={{
            flexDirection: "column",
          }}>
        {feedData.map(feed => {
          return (
            <View style={styles.feedItem} key={feed.id}>
              <View style={styles.avatarWrapper}>
                <Image source={feed.avatar} style={styles.avatarImage} resizeMode="cover"/>
                <Text styles={styles.posterName}>{feed.name}</Text>
              </View>
              <View style={styles.imageWrapper}>
                <Image source={feed.image} style={styles.imagePoster} resizeMode="cover"/>
              </View>
              <View style={styles.actionPost}>
                <Feather name="heart" size={27} color="black" onPress={() => alert("Liked")}/>
                <Feather name="message-square" size={27} color="black" onPress={() => alert("Message")}/>
                <Feather name="share" size={27} color="black" onPress={() => alert("Shared")}/>
              </View>
              <View style={styles.countLike}> 
                <FontAwesome name="heart" size={27} color="black"/>
                <Text>{feed.likeCount} likes</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerLogo: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: '#f3f6fa',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  post: {
    flex: 0.8,
  },
  logo: {
    flex: 1,
    width: null,
    height: 44
  },
  avatarWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal: 12,
  },
  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 23
  },
  imageWrapper: {
    flex: 0.9,
    // height: 300
  },
  imagePoster: {
    width: null,
    height: 300,
  },
  feedItem: {
    flex: 1,
  },
  actionPost: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    justifyContent: "space-around"
  },
  countLike: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  }
});
