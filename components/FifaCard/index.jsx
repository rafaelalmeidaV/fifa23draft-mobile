import { View, Image } from "react-native";
import { Text } from "react-native-paper";
import { Wrapper, NameText, Playercardtop, Playermasterinfo, PlayerRating, PlayerPosition, PlayerNation } from "./style";
import image from "./img/argentina.png"


export default function FifaCard(props) {

    return (<Wrapper>

        <Playercardtop>
            <PlayerRating>{props.rating}</PlayerRating>
            <PlayerPosition>{props.position}</PlayerPosition>
            <Image source={image} style={{ width: 20, height: 20 }} resizeMode="contain" />
        </Playercardtop>
        <NameText>{props.name}</NameText>
        <View style={{ width: "100%", height: 1, backgroundColor: "#525a00" }}></View>

        <View style={{ flexDirection: "row", color: "white", justifyContent: "space-around" }}>

            <View style={{ flexDirection: "column", width: "50%", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 10 }}>RIT: {props.pace}</Text>
                <Text style={{ color: "white", fontSize: 10 }}>CHU: {props.shooting}</Text>
                <Text style={{ color: "white", fontSize: 10 }}>PAS: {props.passing}</Text>
            </View>
            <View style={{ height: "100%", width: 1, backgroundColor: "#525a00" }}></View>
            <View style={{ flexDirection: "column", width: "50%", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 10 }}>DRI: {props.dribbling}</Text>
                <Text style={{ color: "white", fontSize: 10 }}>DEF: {props.defending}</Text>
                <Text style={{ color: "white", fontSize: 10 }}>FIS: {props.physicality}</Text>
            </View>
        </View>


    </Wrapper>)

}