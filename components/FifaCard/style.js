import styled from "styled-components/native";

export const Wrapper = styled.ImageBackground.attrs({
	source: { uri: "https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png" },
	resizeMode: "contain"
})`
	height: 200px;
	width: 120px;
	padding: 5px;
	align-items: center;
	justify-content: center;
	
`;
export const Playercardtop = styled.View`
	width: 80%;
`;
export const Playermasterinfo = styled.View`
	
	line-height: 2.2px;
	font-weight: 300;
	padding: 1.5px 0;
	text-transform: uppercase;
`;
export const PlayerRating = styled.Text`
	font-size: 20px;
	color: white;
`;
export const PlayerPosition = styled.Text`
	font-size: 20px;
	color: white;
`;
export const PlayerNation = styled.View`
	display: block;
	width: 2px;
	height: 25px;
	margin: 0.3px 0;
`;

export const NameText = styled.Text`
	font-size: 13px;
	color: white;
`;



