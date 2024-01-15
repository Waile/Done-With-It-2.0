import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AppText from "../components/Text";
import Button from "../components/Button";
import Loader from "../components/Loader";
import useApi from "../hooks/useApi";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
// ];

function ListingsScreen({ navigation }) {
  // const {
  //   data: listings,
  //   error,
  //   loading,
  //   request: loadListings,
  // } = useApi(listingsApi.getListings);
  const getListingsApi = useApi(listingsApi.getListings);
  useEffect(() => {
    getListingsApi.request();
    // getListingsApi.request(a,b,c) api call with parameters/arguments
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi?.error && (
        <>
          <AppText>Couldn't Retrieve the listings</AppText>
          <Button title={"Retry"} onPress={loadListings} />
        </>
      )}
      <Loader visible={getListingsApi?.loading} />
      {!getListingsApi?.loading && (
        <FlatList
          data={getListingsApi?.data}
          keyExtractor={(listing) => listing.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item?.images[0]?.url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
