import React, { useEffect, useState } from "react";
import { View } from "react-native";
import FifaCard from "../../components/FifaCard";
import axios from "axios";



export default function Teste() {
    const [data, setData] = useState()

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {

            var data = JSON.stringify({
                "name": "Pelé"
              });
              
              var config = {
                method: 'get',
              maxBodyLength: Infinity,
                url: 'http://nest-api-produtos.vercel.app/fifacard/getCardByName',
                headers: { 
                  'Content-Type': 'application/json'
                },
                body : data
              };
              
              axios(config)
              .then(function (response) {
                console.log(response.data);
                setData(response.data)
              })
              .catch(function (error) {
                console.log(error);
              });
              

        } catch (err) {
            console.log(err)
        }

    }


    return <View style={{ alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}>
        <FifaCard
            name="Lionel Messi"
            position="PD"
            rating={94}
            pace={86}
            shooting={93}
            passing={94}
            dribbling={97}
            defending={37}
            physicality={70}
        />
    </View>

}
